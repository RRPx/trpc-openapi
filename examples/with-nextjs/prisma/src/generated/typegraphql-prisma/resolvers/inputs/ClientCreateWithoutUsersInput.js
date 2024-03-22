"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientCreateWithoutUsersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FavoriteCreateNestedManyWithoutClientInput_1 = require("../inputs/FavoriteCreateNestedManyWithoutClientInput");
const NotificationCreateNestedManyWithoutClientInput_1 = require("../inputs/NotificationCreateNestedManyWithoutClientInput");
const ReservationCreateNestedManyWithoutClientInput_1 = require("../inputs/ReservationCreateNestedManyWithoutClientInput");
const ReviewCreateNestedManyWithoutClientInput_1 = require("../inputs/ReviewCreateNestedManyWithoutClientInput");
const Gender_1 = require("../../enums/Gender");
let ClientCreateWithoutUsersInput = exports.ClientCreateWithoutUsersInput = class ClientCreateWithoutUsersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientCreateWithoutUsersInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientCreateWithoutUsersInput.prototype, "telephone_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ClientCreateWithoutUsersInput.prototype, "birthday", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientCreateWithoutUsersInput.prototype, "age", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientCreateWithoutUsersInput.prototype, "nick_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientCreateWithoutUsersInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Gender_1.Gender, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientCreateWithoutUsersInput.prototype, "gender", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientCreateWithoutUsersInput.prototype, "image2", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientCreateWithoutUsersInput.prototype, "image3", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ClientCreateWithoutUsersInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ClientCreateWithoutUsersInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FavoriteCreateNestedManyWithoutClientInput_1.FavoriteCreateNestedManyWithoutClientInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FavoriteCreateNestedManyWithoutClientInput_1.FavoriteCreateNestedManyWithoutClientInput)
], ClientCreateWithoutUsersInput.prototype, "favorite", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationCreateNestedManyWithoutClientInput_1.ReservationCreateNestedManyWithoutClientInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationCreateNestedManyWithoutClientInput_1.ReservationCreateNestedManyWithoutClientInput)
], ClientCreateWithoutUsersInput.prototype, "reservation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewCreateNestedManyWithoutClientInput_1.ReviewCreateNestedManyWithoutClientInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReviewCreateNestedManyWithoutClientInput_1.ReviewCreateNestedManyWithoutClientInput)
], ClientCreateWithoutUsersInput.prototype, "review", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationCreateNestedManyWithoutClientInput_1.NotificationCreateNestedManyWithoutClientInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationCreateNestedManyWithoutClientInput_1.NotificationCreateNestedManyWithoutClientInput)
], ClientCreateWithoutUsersInput.prototype, "notification", void 0);
exports.ClientCreateWithoutUsersInput = ClientCreateWithoutUsersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClientCreateWithoutUsersInput", {})
], ClientCreateWithoutUsersInput);
