export const extractLocation = (entry, locations) => {
	return locations.find(location => {
		return location.entryId === entry.id;
	});
};
