"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientUpdateWithoutFavoriteInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolFieldUpdateOperationsInput_1 = require("../inputs/BoolFieldUpdateOperationsInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const NotificationUpdateManyWithoutClientNestedInput_1 = require("../inputs/NotificationUpdateManyWithoutClientNestedInput");
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const NullableEnumGenderFieldUpdateOperationsInput_1 = require("../inputs/NullableEnumGenderFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const ReservationUpdateManyWithoutClientNestedInput_1 = require("../inputs/ReservationUpdateManyWithoutClientNestedInput");
const ReviewUpdateManyWithoutClientNestedInput_1 = require("../inputs/ReviewUpdateManyWithoutClientNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateOneWithoutClientNestedInput_1 = require("../inputs/UserUpdateOneWithoutClientNestedInput");
let ClientUpdateWithoutFavoriteInput = class ClientUpdateWithoutFavoriteInput {
};
exports.ClientUpdateWithoutFavoriteInput = ClientUpdateWithoutFavoriteInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ClientUpdateWithoutFavoriteInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ClientUpdateWithoutFavoriteInput.prototype, "telephone_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], ClientUpdateWithoutFavoriteInput.prototype, "birthday", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ClientUpdateWithoutFavoriteInput.prototype, "age", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ClientUpdateWithoutFavoriteInput.prototype, "nick_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ClientUpdateWithoutFavoriteInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableEnumGenderFieldUpdateOperationsInput_1.NullableEnumGenderFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableEnumGenderFieldUpdateOperationsInput_1.NullableEnumGenderFieldUpdateOperationsInput)
], ClientUpdateWithoutFavoriteInput.prototype, "gender", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ClientUpdateWithoutFavoriteInput.prototype, "image2", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ClientUpdateWithoutFavoriteInput.prototype, "image3", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], ClientUpdateWithoutFavoriteInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ClientUpdateWithoutFavoriteInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneWithoutClientNestedInput_1.UserUpdateOneWithoutClientNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneWithoutClientNestedInput_1.UserUpdateOneWithoutClientNestedInput)
], ClientUpdateWithoutFavoriteInput.prototype, "users", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationUpdateManyWithoutClientNestedInput_1.ReservationUpdateManyWithoutClientNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationUpdateManyWithoutClientNestedInput_1.ReservationUpdateManyWithoutClientNestedInput)
], ClientUpdateWithoutFavoriteInput.prototype, "reservation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewUpdateManyWithoutClientNestedInput_1.ReviewUpdateManyWithoutClientNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReviewUpdateManyWithoutClientNestedInput_1.ReviewUpdateManyWithoutClientNestedInput)
], ClientUpdateWithoutFavoriteInput.prototype, "review", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationUpdateManyWithoutClientNestedInput_1.NotificationUpdateManyWithoutClientNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationUpdateManyWithoutClientNestedInput_1.NotificationUpdateManyWithoutClientNestedInput)
], ClientUpdateWithoutFavoriteInput.prototype, "notification", void 0);
exports.ClientUpdateWithoutFavoriteInput = ClientUpdateWithoutFavoriteInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClientUpdateWithoutFavoriteInput", {})
], ClientUpdateWithoutFavoriteInput);
