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
const transaction_1 = require("./transaction");
const service_1 = require("./service");
let Booking = class Booking extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn("uuid"),
    __metadata("design:type", String)
], Booking.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("uuid"),
    __metadata("design:type", String)
], Booking.prototype, "serviceId", void 0);
__decorate([
    typeorm_1.Column("text"),
    __metadata("design:type", String)
], Booking.prototype, "date", void 0);
__decorate([
    typeorm_1.Column("int"),
    __metadata("design:type", Number)
], Booking.prototype, "startService", void 0);
__decorate([
    typeorm_1.Column("int"),
    __metadata("design:type", Number)
], Booking.prototype, "endService", void 0);
__decorate([
    typeorm_1.Column("decimal"),
    __metadata("design:type", Number)
], Booking.prototype, "price", void 0);
__decorate([
    typeorm_1.Column("decimal", { default: "0" }),
    __metadata("design:type", Number)
], Booking.prototype, "taxes", void 0);
__decorate([
    typeorm_1.Column("decimal", { default: 0 }),
    __metadata("design:type", Number)
], Booking.prototype, "amoutPaid", void 0);
__decorate([
    typeorm_1.Column("decimal", { default: "0" }),
    __metadata("design:type", Number)
], Booking.prototype, "depositAmount", void 0);
__decorate([
    typeorm_1.Column("boolean", { default: true }),
    __metadata("design:type", Boolean)
], Booking.prototype, "isRefund", void 0);
__decorate([
    typeorm_1.Column("boolean", { default: false }),
    __metadata("design:type", Boolean)
], Booking.prototype, "confirm", void 0);
__decorate([
    typeorm_1.Column("uuid", { nullable: true }),
    __metadata("design:type", String)
], Booking.prototype, "recieveCoupon", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], Booking.prototype, "created", void 0);
__decorate([
    typeorm_1.Column("boolean", { default: false }),
    __metadata("design:type", Boolean)
], Booking.prototype, "status", void 0);
__decorate([
    typeorm_1.OneToOne(() => transaction_1.Transaction),
    typeorm_1.JoinColumn(),
    __metadata("design:type", transaction_1.Transaction)
], Booking.prototype, "transaction", void 0);
__decorate([
    typeorm_1.ManyToOne(() => service_1.Service, (user) => user.booking),
    typeorm_1.JoinColumn({ name: "serviceId" }),
    __metadata("design:type", service_1.Service)
], Booking.prototype, "service", void 0);
Booking = __decorate([
    typeorm_1.Entity("booking")
], Booking);
exports.Booking = Booking;
//# sourceMappingURL=booking.js.map