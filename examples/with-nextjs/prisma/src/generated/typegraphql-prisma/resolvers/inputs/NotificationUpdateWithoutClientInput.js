"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationUpdateWithoutClientInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolFieldUpdateOperationsInput_1 = require("../inputs/BoolFieldUpdateOperationsInput");
const CastUpdateOneWithoutNotificationNestedInput_1 = require("../inputs/CastUpdateOneWithoutNotificationNestedInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumTargetedUserFieldUpdateOperationsInput_1 = require("../inputs/EnumTargetedUserFieldUpdateOperationsInput");
const NullableEnumCategoryFieldUpdateOperationsInput_1 = require("../inputs/NullableEnumCategoryFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let NotificationUpdateWithoutClientInput = exports.NotificationUpdateWithoutClientInput = class NotificationUpdateWithoutClientInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], NotificationUpdateWithoutClientInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], NotificationUpdateWithoutClientInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableEnumCategoryFieldUpdateOperationsInput_1.NullableEnumCategoryFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableEnumCategoryFieldUpdateOperationsInput_1.NullableEnumCategoryFieldUpdateOperationsInput)
], NotificationUpdateWithoutClientInput.prototype, "category", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], NotificationUpdateWithoutClientInput.prototype, "notification_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], NotificationUpdateWithoutClientInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], NotificationUpdateWithoutClientInput.prototype, "is_seen", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], NotificationUpdateWithoutClientInput.prototype, "language", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumTargetedUserFieldUpdateOperationsInput_1.EnumTargetedUserFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumTargetedUserFieldUpdateOperationsInput_1.EnumTargetedUserFieldUpdateOperationsInput)
], NotificationUpdateWithoutClientInput.prototype, "targeted_user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], NotificationUpdateWithoutClientInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], NotificationUpdateWithoutClientInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUpdateOneWithoutNotificationNestedInput_1.CastUpdateOneWithoutNotificationNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastUpdateOneWithoutNotificationNestedInput_1.CastUpdateOneWithoutNotificationNestedInput)
], NotificationUpdateWithoutClientInput.prototype, "cast", void 0);
exports.NotificationUpdateWithoutClientInput = NotificationUpdateWithoutClientInput = tslib_1.__decorate([
    TypeGraphQL.InputType("NotificationUpdateWithoutClientInput", {})
], NotificationUpdateWithoutClientInput);
