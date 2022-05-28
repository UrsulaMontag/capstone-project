import styled from 'styled-components';

export default function Button({ children, variant, ...rest }) {
	switch (variant) {
		case 'warning':
			return <StyledWarningButton {...rest}>{children}</StyledWarningButton>;
		case 'smallDo':
			return <StyledSmallDoButton {...rest}>{children}</StyledSmallDoButton>;
		default:
			return <StyledButton {...rest}>{children}</StyledButton>;
	}
}

const StyledButton = styled.button`
	width: 15rem;
	height: 4.6rem;

	background: var(--button-bg-color);
	color: var(--text-color-dark);
	border-radius: 20px;

	box-shadow: 6px -3px var(--shadow);
	filter: drop-shadow(0 4 0 var(--shadow);

	box-shadow: 6px -3px var(--shadow);
	filter: drop-shadow(0 4 0 var(--shadow));

	:active {
		box-shadow: none;
		filter: none; 
    }
    :hover {
		background: var(--button-bg-color--hover);
		border: 2px solid var(--main-bg-color);
	}
`;

const StyledWarningButton = styled.button`
	width: 35rem;
	height: 4.6rem;

	background: var(--button-bg-color);
	color: var(--color-warning-red);
	border-radius: 20px;

	box-shadow: 6px -3px var(--shadow);
	filter: drop-shadow(0 4 0 var(--shadow));

	:hover {
		background: var(--button-bg-color--hover);
		border: 3px solid var(--color-warning-red);
	}
	:active {
		box-shadow: none;
		filter: none;
	}
`;

const StyledSmallDoButton = styled.button`
	width: 4.6rem;
	height: 4.6rem;

	background: var(--button-bg-color);
	color: var(--color-dark);
	border-radius: 10px;

	font-weight: 700;

	box-shadow: 6px -3px var(--shadow);
	filter: drop-shadow(0 4 0 var(--shadow));

	:active {
		box-shadow: none;
		filter: none;
	}
	:hover {
		background: var(--button-bg-color--hover);
		border: 2px solid var(--main-bg-color);
	}
`;
