"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientUpdateWithoutReviewInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolFieldUpdateOperationsInput_1 = require("../inputs/BoolFieldUpdateOperationsInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const FavoriteUpdateManyWithoutClientNestedInput_1 = require("../inputs/FavoriteUpdateManyWithoutClientNestedInput");
const NotificationUpdateManyWithoutClientNestedInput_1 = require("../inputs/NotificationUpdateManyWithoutClientNestedInput");
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const NullableEnumGenderFieldUpdateOperationsInput_1 = require("../inputs/NullableEnumGenderFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const ReservationUpdateManyWithoutClientNestedInput_1 = require("../inputs/ReservationUpdateManyWithoutClientNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateOneWithoutClientNestedInput_1 = require("../inputs/UserUpdateOneWithoutClientNestedInput");
let ClientUpdateWithoutReviewInput = exports.ClientUpdateWithoutReviewInput = class ClientUpdateWithoutReviewInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ClientUpdateWithoutReviewInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ClientUpdateWithoutReviewInput.prototype, "telephone_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], ClientUpdateWithoutReviewInput.prototype, "birthday", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ClientUpdateWithoutReviewInput.prototype, "age", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ClientUpdateWithoutReviewInput.prototype, "nick_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ClientUpdateWithoutReviewInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableEnumGenderFieldUpdateOperationsInput_1.NullableEnumGenderFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableEnumGenderFieldUpdateOperationsInput_1.NullableEnumGenderFieldUpdateOperationsInput)
], ClientUpdateWithoutReviewInput.prototype, "gender", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ClientUpdateWithoutReviewInput.prototype, "image2", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ClientUpdateWithoutReviewInput.prototype, "image3", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], ClientUpdateWithoutReviewInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ClientUpdateWithoutReviewInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneWithoutClientNestedInput_1.UserUpdateOneWithoutClientNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneWithoutClientNestedInput_1.UserUpdateOneWithoutClientNestedInput)
], ClientUpdateWithoutReviewInput.prototype, "users", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FavoriteUpdateManyWithoutClientNestedInput_1.FavoriteUpdateManyWithoutClientNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FavoriteUpdateManyWithoutClientNestedInput_1.FavoriteUpdateManyWithoutClientNestedInput)
], ClientUpdateWithoutReviewInput.prototype, "favorite", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationUpdateManyWithoutClientNestedInput_1.ReservationUpdateManyWithoutClientNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationUpdateManyWithoutClientNestedInput_1.ReservationUpdateManyWithoutClientNestedInput)
], ClientUpdateWithoutReviewInput.prototype, "reservation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationUpdateManyWithoutClientNestedInput_1.NotificationUpdateManyWithoutClientNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationUpdateManyWithoutClientNestedInput_1.NotificationUpdateManyWithoutClientNestedInput)
], ClientUpdateWithoutReviewInput.prototype, "notification", void 0);
exports.ClientUpdateWithoutReviewInput = ClientUpdateWithoutReviewInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClientUpdateWithoutReviewInput", {})
], ClientUpdateWithoutReviewInput);
