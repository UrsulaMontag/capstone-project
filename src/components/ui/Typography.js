import styled from 'styled-components';

export default function Typography({ children, variant, component, ...rest }) {
	switch (variant) {
		case 'h1':
			return (
				<StyledH1 {...rest} as={component}>
					{children}
				</StyledH1>
			);
		case 'h3':
			return (
				<StyledH3 {...rest} as={component}>
					{children}
				</StyledH3>
			);
		case 'body1':
			return (
				<StyledBodyText {...rest} as={component}>
					{children}
				</StyledBodyText>
			);
	}
}

const StyledH1 = styled.h1`
	color: var(--text-color-dark);
	background: ${({ background }) => background};
`;
const StyledH3 = styled.h3`
	color: var(--headline-little);
	font-size: 1.5rem;
`;
const StyledBodyText = styled.p`
	color: var(--text-color-dark);
`;
