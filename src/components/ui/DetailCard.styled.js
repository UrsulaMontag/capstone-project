import styled, { css } from 'styled-components';

export const DetailCard = styled.article`
	position: relative;
	width: 95vw;
	max-width: 600px;
	padding: 3rem;
	margin: 3rem 0;
	border-radius: 30px;

	overfow: hidden;
	background-color: var(--bg-color-light);
	box-shadow: 4px -3px;

	${({ variant }) =>
		variant == true &&
		css`
			border: 2px solid var(--color-light);
		`};
	${({ variant }) =>
		variant == false &&
		css`
			border: 2px solid var(--color-warning-red);
		`};
`;
