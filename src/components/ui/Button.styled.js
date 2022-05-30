import styled, { css } from 'styled-components';

const Button = styled.button`
	background: var(--button-bg-color);
	color: var(--text-color-dark);
	font-size: 1.6rem;
	padding: 0.5rem;
	border-radius: 20px;
	border: none;
	width: 55%;

	box-shadow: 6px -3px var(--shadow);
	filter: drop-shadow(0 0.2rem 0.25rem rgba(0, 0, 0, 0.2));

	${({ variant }) =>
		variant == 'warning' &&
		css`
			color: var(--color-warning-red);
			:hover {
				border: 3px solid var(--color-warning-red);
			}
		`};
	${({ variant }) =>
		variant === 'smallDo' &&
		css`
			width: 4.6rem;
			height: 4.6rem;
			font-weight: 700;
			border-radius: 10px;
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
