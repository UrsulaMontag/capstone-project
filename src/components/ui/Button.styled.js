import styled, { css } from 'styled-components';

const Button = styled.button`
	background-color: #342293;
	font-size: 1.6rem;
	color: white;
	padding: 5px;
	margin-bottom: 12px;
	border-radius: 20px;
	border: none;
	width: 55%;
	display: flex;
	align-self: center;
	justify-content: center;
	${({ variant }) => variant == 'warning' && css` margin-top: 10px;}`}
	${({ variant }) =>
		variant === 'smallDo' &&
		css`
			background-color: ${props => (props.href === props.pathName ? '#ffa375' : 'white')};
			width: 55px;
			border-radius: 50%;
			padding: 5px;
			margin: 7px;
			border: none;
			display: flex;
			justify-content: center;
		`}
`;

export default Button;

// import styled from 'styled-components';

// export default function Button({ children, variant, ...rest }) {
// 	switch (variant) {
// 		case 'warning':
// 			return <StyledWarningButton {...rest}>{children}</StyledWarningButton>;
// 		case 'smallDo':
// 			return <StyledSmallDoButton {...rest}>{children}</StyledSmallDoButton>;
// 		default:
// 			return <StyledButton {...rest}>{children}</StyledButton>;
// 	}
// }

// const StyledButton = styled.button`
// 	width: 15rem;
// 	height: 4.6rem;

// 	background: var(--button-bg-color);
// 	color: var(--text-color-dark);
// 	border-radius: 20px;

// 	box-shadow: 6px -3px var(--shadow);
// 	filter: drop-shadow(0 4 0 var(--shadow);

// 	box-shadow: 6px -3px var(--shadow);
// 	filter: drop-shadow(0 4 0 var(--shadow));

// 	:active {
// 		box-shadow: none;
// 		filter: none;
//     }
//     :hover {
// 		background: var(--button-bg-color--hover);
// 		border: 2px solid var(--main-bg-color);
// 	}
// `;

// const StyledWarningButton = styled.button`
// 	width: 35rem;
// 	height: 4.6rem;

// 	background: var(--button-bg-color);
// 	color: var(--color-warning-red);
// 	border-radius: 20px;

// 	box-shadow: 6px -3px var(--shadow);
// 	filter: drop-shadow(0 4 0 var(--shadow));

// 	:hover {
// 		background: var(--button-bg-color--hover);
// 		border: 3px solid var(--color-warning-red);
// 	}
// 	:active {
// 		box-shadow: none;
// 		filter: none;
// 	}
// `;

// const StyledSmallDoButton = styled.button`
// 	width: 4.6rem;
// 	height: 4.6rem;

// 	background: var(--button-bg-color);
// 	color: var(--color-dark);
// 	border-radius: 10px;

// 	font-weight: 700;

// 	box-shadow: 6px -3px var(--shadow);
// 	filter: drop-shadow(0 4 0 var(--shadow));

// 	:active {
// 		box-shadow: none;
// 		filter: none;
// 	}
// 	:hover {
// 		background: var(--button-bg-color--hover);
// 		border: 2px solid var(--main-bg-color);
// 	}
// `;
