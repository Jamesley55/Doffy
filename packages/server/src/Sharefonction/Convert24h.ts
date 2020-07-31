export function tConv24(time24: any) {
	let ts = time24;
	{
		const H = +ts.substr(0, 2);
		let h: any = H % 12 || 12;
		h = h < 10 ? "0" + h : h; // leading 0 at the left for 1 digit hours
		const ampm = H < 12 ? " AM" : " PM";
		ts = h + ts.substr(2, 3) + ampm;
	}
	return ts;
}
