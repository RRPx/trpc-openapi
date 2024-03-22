"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientCreateWithoutFavoriteInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NotificationCreateNestedManyWithoutClientInput_1 = require("../inputs/NotificationCreateNestedManyWithoutClientInput");
const ReservationCreateNestedManyWithoutClientInput_1 = require("../inputs/ReservationCreateNestedManyWithoutClientInput");
const ReviewCreateNestedManyWithoutClientInput_1 = require("../inputs/ReviewCreateNestedManyWithoutClientInput");
const UserCreateNestedOneWithoutClientInput_1 = require("../inputs/UserCreateNestedOneWithoutClientInput");
const Gender_1 = require("../../enums/Gender");
let ClientCreateWithoutFavoriteInput = class ClientCreateWithoutFavoriteInput {
};
exports.ClientCreateWithoutFavoriteInput = ClientCreateWithoutFavoriteInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientCreateWithoutFavoriteInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientCreateWithoutFavoriteInput.prototype, "telephone_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ClientCreateWithoutFavoriteInput.prototype, "birthday", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientCreateWithoutFavoriteInput.prototype, "age", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientCreateWithoutFavoriteInput.prototype, "nick_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientCreateWithoutFavoriteInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Gender_1.Gender, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientCreateWithoutFavoriteInput.prototype, "gender", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientCreateWithoutFavoriteInput.prototype, "image2", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientCreateWithoutFavoriteInput.prototype, "image3", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ClientCreateWithoutFavoriteInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ClientCreateWithoutFavoriteInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutClientInput_1.UserCreateNestedOneWithoutClientInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutClientInput_1.UserCreateNestedOneWithoutClientInput)
], ClientCreateWithoutFavoriteInput.prototype, "users", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationCreateNestedManyWithoutClientInput_1.ReservationCreateNestedManyWithoutClientInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationCreateNestedManyWithoutClientInput_1.ReservationCreateNestedManyWithoutClientInput)
], ClientCreateWithoutFavoriteInput.prototype, "reservation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewCreateNestedManyWithoutClientInput_1.ReviewCreateNestedManyWithoutClientInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReviewCreateNestedManyWithoutClientInput_1.ReviewCreateNestedManyWithoutClientInput)
], ClientCreateWithoutFavoriteInput.prototype, "review", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationCreateNestedManyWithoutClientInput_1.NotificationCreateNestedManyWithoutClientInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationCreateNestedManyWithoutClientInput_1.NotificationCreateNestedManyWithoutClientInput)
], ClientCreateWithoutFavoriteInput.prototype, "notification", void 0);
exports.ClientCreateWithoutFavoriteInput = ClientCreateWithoutFavoriteInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClientCreateWithoutFavoriteInput", {})
], ClientCreateWithoutFavoriteInput);
