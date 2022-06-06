import styled, { css } from 'styled-components';

const Box = styled.section`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 2rem;
	overflow: hidden;
	width: 100%;
	background-image: url('/contourLine.svg');
	${({ variant }) =>
		variant == 'text' &&
		css`
			padding: 2rem;
			margin-top: 4.6rem;
		}
		`};
`;

export default Box;
