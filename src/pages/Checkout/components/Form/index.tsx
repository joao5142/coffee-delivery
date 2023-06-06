import { Col } from "@/components/containers/Col";
import { FormContainer } from "./styles";
import { Input } from "@/components/ui/Input";
import { Row } from "@/components/containers/Row";

export function Form() {
	return (
		<FormContainer>
			<Row marginTop="3.5rem">
				<Col flexBasis="300px">
					<Input wFull placeholder="CEP" />
				</Col>
			</Row>
			<Row marginTop="1rem">
				<Col flex="1">
					<Input wFull placeholder="Rua" />
				</Col>
			</Row>
			<Row marginTop="1rem" gap={12}>
				<Col flex="4">
					<Input wFull placeholder="Número" />
				</Col>
				<Col flex="10">
					<Input wFull placeholder="Complemento" />
				</Col>
			</Row>

			<Row marginTop="1rem" gap={12}>
				<Col flex="4">
					<Input wFull placeholder="Bairro" />
				</Col>
				<Col flex="8">
					<Input wFull placeholder="Cidade" />
				</Col>
				<Col flex="2">
					<Input wFull placeholder="UF" />
				</Col>
			</Row>
		</FormContainer>
	);
}
