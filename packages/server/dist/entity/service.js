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
exports.Service = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("./User");
const calendar_1 = require("./calendar");
const booking_1 = require("./booking");
const rating_1 = require("./rating");
let Service = class Service extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn("uuid"),
    __metadata("design:type", String)
], Service.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("varchar", { length: 100 }),
    __metadata("design:type", String)
], Service.prototype, "name", void 0);
__decorate([
    typeorm_1.Column("varchar", { length: 100 }),
    __metadata("design:type", String)
], Service.prototype, "category", void 0);
__decorate([
    typeorm_1.Column("simple-array", { nullable: true, array: true }),
    __metadata("design:type", Array)
], Service.prototype, "pictureUrl", void 0);
__decorate([
    typeorm_1.Column("varchar", { length: 255 }),
    __metadata("design:type", String)
], Service.prototype, "description", void 0);
__decorate([
    typeorm_1.Column("varchar", { length: 100 }),
    __metadata("design:type", String)
], Service.prototype, "coutryId", void 0);
__decorate([
    typeorm_1.Column("varchar", { length: 100 }),
    __metadata("design:type", String)
], Service.prototype, "stateId", void 0);
__decorate([
    typeorm_1.Column("varchar", { length: 100 }),
    __metadata("design:type", String)
], Service.prototype, "cityId", void 0);
__decorate([
    typeorm_1.Column("uuid"),
    __metadata("design:type", String)
], Service.prototype, "calendarId", void 0);
__decorate([
    typeorm_1.OneToOne(() => calendar_1.Calendar, (calendar) => calendar.services),
    typeorm_1.JoinColumn({ name: "calendarId" }),
    __metadata("design:type", calendar_1.Calendar)
], Service.prototype, "calendar", void 0);
__decorate([
    typeorm_1.Column("int", { default: 2700000 }),
    __metadata("design:type", Number)
], Service.prototype, "averageTime", void 0);
__decorate([
    typeorm_1.Column("boolean"),
    __metadata("design:type", Boolean)
], Service.prototype, "Taxes", void 0);
__decorate([
    typeorm_1.Column("text"),
    __metadata("design:type", String)
], Service.prototype, "Adress", void 0);
__decorate([
    typeorm_1.Column(() => rating_1.Scores),
    __metadata("design:type", Array)
], Service.prototype, "score", void 0);
__decorate([
    typeorm_1.Column("double precision", { default: null }),
    __metadata("design:type", Number)
], Service.prototype, "rating", void 0);
__decorate([
    typeorm_1.Column("double precision"),
    __metadata("design:type", Number)
], Service.prototype, "price", void 0);
__decorate([
    typeorm_1.Column("text"),
    __metadata("design:type", String)
], Service.prototype, "payoutSchedule", void 0);
__decorate([
    typeorm_1.Column("text"),
    __metadata("design:type", String)
], Service.prototype, "customerBillingStatement", void 0);
__decorate([
    typeorm_1.Column("double precision"),
    __metadata("design:type", Number)
], Service.prototype, "latitude", void 0);
__decorate([
    typeorm_1.Column("double precision"),
    __metadata("design:type", Number)
], Service.prototype, "longitude", void 0);
__decorate([
    typeorm_1.Column("uuid"),
    __metadata("design:type", String)
], Service.prototype, "ownerId", void 0);
__decorate([
    typeorm_1.Column("decimal", { default: "0" }),
    __metadata("design:type", Number)
], Service.prototype, "depositAmount", void 0);
__decorate([
    typeorm_1.Column("boolean", { default: true }),
    __metadata("design:type", Boolean)
], Service.prototype, "isRefund", void 0);
__decorate([
    typeorm_1.ManyToOne(() => User_1.User, (user) => user.services),
    typeorm_1.JoinColumn({ name: "ownerId" }),
    __metadata("design:type", User_1.User)
], Service.prototype, "user", void 0);
__decorate([
    typeorm_1.OneToMany(() => booking_1.Booking, (booking) => booking.service),
    __metadata("design:type", Array)
], Service.prototype, "booking", void 0);
Service = __decorate([
    typeorm_1.Entity("service")
], Service);
exports.Service = Service;
//# sourceMappingURL=service.js.map