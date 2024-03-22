"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatMessageUncheckedCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserType_1 = require("../../enums/UserType");
let ChatMessageUncheckedCreateInput = class ChatMessageUncheckedCreateInput {
};
exports.ChatMessageUncheckedCreateInput = ChatMessageUncheckedCreateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChatMessageUncheckedCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ChatMessageUncheckedCreateInput.prototype, "chat_room_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChatMessageUncheckedCreateInput.prototype, "message", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ChatMessageUncheckedCreateInput.prototype, "is_seen", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ChatMessageUncheckedCreateInput.prototype, "is_admin_seen", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserType_1.UserType, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ChatMessageUncheckedCreateInput.prototype, "user_type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ChatMessageUncheckedCreateInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ChatMessageUncheckedCreateInput.prototype, "updated_at", void 0);
exports.ChatMessageUncheckedCreateInput = ChatMessageUncheckedCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ChatMessageUncheckedCreateInput", {})
], ChatMessageUncheckedCreateInput);
