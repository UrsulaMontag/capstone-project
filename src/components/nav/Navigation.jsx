import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { NavBox } from '../ui/NavBoxes.styled';
import NavBottom from '../ui/Navigation.styled';

export default function Navigation() {
	const router = useRouter();

	return (
		<NavBottom>
			<Link
				passHref
				href={{
					pathname: '/',
				}}
			>
				<NavBox pathName={router.pathname}>
					<Image src="/home.svg" alt="link to home page" width={50} height={50} />
				</NavBox>
			</Link>

			<Link
				passHref
				href={{
					pathname: '/map',
				}}
			>
				<NavBox pathName={router.pathname}>
					<Image src="/arrow.svg" alt="link to map" width={47} height={47} />
				</NavBox>
			</Link>

			<Link
				passHref
				href={{
					pathname: '/create-entry',
				}}
			>
				<NavBox pathName={router.pathname}>
					<Image src="/create.svg" alt="link to home page" width={50} height={50} />
				</NavBox>
			</Link>

			<Link
				passHref
				href={{
					pathname: '/entries',
				}}
			>
				<NavBox pathName={router.pathname}>
					<Image src="/book.svg" alt="link to home page" width={50} height={50} />
				</NavBox>
			</Link>
		</NavBottom>
	);
}
