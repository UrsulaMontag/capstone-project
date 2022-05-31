import styled, { css } from 'styled-components';

export const StyledMap = styled.section`
	margin: auto;
	border: 2px solid var(--main-bg-color-full);
	box-shadow: 4px -3px;
	border-radius: 20px;
	${({ variant }) =>
		variant == 'whole-window' &&
		css`
			height: 90vh;
			max-width: 100%;
		`};
	${({ variant }) =>
		variant == 'small-window' &&
		css`
			height: 400;
			width: 400;
		`};
`;
