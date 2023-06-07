import { FormContainer } from "./styles";

import { Col } from "@/components/containers/Col";

import { Input } from "@/components/ui/Input";

import { Row } from "@/components/containers/Row";

import { HtmlHTMLAttributes } from "react";

import { useForm } from "react-hook-form";

import * as zod from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

import { ErrorMessage } from "@/components/ui/ErrorMessage";

const FormAddressSchema = zod.object({
	cep: zod.string(),
	rua: zod.string(),
	numero: zod.number({ invalid_type_error: "Informe um número válido" }),
	complemento: zod.string(),
	bairro: zod.string(),
	cidade: zod.string(),
	uf: zod.string(),
});

export type FormAddressSchemaType = zod.infer<typeof FormAddressSchema>;

interface FormProps extends HtmlHTMLAttributes<HTMLFormElement> {
	onFormSubmit: (data: FormAddressSchemaType) => void;
}
export function Form({ onFormSubmit, ...rest }: FormProps) {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<FormAddressSchemaType>({
		defaultValues: {
			cep: "",
			rua: "",
			numero: 0,
			complemento: "",
			bairro: "",
			cidade: "",
			uf: "",
		},
		resolver: zodResolver(FormAddressSchema),
	});

	function handleFormSubmit(data: FormAddressSchemaType) {
		onFormSubmit(data);
	}
	return (
		<FormContainer {...rest} onSubmit={handleSubmit(handleFormSubmit)}>
			<Row marginTop="3.5rem" wrapRow={true} data-row>
				<Col flexBasis="300px" data-col>
					<Input wFull placeholder="CEP" {...register("cep")} />
					{errors.cep && <ErrorMessage marginTop="0.4rem">{errors.cep.message}</ErrorMessage>}
				</Col>
			</Row>
			<Row marginTop="1rem" wrapRow={true} data-row>
				<Col flex="1" data-col>
					<Input wFull placeholder="Rua" {...register("rua")} />
					{errors.rua && <ErrorMessage marginTop="0.4rem">{errors.rua.message}</ErrorMessage>}
				</Col>
			</Row>
			<Row marginTop="1rem" gap={12} wrapRow={true} data-row>
				<Col flex="4" data-col>
					<Input wFull placeholder="Número" {...register("numero", { valueAsNumber: true })} />
					{errors.numero && <ErrorMessage marginTop="0.4rem">{errors.numero.message}</ErrorMessage>}
				</Col>
				<Col flex="10" data-col>
					<Input wFull placeholder="Complemento" {...register("complemento")} />
					{errors.complemento && <ErrorMessage marginTop="0.4rem">{errors.complemento.message}</ErrorMessage>}
				</Col>
			</Row>

			<Row marginTop="1rem" gap={12} wrapRow={true} data-row>
				<Col flex="4" data-col>
					<Input wFull placeholder="Bairro" {...register("bairro")} />
					{errors.bairro && <ErrorMessage marginTop="0.4rem">{errors.bairro.message}</ErrorMessage>}
				</Col>
				<Col flex="8" data-col>
					<Input wFull placeholder="Cidade" {...register("cidade")} />
					{errors.cidade && <ErrorMessage marginTop="0.4rem">{errors.cidade.message}</ErrorMessage>}
				</Col>
				<Col flex="2" data-col>
					<Input wFull placeholder="UF" {...register("uf")} />
					{errors.uf && <ErrorMessage marginTop="0.4rem"> {errors.uf.message}</ErrorMessage>}
				</Col>
			</Row>
		</FormContainer>
	);
}
