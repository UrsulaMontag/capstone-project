import styled, { css } from 'styled-components';

const Box = styled.section`
	position: relative;
	overflow: hidden;
	width: 100%;
	height: 93vh;
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
