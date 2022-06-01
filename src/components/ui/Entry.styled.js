import styled from 'styled-components';

export const StyledEntry = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	min-width: 80vw;
	max-width: 600px;
	padding: 2rem;
	margin: 3rem 0;

	overfow: hidden;
	background-color: var(--bg-color-light);
	border: 1px solid var(--main-bg-color);
	box-shadow: 4px -3px;
`;
