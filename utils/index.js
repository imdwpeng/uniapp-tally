export const getFirstDayOfMonth = (date) => {
	const current = date || new Date();
	const year = current.getFullYear();
	const month = current.getMonth() + 1;
	return new Date(`${year}-${month}-01 00:00:00`).getTime();
}

export const getLastDayOfMonth = (date) => {
	const current = date || new Date();
	let year = current.getFullYear();
	let month = current.getMonth() + 2;

	if (month === 13) {
		year += 1;
		month = '01';
	}

	let firstDay = '01';
	const firstDayOfNextMonth = new Date(`${year}-${month}-${firstDay} 00:00:00`).getTime();


	return new Date(firstDayOfNextMonth - 1).getTime();
}