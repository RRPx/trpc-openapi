"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatMessageUncheckedUpdateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolFieldUpdateOperationsInput_1 = require("../inputs/BoolFieldUpdateOperationsInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumUserTypeFieldUpdateOperationsInput_1 = require("../inputs/EnumUserTypeFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let ChatMessageUncheckedUpdateManyInput = exports.ChatMessageUncheckedUpdateManyInput = class ChatMessageUncheckedUpdateManyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ChatMessageUncheckedUpdateManyInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ChatMessageUncheckedUpdateManyInput.prototype, "chat_room_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ChatMessageUncheckedUpdateManyInput.prototype, "message", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], ChatMessageUncheckedUpdateManyInput.prototype, "is_seen", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], ChatMessageUncheckedUpdateManyInput.prototype, "is_admin_seen", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumUserTypeFieldUpdateOperationsInput_1.EnumUserTypeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumUserTypeFieldUpdateOperationsInput_1.EnumUserTypeFieldUpdateOperationsInput)
], ChatMessageUncheckedUpdateManyInput.prototype, "user_type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ChatMessageUncheckedUpdateManyInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ChatMessageUncheckedUpdateManyInput.prototype, "updated_at", void 0);
exports.ChatMessageUncheckedUpdateManyInput = ChatMessageUncheckedUpdateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ChatMessageUncheckedUpdateManyInput", {})
], ChatMessageUncheckedUpdateManyInput);
