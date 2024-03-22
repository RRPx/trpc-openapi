"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationUncheckedUpdateManyWithoutClientInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolFieldUpdateOperationsInput_1 = require("../inputs/BoolFieldUpdateOperationsInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumTargetedUserFieldUpdateOperationsInput_1 = require("../inputs/EnumTargetedUserFieldUpdateOperationsInput");
const NullableEnumCategoryFieldUpdateOperationsInput_1 = require("../inputs/NullableEnumCategoryFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let NotificationUncheckedUpdateManyWithoutClientInput = class NotificationUncheckedUpdateManyWithoutClientInput {
};
exports.NotificationUncheckedUpdateManyWithoutClientInput = NotificationUncheckedUpdateManyWithoutClientInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], NotificationUncheckedUpdateManyWithoutClientInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], NotificationUncheckedUpdateManyWithoutClientInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableEnumCategoryFieldUpdateOperationsInput_1.NullableEnumCategoryFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableEnumCategoryFieldUpdateOperationsInput_1.NullableEnumCategoryFieldUpdateOperationsInput)
], NotificationUncheckedUpdateManyWithoutClientInput.prototype, "category", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], NotificationUncheckedUpdateManyWithoutClientInput.prototype, "notification_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], NotificationUncheckedUpdateManyWithoutClientInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], NotificationUncheckedUpdateManyWithoutClientInput.prototype, "cast_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], NotificationUncheckedUpdateManyWithoutClientInput.prototype, "is_seen", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], NotificationUncheckedUpdateManyWithoutClientInput.prototype, "language", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumTargetedUserFieldUpdateOperationsInput_1.EnumTargetedUserFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumTargetedUserFieldUpdateOperationsInput_1.EnumTargetedUserFieldUpdateOperationsInput)
], NotificationUncheckedUpdateManyWithoutClientInput.prototype, "targeted_user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], NotificationUncheckedUpdateManyWithoutClientInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], NotificationUncheckedUpdateManyWithoutClientInput.prototype, "updated_at", void 0);
exports.NotificationUncheckedUpdateManyWithoutClientInput = NotificationUncheckedUpdateManyWithoutClientInput = tslib_1.__decorate([
    TypeGraphQL.InputType("NotificationUncheckedUpdateManyWithoutClientInput", {})
], NotificationUncheckedUpdateManyWithoutClientInput);
