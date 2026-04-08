export const todayDate = async () => {
	const date = new Date();
	return date.toISOString();
};
