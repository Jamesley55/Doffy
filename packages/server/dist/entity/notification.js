"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notification = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("./User");
const notificationMessage_1 = require("./notificationMessage");
let Notification = class Notification extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn("uuid"),
    __metadata("design:type", Number)
], Notification.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("uuid"),
    __metadata("design:type", String)
], Notification.prototype, "senderId", void 0);
__decorate([
    typeorm_1.Column("uuid"),
    __metadata("design:type", String)
], Notification.prototype, "recipientId", void 0);
__decorate([
    typeorm_1.Column("uuid", { nullable: true }),
    __metadata("design:type", String)
], Notification.prototype, "bookingId", void 0);
__decorate([
    typeorm_1.Column(() => notificationMessage_1.NotificationMessage),
    __metadata("design:type", notificationMessage_1.NotificationMessage)
], Notification.prototype, "message", void 0);
__decorate([
    typeorm_1.Column("boolean", { default: false }),
    __metadata("design:type", Boolean)
], Notification.prototype, "bookRequest", void 0);
__decorate([
    typeorm_1.Column("boolean", { default: false, nullable: true }),
    __metadata("design:type", Boolean)
], Notification.prototype, "RequestAccepted", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Number)
], Notification.prototype, "createdDate", void 0);
__decorate([
    typeorm_1.ManyToOne(() => User_1.User, (user) => user.notifications),
    typeorm_1.JoinColumn({ name: "senderId" }),
    __metadata("design:type", User_1.User)
], Notification.prototype, "user", void 0);
Notification = __decorate([
    typeorm_1.Entity("notification")
], Notification);
exports.Notification = Notification;
//# sourceMappingURL=notification.js.map