import HomeBox from '../../src/components/ui/HomeBox.styled';

import dynamic from 'next/dynamic';
const DetailCard = dynamic(() => import('../../src/components/entry/EntryDetail'), {
	ssr: false,
});

export default function EntryCard() {
	return (
		<HomeBox>
			<DetailCard />
		</HomeBox>
	);
}
