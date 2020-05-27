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
let Transaction = class Transaction extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn("uuid"),
    __metadata("design:type", String)
], Transaction.prototype, "transactionId", void 0);
__decorate([
    typeorm_1.Column("uuid"),
    __metadata("design:type", String)
], Transaction.prototype, "serviceId", void 0);
__decorate([
    typeorm_1.Column("uuid"),
    __metadata("design:type", String)
], Transaction.prototype, "receiverId", void 0);
__decorate([
    typeorm_1.Column("uuid"),
    __metadata("design:type", String)
], Transaction.prototype, "providerId", void 0);
__decorate([
    typeorm_1.Column("uuid"),
    __metadata("design:type", String)
], Transaction.prototype, "bookingId", void 0);
__decorate([
    typeorm_1.Column("decimal"),
    __metadata("design:type", Number)
], Transaction.prototype, "amount", void 0);
__decorate([
    typeorm_1.Column("decimal", { default: 0 }),
    __metadata("design:type", Number)
], Transaction.prototype, "Fee", void 0);
__decorate([
    typeorm_1.Column("varchar"),
    __metadata("design:type", String)
], Transaction.prototype, "currencyId", void 0);
__decorate([
    typeorm_1.Column("uuid", { nullable: true }),
    __metadata("design:type", String)
], Transaction.prototype, "promoCode", void 0);
__decorate([
    typeorm_1.Column("decimal"),
    __metadata("design:type", Number)
], Transaction.prototype, "DiscountAmount", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], Transaction.prototype, "created", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], Transaction.prototype, "modify", void 0);
__decorate([
    typeorm_1.Column("boolean", { default: true }),
    __metadata("design:type", Boolean)
], Transaction.prototype, "status", void 0);
Transaction = __decorate([
    typeorm_1.Entity("transaction")
], Transaction);
exports.Transaction = Transaction;
//# sourceMappingURL=transaction.js.map