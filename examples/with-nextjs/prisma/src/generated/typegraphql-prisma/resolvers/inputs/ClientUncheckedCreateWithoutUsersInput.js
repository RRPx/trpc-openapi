"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientUncheckedCreateWithoutUsersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FavoriteUncheckedCreateNestedManyWithoutClientInput_1 = require("../inputs/FavoriteUncheckedCreateNestedManyWithoutClientInput");
const NotificationUncheckedCreateNestedManyWithoutClientInput_1 = require("../inputs/NotificationUncheckedCreateNestedManyWithoutClientInput");
const ReservationUncheckedCreateNestedManyWithoutClientInput_1 = require("../inputs/ReservationUncheckedCreateNestedManyWithoutClientInput");
const ReviewUncheckedCreateNestedManyWithoutClientInput_1 = require("../inputs/ReviewUncheckedCreateNestedManyWithoutClientInput");
const Gender_1 = require("../../enums/Gender");
let ClientUncheckedCreateWithoutUsersInput = exports.ClientUncheckedCreateWithoutUsersInput = class ClientUncheckedCreateWithoutUsersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientUncheckedCreateWithoutUsersInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientUncheckedCreateWithoutUsersInput.prototype, "telephone_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ClientUncheckedCreateWithoutUsersInput.prototype, "birthday", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientUncheckedCreateWithoutUsersInput.prototype, "age", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientUncheckedCreateWithoutUsersInput.prototype, "nick_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientUncheckedCreateWithoutUsersInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Gender_1.Gender, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientUncheckedCreateWithoutUsersInput.prototype, "gender", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientUncheckedCreateWithoutUsersInput.prototype, "image2", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientUncheckedCreateWithoutUsersInput.prototype, "image3", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ClientUncheckedCreateWithoutUsersInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ClientUncheckedCreateWithoutUsersInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FavoriteUncheckedCreateNestedManyWithoutClientInput_1.FavoriteUncheckedCreateNestedManyWithoutClientInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FavoriteUncheckedCreateNestedManyWithoutClientInput_1.FavoriteUncheckedCreateNestedManyWithoutClientInput)
], ClientUncheckedCreateWithoutUsersInput.prototype, "favorite", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationUncheckedCreateNestedManyWithoutClientInput_1.ReservationUncheckedCreateNestedManyWithoutClientInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationUncheckedCreateNestedManyWithoutClientInput_1.ReservationUncheckedCreateNestedManyWithoutClientInput)
], ClientUncheckedCreateWithoutUsersInput.prototype, "reservation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewUncheckedCreateNestedManyWithoutClientInput_1.ReviewUncheckedCreateNestedManyWithoutClientInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReviewUncheckedCreateNestedManyWithoutClientInput_1.ReviewUncheckedCreateNestedManyWithoutClientInput)
], ClientUncheckedCreateWithoutUsersInput.prototype, "review", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationUncheckedCreateNestedManyWithoutClientInput_1.NotificationUncheckedCreateNestedManyWithoutClientInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationUncheckedCreateNestedManyWithoutClientInput_1.NotificationUncheckedCreateNestedManyWithoutClientInput)
], ClientUncheckedCreateWithoutUsersInput.prototype, "notification", void 0);
exports.ClientUncheckedCreateWithoutUsersInput = ClientUncheckedCreateWithoutUsersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClientUncheckedCreateWithoutUsersInput", {})
], ClientUncheckedCreateWithoutUsersInput);
