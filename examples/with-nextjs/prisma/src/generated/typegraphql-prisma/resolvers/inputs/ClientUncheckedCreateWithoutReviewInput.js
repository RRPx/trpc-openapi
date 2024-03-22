"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientUncheckedCreateWithoutReviewInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FavoriteUncheckedCreateNestedManyWithoutClientInput_1 = require("../inputs/FavoriteUncheckedCreateNestedManyWithoutClientInput");
const NotificationUncheckedCreateNestedManyWithoutClientInput_1 = require("../inputs/NotificationUncheckedCreateNestedManyWithoutClientInput");
const ReservationUncheckedCreateNestedManyWithoutClientInput_1 = require("../inputs/ReservationUncheckedCreateNestedManyWithoutClientInput");
const UserUncheckedCreateNestedOneWithoutClientInput_1 = require("../inputs/UserUncheckedCreateNestedOneWithoutClientInput");
const Gender_1 = require("../../enums/Gender");
let ClientUncheckedCreateWithoutReviewInput = exports.ClientUncheckedCreateWithoutReviewInput = class ClientUncheckedCreateWithoutReviewInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientUncheckedCreateWithoutReviewInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientUncheckedCreateWithoutReviewInput.prototype, "telephone_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ClientUncheckedCreateWithoutReviewInput.prototype, "birthday", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientUncheckedCreateWithoutReviewInput.prototype, "age", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientUncheckedCreateWithoutReviewInput.prototype, "nick_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientUncheckedCreateWithoutReviewInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Gender_1.Gender, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientUncheckedCreateWithoutReviewInput.prototype, "gender", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientUncheckedCreateWithoutReviewInput.prototype, "image2", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientUncheckedCreateWithoutReviewInput.prototype, "image3", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ClientUncheckedCreateWithoutReviewInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ClientUncheckedCreateWithoutReviewInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUncheckedCreateNestedOneWithoutClientInput_1.UserUncheckedCreateNestedOneWithoutClientInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUncheckedCreateNestedOneWithoutClientInput_1.UserUncheckedCreateNestedOneWithoutClientInput)
], ClientUncheckedCreateWithoutReviewInput.prototype, "users", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FavoriteUncheckedCreateNestedManyWithoutClientInput_1.FavoriteUncheckedCreateNestedManyWithoutClientInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FavoriteUncheckedCreateNestedManyWithoutClientInput_1.FavoriteUncheckedCreateNestedManyWithoutClientInput)
], ClientUncheckedCreateWithoutReviewInput.prototype, "favorite", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationUncheckedCreateNestedManyWithoutClientInput_1.ReservationUncheckedCreateNestedManyWithoutClientInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationUncheckedCreateNestedManyWithoutClientInput_1.ReservationUncheckedCreateNestedManyWithoutClientInput)
], ClientUncheckedCreateWithoutReviewInput.prototype, "reservation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationUncheckedCreateNestedManyWithoutClientInput_1.NotificationUncheckedCreateNestedManyWithoutClientInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationUncheckedCreateNestedManyWithoutClientInput_1.NotificationUncheckedCreateNestedManyWithoutClientInput)
], ClientUncheckedCreateWithoutReviewInput.prototype, "notification", void 0);
exports.ClientUncheckedCreateWithoutReviewInput = ClientUncheckedCreateWithoutReviewInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClientUncheckedCreateWithoutReviewInput", {})
], ClientUncheckedCreateWithoutReviewInput);
