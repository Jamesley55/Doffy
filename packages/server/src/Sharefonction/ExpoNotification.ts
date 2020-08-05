// export const sendExpoNotif = () => {
// 	// Create a new Expo SDK client
// 	const expo = new Expo();

// 	// Create the messages that you want to send to clients
// 	const messages = [];

// 	// Construct a message (see https://docs.expo.io/push-notifications/sending-notifications/)
// 	messages.push({
// 		to: "ExponentPushToken[TWeaOBFkBl23QfMoYHiu21]",
// 		sound: "default",
// 		body: "This is a test notification",
// 		data: { withSome: "data" },
// 	});

// 	// The Expo push notification service accepts batches of notifications so
// 	// that you don't need to send 1000 requests to send 1000 notifications. We
// 	// recommend you batch your notifications to reduce the number of requests
// 	// and to compress them (notifications with similar content will get
// 	// compressed).
// 	const chunks = expo.chunkPushNotifications(messages as any);

// 	const tickets = [];
// 	(async () => {
// 		// Send the chunks to the Expo push notification service. There are
// 		// different strategies you could use. A simple one is to send one chunk at a
// 		// time, which nicely spreads the load out over time:
// 		for (const chunk of chunks) {
// 			try {
// 				const ticketChunk = await expo.sendPushNotificationsAsync(chunk);
// 				console.log(ticketChunk);
// 				tickets.push(...ticketChunk);
// 				// NOTE: If a ticket contains an error code in ticket.details.error, you
// 				// must handle it appropriately. The error codes are listed in the Expo
// 				// documentation:
// 				// https://docs.expo.io/push-notifications/sending-notifications/#individual-errors
// 			} catch (error) {
// 				console.error(error);
// 			}
// 		}
// 	})();
// };
