import Link from 'next/link';

export default function Navigation() {
	return (
		<>
			<Link passHref href="/">
				home
			</Link>

			<Link passHref href="/map">
				Map
			</Link>

			<Link passHref href="/create-entry">
				Create-Entrie
			</Link>

			<Link passHref href="/entries">
				Entries
			</Link>
		</>
	);
}
