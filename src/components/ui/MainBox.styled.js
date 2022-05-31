import styled, { css } from 'styled-components';

const Box = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 5rem;
	width: 100%;
	max-height: 100vh;
	background: var(--main-bg-color);
	${({ variant }) =>
		variant == 'text' &&
		css`
			padding: 2rem;
		}
		`};
`;

export default Box;
