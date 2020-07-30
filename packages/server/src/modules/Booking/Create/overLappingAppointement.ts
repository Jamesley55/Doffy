import { Between } from "typeorm";
import { Booking } from "../../../entity/booking";

export async function overLappingAppointements(
	start: number,
	endservice: number,
	averageTime: any,
	serviceId: string,
	date: number
) {
	const intervalUn = await Booking.findOne({
		where: { serviceId, date, startService: Between(start, endservice) },
	});
	if (intervalUn) {
		let endService = intervalUn.startService;
		let startService = endService - averageTime;
		const intervalDeux = await Booking.findOne({
			where: { serviceId, date, endService: Between(startService, endService) },
		});
		if (!intervalDeux) {
			return {
				start: startService,
				end: endService,
			};
		} else {
			startService = intervalUn.endService;
			endService = startService + averageTime;
			const interValTrois = await Booking.findOne({
				where: {
					serviceId,
					date,
					endService: Between(startService, endService),
				},
			});
			if (!interValTrois) {
				return {
					start: startService,
					end: endService,
				};
			}
		}
	} else {
		return { start, end: endservice };
	}
	return null;
}
