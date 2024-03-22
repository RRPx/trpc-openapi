"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatMessageUncheckedUpdateManyWithoutChat_roomInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolFieldUpdateOperationsInput_1 = require("../inputs/BoolFieldUpdateOperationsInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumUserTypeFieldUpdateOperationsInput_1 = require("../inputs/EnumUserTypeFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let ChatMessageUncheckedUpdateManyWithoutChat_roomInput = class ChatMessageUncheckedUpdateManyWithoutChat_roomInput {
};
exports.ChatMessageUncheckedUpdateManyWithoutChat_roomInput = ChatMessageUncheckedUpdateManyWithoutChat_roomInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ChatMessageUncheckedUpdateManyWithoutChat_roomInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ChatMessageUncheckedUpdateManyWithoutChat_roomInput.prototype, "message", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], ChatMessageUncheckedUpdateManyWithoutChat_roomInput.prototype, "is_seen", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], ChatMessageUncheckedUpdateManyWithoutChat_roomInput.prototype, "is_admin_seen", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumUserTypeFieldUpdateOperationsInput_1.EnumUserTypeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumUserTypeFieldUpdateOperationsInput_1.EnumUserTypeFieldUpdateOperationsInput)
], ChatMessageUncheckedUpdateManyWithoutChat_roomInput.prototype, "user_type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ChatMessageUncheckedUpdateManyWithoutChat_roomInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ChatMessageUncheckedUpdateManyWithoutChat_roomInput.prototype, "updated_at", void 0);
exports.ChatMessageUncheckedUpdateManyWithoutChat_roomInput = ChatMessageUncheckedUpdateManyWithoutChat_roomInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ChatMessageUncheckedUpdateManyWithoutChat_roomInput", {})
], ChatMessageUncheckedUpdateManyWithoutChat_roomInput);
