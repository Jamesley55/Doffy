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
exports.User = void 0;
const typeorm_1 = require("typeorm");
const message_1 = require("./message");
const notification_1 = require("./notification");
const service_1 = require("./service");
let User = class User extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn("uuid"),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("varchar", { length: 255 }),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    typeorm_1.Column("varchar", { length: 255 }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    typeorm_1.Column("text"),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    typeorm_1.Column("boolean", { default: false }),
    __metadata("design:type", Boolean)
], User.prototype, "confirm", void 0);
__decorate([
    typeorm_1.Column("varchar", { default: "serviceSeeker" }),
    __metadata("design:type", String)
], User.prototype, "userType", void 0);
__decorate([
    typeorm_1.Column("varchar", { nullable: true }),
    __metadata("design:type", String)
], User.prototype, "firstname", void 0);
__decorate([
    typeorm_1.Column("varchar", { nullable: true }),
    __metadata("design:type", String)
], User.prototype, "lastname", void 0);
__decorate([
    typeorm_1.Column("varchar", { nullable: true }),
    __metadata("design:type", String)
], User.prototype, "notificationPushToken", void 0);
__decorate([
    typeorm_1.Column("date", { nullable: true }),
    __metadata("design:type", Date)
], User.prototype, "dateOfBirth", void 0);
__decorate([
    typeorm_1.Column("varchar", { default: "email" }),
    __metadata("design:type", String)
], User.prototype, "loginWith", void 0);
__decorate([
    typeorm_1.Column("varchar", { nullable: true }),
    __metadata("design:type", String)
], User.prototype, "facebookId", void 0);
__decorate([
    typeorm_1.Column("varchar", { nullable: true }),
    __metadata("design:type", String)
], User.prototype, "intagramId", void 0);
__decorate([
    typeorm_1.Column("varchar", { nullable: true }),
    __metadata("design:type", String)
], User.prototype, "twitterId", void 0);
__decorate([
    typeorm_1.Column("uuid", { nullable: true }),
    __metadata("design:type", String)
], User.prototype, "recieveCoupon", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], User.prototype, "created", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], User.prototype, "lastSeen", void 0);
__decorate([
    typeorm_1.Column("date", { nullable: true }),
    __metadata("design:type", Date)
], User.prototype, "modify", void 0);
__decorate([
    typeorm_1.OneToMany(() => service_1.Service, (serviceInstance) => serviceInstance.user),
    __metadata("design:type", Array)
], User.prototype, "services", void 0);
__decorate([
    typeorm_1.OneToMany(() => message_1.Message, (message) => message.user),
    __metadata("design:type", Array)
], User.prototype, "message", void 0);
__decorate([
    typeorm_1.OneToMany(() => notification_1.Notification, (notifications) => notifications.user),
    __metadata("design:type", Array)
], User.prototype, "notifications", void 0);
User = __decorate([
    typeorm_1.Entity("users")
], User);
exports.User = User;
//# sourceMappingURL=User.js.map