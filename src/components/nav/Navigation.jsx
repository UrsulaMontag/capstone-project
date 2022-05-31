import Link from 'next/link';
import NavBottom from '../ui/Navigation.styled';

export default function Navigation() {
	return (
		<NavBottom>
			<Link passHref href="/">
				home
			</Link>

			<Link passHref href="/map">
				Map
			</Link>

			<Link passHref href="/create-entry">
				Create-Entry
			</Link>

			<Link passHref href="/entries">
				Entries
			</Link>
		</NavBottom>
	);
}
