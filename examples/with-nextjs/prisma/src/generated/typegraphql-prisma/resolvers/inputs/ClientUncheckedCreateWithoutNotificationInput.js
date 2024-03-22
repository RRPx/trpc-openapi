"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientUncheckedCreateWithoutNotificationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FavoriteUncheckedCreateNestedManyWithoutClientInput_1 = require("../inputs/FavoriteUncheckedCreateNestedManyWithoutClientInput");
const ReservationUncheckedCreateNestedManyWithoutClientInput_1 = require("../inputs/ReservationUncheckedCreateNestedManyWithoutClientInput");
const ReviewUncheckedCreateNestedManyWithoutClientInput_1 = require("../inputs/ReviewUncheckedCreateNestedManyWithoutClientInput");
const UserUncheckedCreateNestedOneWithoutClientInput_1 = require("../inputs/UserUncheckedCreateNestedOneWithoutClientInput");
const Gender_1 = require("../../enums/Gender");
let ClientUncheckedCreateWithoutNotificationInput = exports.ClientUncheckedCreateWithoutNotificationInput = class ClientUncheckedCreateWithoutNotificationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientUncheckedCreateWithoutNotificationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientUncheckedCreateWithoutNotificationInput.prototype, "telephone_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ClientUncheckedCreateWithoutNotificationInput.prototype, "birthday", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientUncheckedCreateWithoutNotificationInput.prototype, "age", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientUncheckedCreateWithoutNotificationInput.prototype, "nick_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientUncheckedCreateWithoutNotificationInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Gender_1.Gender, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientUncheckedCreateWithoutNotificationInput.prototype, "gender", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientUncheckedCreateWithoutNotificationInput.prototype, "image2", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientUncheckedCreateWithoutNotificationInput.prototype, "image3", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ClientUncheckedCreateWithoutNotificationInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ClientUncheckedCreateWithoutNotificationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUncheckedCreateNestedOneWithoutClientInput_1.UserUncheckedCreateNestedOneWithoutClientInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUncheckedCreateNestedOneWithoutClientInput_1.UserUncheckedCreateNestedOneWithoutClientInput)
], ClientUncheckedCreateWithoutNotificationInput.prototype, "users", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FavoriteUncheckedCreateNestedManyWithoutClientInput_1.FavoriteUncheckedCreateNestedManyWithoutClientInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FavoriteUncheckedCreateNestedManyWithoutClientInput_1.FavoriteUncheckedCreateNestedManyWithoutClientInput)
], ClientUncheckedCreateWithoutNotificationInput.prototype, "favorite", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationUncheckedCreateNestedManyWithoutClientInput_1.ReservationUncheckedCreateNestedManyWithoutClientInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationUncheckedCreateNestedManyWithoutClientInput_1.ReservationUncheckedCreateNestedManyWithoutClientInput)
], ClientUncheckedCreateWithoutNotificationInput.prototype, "reservation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewUncheckedCreateNestedManyWithoutClientInput_1.ReviewUncheckedCreateNestedManyWithoutClientInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReviewUncheckedCreateNestedManyWithoutClientInput_1.ReviewUncheckedCreateNestedManyWithoutClientInput)
], ClientUncheckedCreateWithoutNotificationInput.prototype, "review", void 0);
exports.ClientUncheckedCreateWithoutNotificationInput = ClientUncheckedCreateWithoutNotificationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClientUncheckedCreateWithoutNotificationInput", {})
], ClientUncheckedCreateWithoutNotificationInput);
