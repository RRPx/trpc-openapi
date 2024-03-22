"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientCreateWithoutReviewInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FavoriteCreateNestedManyWithoutClientInput_1 = require("../inputs/FavoriteCreateNestedManyWithoutClientInput");
const NotificationCreateNestedManyWithoutClientInput_1 = require("../inputs/NotificationCreateNestedManyWithoutClientInput");
const ReservationCreateNestedManyWithoutClientInput_1 = require("../inputs/ReservationCreateNestedManyWithoutClientInput");
const UserCreateNestedOneWithoutClientInput_1 = require("../inputs/UserCreateNestedOneWithoutClientInput");
const Gender_1 = require("../../enums/Gender");
let ClientCreateWithoutReviewInput = exports.ClientCreateWithoutReviewInput = class ClientCreateWithoutReviewInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientCreateWithoutReviewInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientCreateWithoutReviewInput.prototype, "telephone_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ClientCreateWithoutReviewInput.prototype, "birthday", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientCreateWithoutReviewInput.prototype, "age", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientCreateWithoutReviewInput.prototype, "nick_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientCreateWithoutReviewInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Gender_1.Gender, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientCreateWithoutReviewInput.prototype, "gender", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientCreateWithoutReviewInput.prototype, "image2", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientCreateWithoutReviewInput.prototype, "image3", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ClientCreateWithoutReviewInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ClientCreateWithoutReviewInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutClientInput_1.UserCreateNestedOneWithoutClientInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutClientInput_1.UserCreateNestedOneWithoutClientInput)
], ClientCreateWithoutReviewInput.prototype, "users", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FavoriteCreateNestedManyWithoutClientInput_1.FavoriteCreateNestedManyWithoutClientInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FavoriteCreateNestedManyWithoutClientInput_1.FavoriteCreateNestedManyWithoutClientInput)
], ClientCreateWithoutReviewInput.prototype, "favorite", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationCreateNestedManyWithoutClientInput_1.ReservationCreateNestedManyWithoutClientInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationCreateNestedManyWithoutClientInput_1.ReservationCreateNestedManyWithoutClientInput)
], ClientCreateWithoutReviewInput.prototype, "reservation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationCreateNestedManyWithoutClientInput_1.NotificationCreateNestedManyWithoutClientInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationCreateNestedManyWithoutClientInput_1.NotificationCreateNestedManyWithoutClientInput)
], ClientCreateWithoutReviewInput.prototype, "notification", void 0);
exports.ClientCreateWithoutReviewInput = ClientCreateWithoutReviewInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClientCreateWithoutReviewInput", {})
], ClientCreateWithoutReviewInput);
