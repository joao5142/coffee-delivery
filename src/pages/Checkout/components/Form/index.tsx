import { FormContainer } from "./styles";

import { Col } from "@/components/containers/Col";

import { Input } from "@/components/ui/Input";

import { Row } from "@/components/containers/Row";

import { HtmlHTMLAttributes, useEffect, useState } from "react";

import { useForm } from "react-hook-form";

import * as zod from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

import { ErrorMessage } from "@/components/ui/ErrorMessage";
import { Select } from "@/components/ui/Select";
import { Loading } from "@/components/ui/Loading";
import { useContextSelector } from "use-context-selector";
import { OrderContext } from "@/contexts/OrderContext";

const FormAddressSchema = zod.object({
	zipCode: zod.string().min(1, "Preencha o Campo"),
	street: zod.string().min(1, "Preencha o Campo"),
	number: zod.number({ invalid_type_error: "Informe um número válido" }),
	complement: zod.string().min(1, "Preencha o Campo"),
	neighborhood: zod.string().min(1, "Preencha o Campo"),
	city: zod.string().min(1, "Preencha o Campo"),
	federatedUnit: zod.string().min(1, "Preencha o Campo"),
});

export type FormAddressSchemaType = zod.infer<typeof FormAddressSchema>;

interface FormProps extends HtmlHTMLAttributes<HTMLFormElement> {
	onFormSubmit: (data: FormAddressSchemaType) => void;
}
interface IFederatedUnits {
	id: number;
	nome: string;
	sigla: string;
}
export function Form({ onFormSubmit, ...rest }: FormProps) {
	const [federatedUnits, setFederatedUnits] = useState<IFederatedUnits[]>([]);
	const [townships, setTownships] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const address = useContextSelector(OrderContext, (context) => {
		return context.address;
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm<FormAddressSchemaType>({
		defaultValues: { ...address },
		resolver: zodResolver(FormAddressSchema),
	});

	const changeAddress = useContextSelector(OrderContext, (context) => {
		return context.setAddress;
	});

	const federatedUnitSelected = watch("federatedUnit");
	const city = watch("city");

	async function handleFormSubmit(data: FormAddressSchemaType) {
		await changeAddress(data);
		onFormSubmit(data);
	}
	async function fetchFederatedUnits() {
		const response = await fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados");
		const federatedUnits = await response.json();

		setFederatedUnits(federatedUnits);
	}
	async function fetchTownshipsByFederatedUnits() {
		setIsLoading(true);
		try {
			const response = await fetch(
				`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${federatedUnitSelected}/municipios`
			);
			const townships = await response.json();

			console.log(townships);
			setTownships(townships);
		} catch (error) {
			console.log(error);
		}

		setIsLoading(false);
	}

	useEffect(() => {
		fetchFederatedUnits();
	}, []);

	useEffect(() => {
		if (federatedUnitSelected) {
			fetchTownshipsByFederatedUnits();
		}
	}, [federatedUnitSelected]);

	return (
		<FormContainer {...rest} onSubmit={handleSubmit(handleFormSubmit)}>
			{isLoading && <Loading />}

			<Row marginTop="3.5rem" wrapRow={true} data-row>
				<Col flexBasis="300px" data-col>
					<Input wFull placeholder="CEP" {...register("zipCode")} />
					{errors.zipCode && <ErrorMessage marginTop="0.4rem">{errors.zipCode.message}</ErrorMessage>}
				</Col>
			</Row>
			<Row marginTop="1rem" wrapRow={true} data-row>
				<Col flex="1" data-col>
					<Input wFull placeholder="Rua" {...register("street")} />
					{errors.street && <ErrorMessage marginTop="0.4rem">{errors.street.message}</ErrorMessage>}
				</Col>
			</Row>
			<Row marginTop="1rem" gap={12} wrapRow={true} data-row>
				<Col flex="4" data-col>
					<Input wFull placeholder="Número" {...register("number", { valueAsNumber: true })} />
					{errors.number && <ErrorMessage marginTop="0.4rem">{errors.number.message}</ErrorMessage>}
				</Col>
				<Col flex="10" data-col>
					<Input wFull placeholder="Complemento" {...register("complement")} />
					{errors.complement && <ErrorMessage marginTop="0.4rem">{errors.complement.message}</ErrorMessage>}
				</Col>
			</Row>

			<Row marginTop="1rem" gap={12} wrapRow={true} data-row>
				<Col flex="4" data-col>
					<Input wFull placeholder="Bairro" {...register("neighborhood")} />
					{errors.neighborhood && <ErrorMessage marginTop="0.4rem">{errors.neighborhood.message}</ErrorMessage>}
				</Col>
				<Col flex="8" data-col>
					<Select wFull {...register("city")} value={city}>
						<option value="">Cidade (Selecione a UF)</option>
						{townships.map((township: { nome: string; id: string }) => {
							return (
								<option key={township.id} value={township.nome}>
									{township.nome}
								</option>
							);
						})}
					</Select>
					{errors.city && <ErrorMessage marginTop="0.4rem">{errors.city.message}</ErrorMessage>}
				</Col>
				<Col flex="2" data-col>
					<Select wFull {...register("federatedUnit")} value={federatedUnitSelected}>
						<option value="">UF</option>
						{federatedUnits.map((fu) => {
							return (
								<option key={fu.id} value={fu.sigla}>
									{fu.sigla}
								</option>
							);
						})}
					</Select>
					{errors.federatedUnit && <ErrorMessage marginTop="0.4rem"> {errors.federatedUnit.message}</ErrorMessage>}
				</Col>
			</Row>
		</FormContainer>
	);
}
