"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const resolvers_1 = require("./../../modules/Password/changePassword/resolvers");
const resolvers_2 = require("../../modules/Auth/login/resolvers");
const resolvers_3 = require("../../modules/Auth/register/resolvers");
const resolvers_4 = require("../../modules/Password/forgotPassword/resolvers");
const resolvers_5 = require("../../modules/Pictures/uploadS3/resolvers");
const resolvers_6 = require("../../modules/Services/create/resolvers");
const resolver_1 = require("../../modules/Message/create/resolver");
const resolvers_7 = require("../../modules/Message/newMessage/resolvers");
const resolvers_8 = require("../../modules/search/resolvers");
const resolvers_9 = require("../../modules/Message/QueryMessage/resolvers");
const resolvers_10 = require("../../modules/Auth/me/resolvers");
const resolvers_11 = require("../../modules/Auth/logout/resolvers");
const resolver_2 = require("../../modules/Services/QueryServices/resolver");
const resolvers_12 = require("../../modules/Services/delete/resolvers");
const resolvers_13 = require("../../modules/Services/update/resolvers");
const resolvers_14 = require("../../modules/Calendar/QueryCalendar/resolvers");
const resolver_3 = require("../../modules/Notification/create/resolver");
const resolvers_15 = require("../../modules/Notification/newNotification/resolvers");
const resolvers_16 = require("../../modules/Notification/Querynotification/resolvers");
const resolvers_17 = require("../../modules/Booking/Create/resolvers");
const resolvers_18 = require("../../modules/Booking/update/resolvers");
const resolvers_19 = require("../../modules/Booking/QueryBooking/resolvers");
exports.resolvers = [
    resolvers_2.loginResolver,
    resolvers_3.registerResolver,
    resolvers_4.forgotPassword,
    resolvers_1.changePassword,
    resolvers_5.fileUpload,
    resolvers_6.createService,
    resolver_1.createMessage,
    resolvers_9.findMessage,
    resolvers_7.newMessage,
    resolvers_8.searchServicesUser,
    resolvers_10.Me,
    resolvers_11.Logout,
    resolver_2.ServiceByCategory,
    resolvers_12.DeleteService,
    resolvers_13.UpdateService,
    resolvers_14.findServiceCalendar,
    resolver_3.createNotification,
    resolvers_15.newNotification,
    resolvers_16.findNotification,
    resolvers_17.createBooking,
    resolvers_18.UpdateBooking,
    resolvers_19.QueryBooking,
];
//# sourceMappingURL=resolver.js.map