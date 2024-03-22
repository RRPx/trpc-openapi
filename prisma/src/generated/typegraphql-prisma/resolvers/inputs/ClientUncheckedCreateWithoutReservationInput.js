"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientUncheckedCreateWithoutReservationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FavoriteUncheckedCreateNestedManyWithoutClientInput_1 = require("../inputs/FavoriteUncheckedCreateNestedManyWithoutClientInput");
const NotificationUncheckedCreateNestedManyWithoutClientInput_1 = require("../inputs/NotificationUncheckedCreateNestedManyWithoutClientInput");
const ReviewUncheckedCreateNestedManyWithoutClientInput_1 = require("../inputs/ReviewUncheckedCreateNestedManyWithoutClientInput");
const UserUncheckedCreateNestedOneWithoutClientInput_1 = require("../inputs/UserUncheckedCreateNestedOneWithoutClientInput");
const Gender_1 = require("../../enums/Gender");
let ClientUncheckedCreateWithoutReservationInput = class ClientUncheckedCreateWithoutReservationInput {
};
exports.ClientUncheckedCreateWithoutReservationInput = ClientUncheckedCreateWithoutReservationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientUncheckedCreateWithoutReservationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientUncheckedCreateWithoutReservationInput.prototype, "telephone_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ClientUncheckedCreateWithoutReservationInput.prototype, "birthday", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientUncheckedCreateWithoutReservationInput.prototype, "age", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientUncheckedCreateWithoutReservationInput.prototype, "nick_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientUncheckedCreateWithoutReservationInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Gender_1.Gender, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientUncheckedCreateWithoutReservationInput.prototype, "gender", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientUncheckedCreateWithoutReservationInput.prototype, "image2", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientUncheckedCreateWithoutReservationInput.prototype, "image3", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ClientUncheckedCreateWithoutReservationInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ClientUncheckedCreateWithoutReservationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUncheckedCreateNestedOneWithoutClientInput_1.UserUncheckedCreateNestedOneWithoutClientInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUncheckedCreateNestedOneWithoutClientInput_1.UserUncheckedCreateNestedOneWithoutClientInput)
], ClientUncheckedCreateWithoutReservationInput.prototype, "users", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FavoriteUncheckedCreateNestedManyWithoutClientInput_1.FavoriteUncheckedCreateNestedManyWithoutClientInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FavoriteUncheckedCreateNestedManyWithoutClientInput_1.FavoriteUncheckedCreateNestedManyWithoutClientInput)
], ClientUncheckedCreateWithoutReservationInput.prototype, "favorite", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewUncheckedCreateNestedManyWithoutClientInput_1.ReviewUncheckedCreateNestedManyWithoutClientInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReviewUncheckedCreateNestedManyWithoutClientInput_1.ReviewUncheckedCreateNestedManyWithoutClientInput)
], ClientUncheckedCreateWithoutReservationInput.prototype, "review", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationUncheckedCreateNestedManyWithoutClientInput_1.NotificationUncheckedCreateNestedManyWithoutClientInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationUncheckedCreateNestedManyWithoutClientInput_1.NotificationUncheckedCreateNestedManyWithoutClientInput)
], ClientUncheckedCreateWithoutReservationInput.prototype, "notification", void 0);
exports.ClientUncheckedCreateWithoutReservationInput = ClientUncheckedCreateWithoutReservationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClientUncheckedCreateWithoutReservationInput", {})
], ClientUncheckedCreateWithoutReservationInput);
