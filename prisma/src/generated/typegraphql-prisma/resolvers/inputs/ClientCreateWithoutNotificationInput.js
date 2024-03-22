"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientCreateWithoutNotificationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FavoriteCreateNestedManyWithoutClientInput_1 = require("../inputs/FavoriteCreateNestedManyWithoutClientInput");
const ReservationCreateNestedManyWithoutClientInput_1 = require("../inputs/ReservationCreateNestedManyWithoutClientInput");
const ReviewCreateNestedManyWithoutClientInput_1 = require("../inputs/ReviewCreateNestedManyWithoutClientInput");
const UserCreateNestedOneWithoutClientInput_1 = require("../inputs/UserCreateNestedOneWithoutClientInput");
const Gender_1 = require("../../enums/Gender");
let ClientCreateWithoutNotificationInput = class ClientCreateWithoutNotificationInput {
};
exports.ClientCreateWithoutNotificationInput = ClientCreateWithoutNotificationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientCreateWithoutNotificationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientCreateWithoutNotificationInput.prototype, "telephone_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ClientCreateWithoutNotificationInput.prototype, "birthday", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientCreateWithoutNotificationInput.prototype, "age", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientCreateWithoutNotificationInput.prototype, "nick_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientCreateWithoutNotificationInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Gender_1.Gender, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientCreateWithoutNotificationInput.prototype, "gender", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientCreateWithoutNotificationInput.prototype, "image2", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientCreateWithoutNotificationInput.prototype, "image3", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ClientCreateWithoutNotificationInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ClientCreateWithoutNotificationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutClientInput_1.UserCreateNestedOneWithoutClientInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutClientInput_1.UserCreateNestedOneWithoutClientInput)
], ClientCreateWithoutNotificationInput.prototype, "users", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FavoriteCreateNestedManyWithoutClientInput_1.FavoriteCreateNestedManyWithoutClientInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FavoriteCreateNestedManyWithoutClientInput_1.FavoriteCreateNestedManyWithoutClientInput)
], ClientCreateWithoutNotificationInput.prototype, "favorite", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationCreateNestedManyWithoutClientInput_1.ReservationCreateNestedManyWithoutClientInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationCreateNestedManyWithoutClientInput_1.ReservationCreateNestedManyWithoutClientInput)
], ClientCreateWithoutNotificationInput.prototype, "reservation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewCreateNestedManyWithoutClientInput_1.ReviewCreateNestedManyWithoutClientInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReviewCreateNestedManyWithoutClientInput_1.ReviewCreateNestedManyWithoutClientInput)
], ClientCreateWithoutNotificationInput.prototype, "review", void 0);
exports.ClientCreateWithoutNotificationInput = ClientCreateWithoutNotificationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClientCreateWithoutNotificationInput", {})
], ClientCreateWithoutNotificationInput);
