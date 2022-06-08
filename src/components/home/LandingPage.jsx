import Image from 'next/image';
import HomeImageBox from '../ui/HomeImageBox.styled';
import Typography from '../ui/Typography';

export default function LandingPage() {
	return (
		<>
			<HomeImageBox>
				<Image
					src="/homepic.png"
					alt="fire salamander on hand"
					width="1078"
					height="903"
					layout="responsive"
				/>
			</HomeImageBox>
			<Typography variant="h1">Rare-Traces</Typography>
			<Typography variant="h2" component="h2">
				was - wann - wo
			</Typography>
		</>
	);
}
