import styled, { css } from 'styled-components';

const Input = styled.input`
	border: none;
	border-radius: 1rem;
	width: 100%;
	padding: 1rem;

	:focus {
		border: solid 1.5px var(--button-bg-color);
	}

	::placeholder {
		color: darkgray;
	}

	${({ variant }) =>
		variant === 'number' &&
		css`
			width: 40%;
		`};
	${({ variant }) =>
		variant === 'textarea' &&
		css`
			border: none;
			width: 100%;
			min-height: 9rem;
			padding: 1rem;
		`};
`;
export { Input };
