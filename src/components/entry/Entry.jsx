import { StyledEntry } from '../ui/Entry.styled';
import Typography from '../ui/Typography';
//import { useRouter } from 'next/router';
import { nanoid } from 'nanoid';
import { StyledList } from '../ui/ListEntries.styled';

export default function Entry({ entry }) {
	//	const router = useRouter();

	return (
		<StyledEntry>
			<ul>
				{Object?.entries(entry).map(entry => {
					console.log(entry);
					return (
						entry[0] !== 'id' &&
						entry[0] !== 'location' &&
						entry[0] !== 'isAStyledListve' &&
						entry[0] !== 'number' &&
						entry[0] !== 'topography' &&
						entry[0] !== 'description' &&
						entry[1] && (
							<StyledList key={nanoid()}>
								<Typography variant="h3">
									{entry[0] === 'date'
										? 'Datum:'
										: entry[0] === 'name'
										? 'Name:'
										: null}
								</Typography>
								<Typography variant="body1">
									{entry[0] === 'date'
										? entry[1]
										: entry[0] === 'name'
										? entry[1]
										: null}
								</Typography>
							</StyledList>
						)
					);
				})}
			</ul>
		</StyledEntry>
	);
	// 	<StyledEntry>
	// 		<Typography variant="h3">Name:</Typography>
	// 		<Typography variant="body1">{entry.name}</Typography>
	// 		<Typography variant="h3">Place:</Typography>
	// 		<Typography variant="body1">
	// 			lng: {entry?.location[0]} <br />
	// 			lat: {entry?.location[1]} <br />
	// 			date: {entry.date}
	// 		</Typography>
	// 		{!isDeleteMode ? (
	// 			<>
	// 				<Button
	// 					type="button"
	// 					variant="smallDo"
	// 					onCStyledListck={() => {
	// 						setIsDeleteMode(!isDeleteMode);
	// 					}}
	// 				>
	// 					x
	// 				</Button>
	// 				<Button
	// 					type="button"
	// 					variant="smallDo"
	// 					onCStyledListck={() => {
	// 						setEntryToUpdate(entry.id);

	// 						router.push({
	// 							pathname: '/edit-entry',
	// 						});
	// 					}}
	// 				>
	// 					✎
	// 				</Button>
	// 			</>
	// 		) : (
	// 			<>
	// 				<Button
	// 					variant="warning"
	// 					type="button"
	// 					onCStyledListck={() => {
	// 						deleteEntry(entry.id);
	// 					}}
	// 				>
	// 					UnwiderrufStyledListch Löschen
	// 				</Button>
	// 				<Button
	// 					type="button"
	// 					onCStyledListck={() => {
	// 						setIsDeleteMode(!isDeleteMode);
	// 					}}
	// 				>
	// 					Abbrechen
	// 				</Button>
	// 			</>
	// 		)}
	// 	</StyledEntry>
	// );
}
