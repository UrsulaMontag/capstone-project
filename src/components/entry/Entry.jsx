import { StyledEntry } from '../ui/Entry.styled';
import Typography from '../ui/Typography';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { TextBox } from '../ui/TextBox.styled';
import { IconBox } from '../ui/ListIconBox.styled';

export default function Entry({ entry }) {
	const router = useRouter();

	return (
		<StyledEntry>
			<TextBox>
				<Typography variant="h3-list">{entry.date}</Typography>
			</TextBox>
			<Link
				passHref
				href={{
					pathname: '/entry/' + entry.id,
					query: {
						as: 'id',
						entry: entry,
						id: entry.id,
					},
				}}
			>
				<TextBox variant="icon" pathname={router.pathname}>
					<Typography variant="h3-link">{entry.name}</Typography>

					<IconBox>
						<Image
							src="/salamander.png"
							alt="icon with linkfunktion"
							width={25}
							height={25}
						/>
					</IconBox>
				</TextBox>
			</Link>
		</StyledEntry>
	);
}
