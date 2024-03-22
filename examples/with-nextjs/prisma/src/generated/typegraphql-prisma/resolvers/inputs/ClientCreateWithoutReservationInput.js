"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientCreateWithoutReservationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FavoriteCreateNestedManyWithoutClientInput_1 = require("../inputs/FavoriteCreateNestedManyWithoutClientInput");
const NotificationCreateNestedManyWithoutClientInput_1 = require("../inputs/NotificationCreateNestedManyWithoutClientInput");
const ReviewCreateNestedManyWithoutClientInput_1 = require("../inputs/ReviewCreateNestedManyWithoutClientInput");
const UserCreateNestedOneWithoutClientInput_1 = require("../inputs/UserCreateNestedOneWithoutClientInput");
const Gender_1 = require("../../enums/Gender");
let ClientCreateWithoutReservationInput = exports.ClientCreateWithoutReservationInput = class ClientCreateWithoutReservationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientCreateWithoutReservationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientCreateWithoutReservationInput.prototype, "telephone_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ClientCreateWithoutReservationInput.prototype, "birthday", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientCreateWithoutReservationInput.prototype, "age", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientCreateWithoutReservationInput.prototype, "nick_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientCreateWithoutReservationInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Gender_1.Gender, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientCreateWithoutReservationInput.prototype, "gender", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientCreateWithoutReservationInput.prototype, "image2", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientCreateWithoutReservationInput.prototype, "image3", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ClientCreateWithoutReservationInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ClientCreateWithoutReservationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutClientInput_1.UserCreateNestedOneWithoutClientInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutClientInput_1.UserCreateNestedOneWithoutClientInput)
], ClientCreateWithoutReservationInput.prototype, "users", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FavoriteCreateNestedManyWithoutClientInput_1.FavoriteCreateNestedManyWithoutClientInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FavoriteCreateNestedManyWithoutClientInput_1.FavoriteCreateNestedManyWithoutClientInput)
], ClientCreateWithoutReservationInput.prototype, "favorite", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewCreateNestedManyWithoutClientInput_1.ReviewCreateNestedManyWithoutClientInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReviewCreateNestedManyWithoutClientInput_1.ReviewCreateNestedManyWithoutClientInput)
], ClientCreateWithoutReservationInput.prototype, "review", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationCreateNestedManyWithoutClientInput_1.NotificationCreateNestedManyWithoutClientInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationCreateNestedManyWithoutClientInput_1.NotificationCreateNestedManyWithoutClientInput)
], ClientCreateWithoutReservationInput.prototype, "notification", void 0);
exports.ClientCreateWithoutReservationInput = ClientCreateWithoutReservationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClientCreateWithoutReservationInput", {})
], ClientCreateWithoutReservationInput);
