"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientUncheckedUpdateWithoutReviewInput = void 0;
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
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUncheckedUpdateOneWithoutClientNestedInput_1 = require("../inputs/UserUncheckedUpdateOneWithoutClientNestedInput");
let ClientUncheckedUpdateWithoutReviewInput = exports.ClientUncheckedUpdateWithoutReviewInput = class ClientUncheckedUpdateWithoutReviewInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ClientUncheckedUpdateWithoutReviewInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ClientUncheckedUpdateWithoutReviewInput.prototype, "telephone_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], ClientUncheckedUpdateWithoutReviewInput.prototype, "birthday", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ClientUncheckedUpdateWithoutReviewInput.prototype, "age", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ClientUncheckedUpdateWithoutReviewInput.prototype, "nick_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ClientUncheckedUpdateWithoutReviewInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableEnumGenderFieldUpdateOperationsInput_1.NullableEnumGenderFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableEnumGenderFieldUpdateOperationsInput_1.NullableEnumGenderFieldUpdateOperationsInput)
], ClientUncheckedUpdateWithoutReviewInput.prototype, "gender", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ClientUncheckedUpdateWithoutReviewInput.prototype, "image2", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ClientUncheckedUpdateWithoutReviewInput.prototype, "image3", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], ClientUncheckedUpdateWithoutReviewInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ClientUncheckedUpdateWithoutReviewInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUncheckedUpdateOneWithoutClientNestedInput_1.UserUncheckedUpdateOneWithoutClientNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUncheckedUpdateOneWithoutClientNestedInput_1.UserUncheckedUpdateOneWithoutClientNestedInput)
], ClientUncheckedUpdateWithoutReviewInput.prototype, "users", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FavoriteUncheckedUpdateManyWithoutClientNestedInput_1.FavoriteUncheckedUpdateManyWithoutClientNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FavoriteUncheckedUpdateManyWithoutClientNestedInput_1.FavoriteUncheckedUpdateManyWithoutClientNestedInput)
], ClientUncheckedUpdateWithoutReviewInput.prototype, "favorite", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationUncheckedUpdateManyWithoutClientNestedInput_1.ReservationUncheckedUpdateManyWithoutClientNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationUncheckedUpdateManyWithoutClientNestedInput_1.ReservationUncheckedUpdateManyWithoutClientNestedInput)
], ClientUncheckedUpdateWithoutReviewInput.prototype, "reservation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationUncheckedUpdateManyWithoutClientNestedInput_1.NotificationUncheckedUpdateManyWithoutClientNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationUncheckedUpdateManyWithoutClientNestedInput_1.NotificationUncheckedUpdateManyWithoutClientNestedInput)
], ClientUncheckedUpdateWithoutReviewInput.prototype, "notification", void 0);
exports.ClientUncheckedUpdateWithoutReviewInput = ClientUncheckedUpdateWithoutReviewInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClientUncheckedUpdateWithoutReviewInput", {})
], ClientUncheckedUpdateWithoutReviewInput);
