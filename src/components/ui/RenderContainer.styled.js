import styled, { css } from 'styled-components';
import RenderIf from '../global/RenderIf';

const RenderContainer = styled(RenderIf)`
	width: 100%;
	display: flex;
	align-self: center;
	justify-content: center;
	${({ variant }) => variant == 'container-button' && css` flex-direction: column}`}
	${({ variant }) =>
		variant === 'container-form' &&
		css`
			border-color: red;
		`}
`;

export default RenderContainer;
