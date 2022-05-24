import styled from 'styled-components';

const Input = styled.input`
	border: none;
	border-radius: 0.5rem;
	width: 100%;
	padding: 1rem;

	:focus {
		border: solid 1.5px var(--button-bg-color);
	}

	::placeholder {
		color: darkgray;
	}
`;
export default Input;
