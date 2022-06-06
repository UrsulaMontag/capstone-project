import styled, { css } from 'styled-components';

const Button = styled.button`
	background: var(--button-bg-color);
	color: var(--text-color-dark);
	font-size: 1.6rem;
	padding: 0.8rem;
	border-radius: 8px;
	border: none;
	width: 55%;

	box-shadow: 6px -3px var(--shadow);

	${({ variant }) =>
		variant == 'warning' &&
		css`
			color: var(--color-warning-red);
			border: 3px solid var(--color-warning-red);
		`};
	${({ variant }) =>
		variant === 'smallDo' &&
		css`
			width: 6.6rem;
			height: 4.6rem;
			font-weight: 700;
		`};

	:hover {
		background: var(--button-bg-color--hover);
		border: 2px solid var(--main-bg-color);
	}
	:active {
		box-shadow: none;
		filter: none;
	}
`;

export default Button;
