import { Box } from "@/styles/global";
import styled from "styled-components";

export const ErrorMessageContainer = styled(Box)`
	font-size: ${({ theme }) => theme.font_size.ROBOTO.l};
	color: #ff1414b7;
	margin-top: 0.5rem;
`;
