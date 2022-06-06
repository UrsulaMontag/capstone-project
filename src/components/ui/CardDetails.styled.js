import styled from 'styled-components';

export const Details = styled.details`
	background: var(--detail-color);
	border: 0.5px solid var(--color-dark);
	border-radius: 30px;
	padding: 1rem;
	margin: 2.5rem 0;
	summary > * {
		display: inline;
		cursor: pointer;
	}
`;
