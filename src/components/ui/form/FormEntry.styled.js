import styled from 'styled-components';

const StyledEntryForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	max-width: 40rem;
	margin: 2rem;
	padding: 2rem;

	background-color: var(--main-bg-color);
	border: 2px solid var(--main-bg-color-full);
	box-shadow: 4px -3px;
`;
export default StyledEntryForm;
