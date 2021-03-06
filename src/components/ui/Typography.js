import styled from 'styled-components';

export default function Typography({ children, variant, component, ...rest }) {
	switch (variant) {
		case 'h1':
			return (
				<StyledH1 {...rest} as={component}>
					{children}
				</StyledH1>
			);
		case 'h2':
			return (
				<StyledH2 {...rest} as={component}>
					{children}
				</StyledH2>
			);
		case 'h3':
			return (
				<StyledH3 {...rest} as={component}>
					{children}
				</StyledH3>
			);
		case 'h3-list':
			return (
				<StyledH3List {...rest} as={component}>
					{children}
				</StyledH3List>
			);
		case 'h3-link':
			return (
				<StyledH3Link {...rest} as={component}>
					{children}
				</StyledH3Link>
			);
		case 'body1':
			return (
				<StyledBodyText {...rest} as={component}>
					{children}
				</StyledBodyText>
			);
		case 'info':
			return (
				<StyledInfoText {...rest} as={component}>
					{children}
				</StyledInfoText>
			);
		case 'info-head':
			return (
				<StyledInfoHead {...rest} as={component}>
					{children}
				</StyledInfoHead>
			);
		case 'login-info':
			return (
				<StyledInfoLogin {...rest} as={component}>
					{children}
				</StyledInfoLogin>
			);
	}
}

const StyledH1 = styled.h1`
	color: var(--color-light);
	font-family: 'Kdam Thmor Pro', sans-serif;
	font-size: 4rem;
	margin-top: 18rem;
`;
const StyledH2 = styled.h2`
	color: var(--color-light);
	font-size: 2.2rem;
	font-family: 'Kdam Thmor Pro', sans-serif;
`;
const StyledH3 = styled.h3`
	color: var(--headline-little);
	font-size: 1.6rem;
`;
const StyledH3List = styled.h3`
	color: var(--headline-little);
	font-size: 1.6rem;
	font-weight: 400;
`;
const StyledH3Link = styled.h3`
	color: var(--color-warning-red);
	font-size: 1.6rem;
	font-weight: 700;
`;
const StyledBodyText = styled.p`
	color: var(--text-color-dark);
`;
const StyledInfoText = styled.p`
	color: var(--bg-color-light);
	font-weight: 200;
`;
const StyledInfoHead = styled.span`
	color: var(--bg-color-light);
	font-weight: 200;
`;
const StyledInfoLogin = styled.h2`
	color: var(--bg-color-light);
	font-size: 2.2rem;
	font-family: 'Kdam Thmor Pro', sans-serif;
`;
