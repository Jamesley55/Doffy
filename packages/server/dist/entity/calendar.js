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
const typeorm_1 = require("typeorm");
const times_1 = require("./times");
const service_1 = require("./service");
let Calendar = class Calendar extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn("uuid"),
    __metadata("design:type", String)
], Calendar.prototype, "CalendarId", void 0);
__decorate([
    typeorm_1.Column("boolean", { default: false }),
    __metadata("design:type", Boolean)
], Calendar.prototype, "monday", void 0);
__decorate([
    typeorm_1.Column("uuid", { nullable: true }),
    __metadata("design:type", String)
], Calendar.prototype, "mondayScheduleUuid", void 0);
__decorate([
    typeorm_1.OneToOne(() => times_1.ScheduleTime, (time) => time.calendar, {
        cascade: true,
        onDelete: "CASCADE",
    }),
    typeorm_1.JoinColumn({ name: "mondayScheduleUuid" }),
    __metadata("design:type", times_1.ScheduleTime)
], Calendar.prototype, "mondaySchedule", void 0);
__decorate([
    typeorm_1.Column("boolean", { default: false }),
    __metadata("design:type", Boolean)
], Calendar.prototype, "tuesday", void 0);
__decorate([
    typeorm_1.Column("uuid", { nullable: true }),
    __metadata("design:type", String)
], Calendar.prototype, "tuesdayScheduleUuid", void 0);
__decorate([
    typeorm_1.OneToOne(() => times_1.ScheduleTime, (time) => time.calendar, {
        cascade: true,
        onDelete: "CASCADE",
    }),
    typeorm_1.JoinColumn({ name: "tuesdayScheduleUuid" }),
    __metadata("design:type", times_1.ScheduleTime)
], Calendar.prototype, "tuesdaySchedule", void 0);
__decorate([
    typeorm_1.Column("boolean", { default: false }),
    __metadata("design:type", Boolean)
], Calendar.prototype, "wednesday", void 0);
__decorate([
    typeorm_1.Column("uuid", { nullable: true }),
    __metadata("design:type", String)
], Calendar.prototype, "wednesdayScheduleUuid", void 0);
__decorate([
    typeorm_1.OneToOne(() => times_1.ScheduleTime, (time) => time.calendar, {
        cascade: true,
        onDelete: "CASCADE",
    }),
    typeorm_1.JoinColumn({ name: "wednesdayScheduleUuid" }),
    __metadata("design:type", times_1.ScheduleTime)
], Calendar.prototype, "wednesdaySchedule", void 0);
__decorate([
    typeorm_1.Column("boolean", { default: false }),
    __metadata("design:type", Boolean)
], Calendar.prototype, "thursday", void 0);
__decorate([
    typeorm_1.Column("uuid", { nullable: true }),
    __metadata("design:type", String)
], Calendar.prototype, "thurdayScheduleUuid", void 0);
__decorate([
    typeorm_1.OneToOne(() => times_1.ScheduleTime, (time) => time.calendar, {
        cascade: true,
        onDelete: "CASCADE",
    }),
    typeorm_1.JoinColumn({ name: "thurdayScheduleUuid" }),
    __metadata("design:type", times_1.ScheduleTime)
], Calendar.prototype, "thursdaySchedule", void 0);
__decorate([
    typeorm_1.Column("boolean", { default: false }),
    __metadata("design:type", Boolean)
], Calendar.prototype, "friday", void 0);
__decorate([
    typeorm_1.Column("uuid", { nullable: true }),
    __metadata("design:type", String)
], Calendar.prototype, "fridayScheduleUuid", void 0);
__decorate([
    typeorm_1.OneToOne(() => times_1.ScheduleTime, (time) => time.calendar, {
        cascade: true,
        onDelete: "CASCADE",
    }),
    typeorm_1.JoinColumn({ name: "fridayScheduleUuid" }),
    __metadata("design:type", times_1.ScheduleTime)
], Calendar.prototype, "fridaySchedule", void 0);
__decorate([
    typeorm_1.Column("boolean", { default: false }),
    __metadata("design:type", Boolean)
], Calendar.prototype, "saturday", void 0);
__decorate([
    typeorm_1.Column("uuid", { nullable: true }),
    __metadata("design:type", String)
], Calendar.prototype, "saturdayScheduleUuid", void 0);
__decorate([
    typeorm_1.OneToOne(() => times_1.ScheduleTime, (time) => time.calendar, {
        cascade: true,
        onDelete: "CASCADE",
    }),
    typeorm_1.JoinColumn({ name: "saturdayScheduleUuid" }),
    __metadata("design:type", times_1.ScheduleTime)
], Calendar.prototype, "saturdaySchedule", void 0);
__decorate([
    typeorm_1.Column("boolean", { default: false }),
    __metadata("design:type", Boolean)
], Calendar.prototype, "sunday", void 0);
__decorate([
    typeorm_1.Column("uuid", { nullable: true }),
    __metadata("design:type", String)
], Calendar.prototype, "sundayScheduleUuid", void 0);
__decorate([
    typeorm_1.OneToOne(() => times_1.ScheduleTime, (time) => time.calendar, {
        cascade: true,
        onDelete: "CASCADE",
    }),
    typeorm_1.JoinColumn({ name: "sundayScheduleUuid" }),
    __metadata("design:type", times_1.ScheduleTime)
], Calendar.prototype, "sundaySchedule", void 0);
__decorate([
    typeorm_1.OneToOne(() => service_1.Service, (service) => service.calendar),
    __metadata("design:type", service_1.Service)
], Calendar.prototype, "services", void 0);
Calendar = __decorate([
    typeorm_1.Entity("calendar")
], Calendar);
exports.Calendar = Calendar;
//# sourceMappingURL=calendar.js.map