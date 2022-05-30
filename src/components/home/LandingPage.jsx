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
					width="400"
					height="510"
					layout="responsive"
				/>
			</HomeImageBox>
			<Typography variant="h1">RarelyTrackDown</Typography>
		</>
	);
}
