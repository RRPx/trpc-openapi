"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatMessageUncheckedCreateWithoutChat_roomInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserType_1 = require("../../enums/UserType");
let ChatMessageUncheckedCreateWithoutChat_roomInput = exports.ChatMessageUncheckedCreateWithoutChat_roomInput = class ChatMessageUncheckedCreateWithoutChat_roomInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChatMessageUncheckedCreateWithoutChat_roomInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChatMessageUncheckedCreateWithoutChat_roomInput.prototype, "message", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ChatMessageUncheckedCreateWithoutChat_roomInput.prototype, "is_seen", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ChatMessageUncheckedCreateWithoutChat_roomInput.prototype, "is_admin_seen", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserType_1.UserType, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ChatMessageUncheckedCreateWithoutChat_roomInput.prototype, "user_type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ChatMessageUncheckedCreateWithoutChat_roomInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ChatMessageUncheckedCreateWithoutChat_roomInput.prototype, "updated_at", void 0);
exports.ChatMessageUncheckedCreateWithoutChat_roomInput = ChatMessageUncheckedCreateWithoutChat_roomInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ChatMessageUncheckedCreateWithoutChat_roomInput", {})
], ChatMessageUncheckedCreateWithoutChat_roomInput);
