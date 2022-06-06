import styled, { css } from 'styled-components';

const Box = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 2rem;
	overflow: hidden;
	width: 100%;
	min-height: 85vh;
	background-image: url('/contourLine.svg');
	${({ variant }) =>
		variant == 'text' &&
		css`
			padding: 2rem;
		}
		`};
`;

export default Box;
