"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const resolvers_1 = require("../../modules/Auth/login/resolvers");
const resolvers_2 = require("../../modules/Auth/logout/resolvers");
const resolvers_3 = require("../../modules/Auth/me/resolvers");
const resolvers_4 = require("../../modules/Auth/register/resolvers");
const resolvers_5 = require("../../modules/Booking/Create/resolvers");
const resolvers_6 = require("../../modules/Booking/QueryBooking/resolvers");
const bookingtime_1 = require("../../modules/Booking/QuerybookingTime/bookingtime");
const resolvers_7 = require("../../modules/Booking/update/resolvers");
const resolvers_8 = require("../../modules/Calendar/QueryCalendar/resolvers");
const resolver_1 = require("../../modules/Message/create/resolver");
const resolvers_9 = require("../../modules/Message/newMessage/resolvers");
const resolvers_10 = require("../../modules/Message/QueryMessage/resolvers");
const resolver_2 = require("../../modules/Notification/create/resolver");
const resolvers_11 = require("../../modules/Notification/newNotification/resolvers");
const resolvers_12 = require("../../modules/Notification/Querynotification/resolvers");
const resolvers_13 = require("../../modules/Password/forgotPassword/resolvers");
const resolvers_14 = require("../../modules/Pictures/uploadS3/resolvers");
const resolvers_15 = require("../../modules/search/resolvers");
const resolvers_16 = require("../../modules/Services/create/resolvers");
const resolvers_17 = require("../../modules/Services/delete/resolvers");
const resolver_3 = require("../../modules/Services/QueryServices/resolver");
const resolvers_18 = require("../../modules/Services/update/resolvers");
const resolvers_19 = require("./../../modules/Password/changePassword/resolvers");
exports.resolvers = [
    resolvers_1.loginResolver,
    resolvers_4.registerResolver,
    resolvers_13.forgotPassword,
    resolvers_19.changePassword,
    resolvers_14.fileUpload,
    resolvers_16.createService,
    resolver_1.createMessage,
    resolvers_10.findMessage,
    resolvers_9.newMessage,
    resolvers_15.searchServicesUser,
    resolvers_3.Me,
    resolvers_2.Logout,
    resolver_3.ServiceByCategory,
    resolvers_17.DeleteService,
    resolvers_18.UpdateService,
    resolvers_8.findServiceCalendar,
    resolver_2.createNotification,
    resolvers_11.newNotification,
    resolvers_12.findNotification,
    resolvers_5.createBooking,
    resolvers_7.UpdateBooking,
    resolvers_6.QueryBooking,
    bookingtime_1.BookingTime,
];
//# sourceMappingURL=resolver.js.map