import Link from 'next/link';
import SVGIcon from '../basics/SVGIcons';

export default function Navigation() {
	return (
		<>
			<Link passHref href="/">
				<span>
					<SVGIcon variant="home" color="var(--dark-lilac)" />
				</span>
			</Link>

			<Link passHref href="/map">
				Products
			</Link>

			<Link passHref href="/create-entry">
				Categories
			</Link>

			<Link passHref href="/entries">
				Add Products
			</Link>
		</>
	);
}
