"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientUncheckedCreateWithoutFavoriteInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NotificationUncheckedCreateNestedManyWithoutClientInput_1 = require("../inputs/NotificationUncheckedCreateNestedManyWithoutClientInput");
const ReservationUncheckedCreateNestedManyWithoutClientInput_1 = require("../inputs/ReservationUncheckedCreateNestedManyWithoutClientInput");
const ReviewUncheckedCreateNestedManyWithoutClientInput_1 = require("../inputs/ReviewUncheckedCreateNestedManyWithoutClientInput");
const UserUncheckedCreateNestedOneWithoutClientInput_1 = require("../inputs/UserUncheckedCreateNestedOneWithoutClientInput");
const Gender_1 = require("../../enums/Gender");
let ClientUncheckedCreateWithoutFavoriteInput = exports.ClientUncheckedCreateWithoutFavoriteInput = class ClientUncheckedCreateWithoutFavoriteInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientUncheckedCreateWithoutFavoriteInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientUncheckedCreateWithoutFavoriteInput.prototype, "telephone_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ClientUncheckedCreateWithoutFavoriteInput.prototype, "birthday", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientUncheckedCreateWithoutFavoriteInput.prototype, "age", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientUncheckedCreateWithoutFavoriteInput.prototype, "nick_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientUncheckedCreateWithoutFavoriteInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Gender_1.Gender, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientUncheckedCreateWithoutFavoriteInput.prototype, "gender", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientUncheckedCreateWithoutFavoriteInput.prototype, "image2", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientUncheckedCreateWithoutFavoriteInput.prototype, "image3", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ClientUncheckedCreateWithoutFavoriteInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ClientUncheckedCreateWithoutFavoriteInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUncheckedCreateNestedOneWithoutClientInput_1.UserUncheckedCreateNestedOneWithoutClientInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUncheckedCreateNestedOneWithoutClientInput_1.UserUncheckedCreateNestedOneWithoutClientInput)
], ClientUncheckedCreateWithoutFavoriteInput.prototype, "users", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationUncheckedCreateNestedManyWithoutClientInput_1.ReservationUncheckedCreateNestedManyWithoutClientInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationUncheckedCreateNestedManyWithoutClientInput_1.ReservationUncheckedCreateNestedManyWithoutClientInput)
], ClientUncheckedCreateWithoutFavoriteInput.prototype, "reservation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewUncheckedCreateNestedManyWithoutClientInput_1.ReviewUncheckedCreateNestedManyWithoutClientInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReviewUncheckedCreateNestedManyWithoutClientInput_1.ReviewUncheckedCreateNestedManyWithoutClientInput)
], ClientUncheckedCreateWithoutFavoriteInput.prototype, "review", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationUncheckedCreateNestedManyWithoutClientInput_1.NotificationUncheckedCreateNestedManyWithoutClientInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationUncheckedCreateNestedManyWithoutClientInput_1.NotificationUncheckedCreateNestedManyWithoutClientInput)
], ClientUncheckedCreateWithoutFavoriteInput.prototype, "notification", void 0);
exports.ClientUncheckedCreateWithoutFavoriteInput = ClientUncheckedCreateWithoutFavoriteInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClientUncheckedCreateWithoutFavoriteInput", {})
], ClientUncheckedCreateWithoutFavoriteInput);
