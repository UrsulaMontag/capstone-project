import EntryCreateForm from '../src/components/form/EntryCreateForm';
import Typography from '../src/components/ui/Typography';

export default function CreateEntry() {
	return (
		<>
			<Typography variant="h2">Erstelle einen Eintrag</Typography>
			<Typography variant="info">
				<span variant="info-head">Für eine optimale Verortung deiner Entdeckung:</span>Bitte
				erlaube die Erfassung deines Standortes und erstelle deinen Eintrag direkt vor Ort.
				Hierfür mindestens einen Namen eingeben. Alle weiteren Einträge kannst du in Ruhe zu
				Haus erledigen.
			</Typography>
			<EntryCreateForm />
		</>
	);
}
