import { FormContainer } from "./styles";

import { Col } from "@/components/containers/Col";

import { Input } from "@/components/ui/Input";

import { Row } from "@/components/containers/Row";

import { HtmlHTMLAttributes } from "react";

import { useForm } from "react-hook-form";

import * as zod from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

import { ErrorMessage } from "@/components/ui/ErrorMessage";
import { Select } from "@/components/ui/Select";

const FormAddressSchema = zod.object({
	zipCode: zod.string().min(1, "Preencha o Campo"),
	street: zod.string().min(1, "Preencha o Campo"),
	number: zod.number({ invalid_type_error: "Informe um número válido" }),
	complement: zod.string().min(1, "Preencha o Campo"),
	neighborhood: zod.string().min(1, "Preencha o Campo"),
	city: zod.string().min(1, "Preencha o Campo"),
	fu: zod.string().min(1, "Preencha o Campo"),
});

export type FormAddressSchemaType = zod.infer<typeof FormAddressSchema>;

interface FormProps extends HtmlHTMLAttributes<HTMLFormElement> {
	onFormSubmit: (data: FormAddressSchemaType) => void;
}
export function Form({ onFormSubmit, ...rest }: FormProps) {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormAddressSchemaType>({
		defaultValues: {},
		resolver: zodResolver(FormAddressSchema),
	});

	function handleFormSubmit(data: FormAddressSchemaType) {
		onFormSubmit(data);
	}
	return (
		<FormContainer {...rest} onSubmit={handleSubmit(handleFormSubmit)}>
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
					<Select wFull placeholder="Cidade" {...register("city")} />
					{errors.city && <ErrorMessage marginTop="0.4rem">{errors.city.message}</ErrorMessage>}
				</Col>
				<Col flex="2" data-col>
					<Select wFull placeholder="UF" {...register("fu")} />
					{errors.fu && <ErrorMessage marginTop="0.4rem"> {errors.fu.message}</ErrorMessage>}
				</Col>
			</Row>
		</FormContainer>
	);
}
