"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FavoriteCreateNestedManyWithoutClientInput_1 = require("../inputs/FavoriteCreateNestedManyWithoutClientInput");
const NotificationCreateNestedManyWithoutClientInput_1 = require("../inputs/NotificationCreateNestedManyWithoutClientInput");
const ReservationCreateNestedManyWithoutClientInput_1 = require("../inputs/ReservationCreateNestedManyWithoutClientInput");
const ReviewCreateNestedManyWithoutClientInput_1 = require("../inputs/ReviewCreateNestedManyWithoutClientInput");
const UserCreateNestedOneWithoutClientInput_1 = require("../inputs/UserCreateNestedOneWithoutClientInput");
const Gender_1 = require("../../enums/Gender");
let ClientCreateInput = class ClientCreateInput {
};
exports.ClientCreateInput = ClientCreateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientCreateInput.prototype, "telephone_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ClientCreateInput.prototype, "birthday", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientCreateInput.prototype, "age", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientCreateInput.prototype, "nick_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientCreateInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Gender_1.Gender, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientCreateInput.prototype, "gender", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientCreateInput.prototype, "image2", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientCreateInput.prototype, "image3", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ClientCreateInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ClientCreateInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutClientInput_1.UserCreateNestedOneWithoutClientInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutClientInput_1.UserCreateNestedOneWithoutClientInput)
], ClientCreateInput.prototype, "users", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FavoriteCreateNestedManyWithoutClientInput_1.FavoriteCreateNestedManyWithoutClientInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FavoriteCreateNestedManyWithoutClientInput_1.FavoriteCreateNestedManyWithoutClientInput)
], ClientCreateInput.prototype, "favorite", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationCreateNestedManyWithoutClientInput_1.ReservationCreateNestedManyWithoutClientInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationCreateNestedManyWithoutClientInput_1.ReservationCreateNestedManyWithoutClientInput)
], ClientCreateInput.prototype, "reservation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewCreateNestedManyWithoutClientInput_1.ReviewCreateNestedManyWithoutClientInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReviewCreateNestedManyWithoutClientInput_1.ReviewCreateNestedManyWithoutClientInput)
], ClientCreateInput.prototype, "review", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationCreateNestedManyWithoutClientInput_1.NotificationCreateNestedManyWithoutClientInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationCreateNestedManyWithoutClientInput_1.NotificationCreateNestedManyWithoutClientInput)
], ClientCreateInput.prototype, "notification", void 0);
exports.ClientCreateInput = ClientCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClientCreateInput", {})
], ClientCreateInput);
