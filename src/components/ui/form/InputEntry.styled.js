import styled from 'styled-components';

export default function Input({ variant, ...rest }) {
	switch (variant) {
		case 'radio':
			return <StyledRadio {...rest} />;
		case 'number':
			return <StyledNumber {...rest} />;
		case 'textarea':
			return <StyledTextarea {...rest} />;
		default:
			return <StyledText {...rest} />;
	}
}
const StyledText = styled.input`
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
const StyledRadio = styled.input`
	border: none;
	padding: 1rem;

	:focus {
		border: solid 1.5px var(--button-bg-color);
	}
`;
const StyledNumber = styled.input`
	border: none;
	border-radius: 0.5rem;
	width: 50%;
	padding: 1rem;

	:focus {
		border: solid 1.5px var(--button-bg-color);
	}

	::placeholder {
		color: darkgray;
	}
`;
const StyledTextarea = styled.input`
	border: none;
	border-radius: 0.5rem;
	width: 100%;
	min-height: 5rem;
	padding: 1rem;

	:focus {
		border: solid 1.5px var(--button-bg-color);
	}

	::placeholder {
		color: darkgray;
	}
`;
