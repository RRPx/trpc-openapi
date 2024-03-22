"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientUncheckedUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolFieldUpdateOperationsInput_1 = require("../inputs/BoolFieldUpdateOperationsInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const FavoriteUncheckedUpdateManyWithoutClientNestedInput_1 = require("../inputs/FavoriteUncheckedUpdateManyWithoutClientNestedInput");
const NotificationUncheckedUpdateManyWithoutClientNestedInput_1 = require("../inputs/NotificationUncheckedUpdateManyWithoutClientNestedInput");
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const NullableEnumGenderFieldUpdateOperationsInput_1 = require("../inputs/NullableEnumGenderFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const ReservationUncheckedUpdateManyWithoutClientNestedInput_1 = require("../inputs/ReservationUncheckedUpdateManyWithoutClientNestedInput");
const ReviewUncheckedUpdateManyWithoutClientNestedInput_1 = require("../inputs/ReviewUncheckedUpdateManyWithoutClientNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUncheckedUpdateOneWithoutClientNestedInput_1 = require("../inputs/UserUncheckedUpdateOneWithoutClientNestedInput");
let ClientUncheckedUpdateInput = class ClientUncheckedUpdateInput {
};
exports.ClientUncheckedUpdateInput = ClientUncheckedUpdateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ClientUncheckedUpdateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ClientUncheckedUpdateInput.prototype, "telephone_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], ClientUncheckedUpdateInput.prototype, "birthday", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ClientUncheckedUpdateInput.prototype, "age", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ClientUncheckedUpdateInput.prototype, "nick_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ClientUncheckedUpdateInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableEnumGenderFieldUpdateOperationsInput_1.NullableEnumGenderFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableEnumGenderFieldUpdateOperationsInput_1.NullableEnumGenderFieldUpdateOperationsInput)
], ClientUncheckedUpdateInput.prototype, "gender", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ClientUncheckedUpdateInput.prototype, "image2", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ClientUncheckedUpdateInput.prototype, "image3", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], ClientUncheckedUpdateInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ClientUncheckedUpdateInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUncheckedUpdateOneWithoutClientNestedInput_1.UserUncheckedUpdateOneWithoutClientNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUncheckedUpdateOneWithoutClientNestedInput_1.UserUncheckedUpdateOneWithoutClientNestedInput)
], ClientUncheckedUpdateInput.prototype, "users", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FavoriteUncheckedUpdateManyWithoutClientNestedInput_1.FavoriteUncheckedUpdateManyWithoutClientNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FavoriteUncheckedUpdateManyWithoutClientNestedInput_1.FavoriteUncheckedUpdateManyWithoutClientNestedInput)
], ClientUncheckedUpdateInput.prototype, "favorite", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationUncheckedUpdateManyWithoutClientNestedInput_1.ReservationUncheckedUpdateManyWithoutClientNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationUncheckedUpdateManyWithoutClientNestedInput_1.ReservationUncheckedUpdateManyWithoutClientNestedInput)
], ClientUncheckedUpdateInput.prototype, "reservation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewUncheckedUpdateManyWithoutClientNestedInput_1.ReviewUncheckedUpdateManyWithoutClientNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReviewUncheckedUpdateManyWithoutClientNestedInput_1.ReviewUncheckedUpdateManyWithoutClientNestedInput)
], ClientUncheckedUpdateInput.prototype, "review", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationUncheckedUpdateManyWithoutClientNestedInput_1.NotificationUncheckedUpdateManyWithoutClientNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationUncheckedUpdateManyWithoutClientNestedInput_1.NotificationUncheckedUpdateManyWithoutClientNestedInput)
], ClientUncheckedUpdateInput.prototype, "notification", void 0);
exports.ClientUncheckedUpdateInput = ClientUncheckedUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClientUncheckedUpdateInput", {})
], ClientUncheckedUpdateInput);
