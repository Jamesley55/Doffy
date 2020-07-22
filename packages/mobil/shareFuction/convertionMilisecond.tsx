export const milisecond = (hours: string) => {
	// Function
	const milliseconds = (h, m, s) => (h * 60 * 60 + m * 60 + s) * 1000;

	// Contextual usage
	const time = hours;
	const timeParts = time?.split(":");
	const value = milliseconds(timeParts[0], timeParts[1], 0);
	console.log(value);
	return value;
};
