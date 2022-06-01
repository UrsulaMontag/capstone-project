import EntryCreateForm from '../src/components/form/EntryCreateForm';
import Box from '../src/components/ui/MainBox.styled';
import Typography from '../src/components/ui/Typography';
import dynamic from 'next/dynamic';
import SmallMap from '../src/components/ui/MapSmall.styled';
const MapWithNoSSR = dynamic(() => import('../src/components/map/Map'), {
	ssr: false,
});

export default function CreateEntry() {
	return (
		<>
			<Box variant="text">
				<Typography variant="h2">Erstelle einen Eintrag</Typography>
				<Typography variant="info">
					<Typography variant="info-head">
						Für eine optimale Verortung deiner Entdeckung:
					</Typography>
					Bitte erlaube die Erfassung deines Standortes und erstelle deinen Eintrag direkt
					vor Ort. Hierfür mindestens einen Namen eingeben. Alle weiteren Einträge kannst
					du in Ruhe zu Haus erledigen.
				</Typography>
			</Box>
			<SmallMap>
				<MapWithNoSSR />
			</SmallMap>
			<Box>
				<EntryCreateForm />
			</Box>
		</>
	);
}