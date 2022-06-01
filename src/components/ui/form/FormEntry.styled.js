import styled from 'styled-components';

const StyledEntryForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 3.5rem;
	max-width: 90vw;
	margin: 2rem;
	padding: 2rem;

	background-color: var(--bg-color-light);
	border: 2px solid var(--main-bg-color);
	box-shadow: 4px -3px;
`;
export default StyledEntryForm;
