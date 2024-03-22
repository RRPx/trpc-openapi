"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientUncheckedCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FavoriteUncheckedCreateNestedManyWithoutClientInput_1 = require("../inputs/FavoriteUncheckedCreateNestedManyWithoutClientInput");
const NotificationUncheckedCreateNestedManyWithoutClientInput_1 = require("../inputs/NotificationUncheckedCreateNestedManyWithoutClientInput");
const ReservationUncheckedCreateNestedManyWithoutClientInput_1 = require("../inputs/ReservationUncheckedCreateNestedManyWithoutClientInput");
const ReviewUncheckedCreateNestedManyWithoutClientInput_1 = require("../inputs/ReviewUncheckedCreateNestedManyWithoutClientInput");
const UserUncheckedCreateNestedOneWithoutClientInput_1 = require("../inputs/UserUncheckedCreateNestedOneWithoutClientInput");
const Gender_1 = require("../../enums/Gender");
let ClientUncheckedCreateInput = class ClientUncheckedCreateInput {
};
exports.ClientUncheckedCreateInput = ClientUncheckedCreateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientUncheckedCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientUncheckedCreateInput.prototype, "telephone_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ClientUncheckedCreateInput.prototype, "birthday", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientUncheckedCreateInput.prototype, "age", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientUncheckedCreateInput.prototype, "nick_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientUncheckedCreateInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Gender_1.Gender, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientUncheckedCreateInput.prototype, "gender", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientUncheckedCreateInput.prototype, "image2", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientUncheckedCreateInput.prototype, "image3", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ClientUncheckedCreateInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ClientUncheckedCreateInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUncheckedCreateNestedOneWithoutClientInput_1.UserUncheckedCreateNestedOneWithoutClientInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUncheckedCreateNestedOneWithoutClientInput_1.UserUncheckedCreateNestedOneWithoutClientInput)
], ClientUncheckedCreateInput.prototype, "users", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FavoriteUncheckedCreateNestedManyWithoutClientInput_1.FavoriteUncheckedCreateNestedManyWithoutClientInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FavoriteUncheckedCreateNestedManyWithoutClientInput_1.FavoriteUncheckedCreateNestedManyWithoutClientInput)
], ClientUncheckedCreateInput.prototype, "favorite", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationUncheckedCreateNestedManyWithoutClientInput_1.ReservationUncheckedCreateNestedManyWithoutClientInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationUncheckedCreateNestedManyWithoutClientInput_1.ReservationUncheckedCreateNestedManyWithoutClientInput)
], ClientUncheckedCreateInput.prototype, "reservation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewUncheckedCreateNestedManyWithoutClientInput_1.ReviewUncheckedCreateNestedManyWithoutClientInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReviewUncheckedCreateNestedManyWithoutClientInput_1.ReviewUncheckedCreateNestedManyWithoutClientInput)
], ClientUncheckedCreateInput.prototype, "review", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationUncheckedCreateNestedManyWithoutClientInput_1.NotificationUncheckedCreateNestedManyWithoutClientInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationUncheckedCreateNestedManyWithoutClientInput_1.NotificationUncheckedCreateNestedManyWithoutClientInput)
], ClientUncheckedCreateInput.prototype, "notification", void 0);
exports.ClientUncheckedCreateInput = ClientUncheckedCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClientUncheckedCreateInput", {})
], ClientUncheckedCreateInput);
