import Navigation from '../nav/Navigation';
import Container from '../ui/Container.styled';

export default function Layout({ children }) {
	return (
		<>
			<Container>{children}</Container>
			<Navigation />
		</>
	);
}
