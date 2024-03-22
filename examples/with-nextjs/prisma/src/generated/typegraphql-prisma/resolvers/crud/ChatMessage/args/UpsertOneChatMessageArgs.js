"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneChatMessageArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChatMessageUncheckedCreateInput_1 = require("../../../inputs/ChatMessageUncheckedCreateInput");
const ChatMessageUncheckedUpdateInput_1 = require("../../../inputs/ChatMessageUncheckedUpdateInput");
const ChatMessageWhereUniqueInput_1 = require("../../../inputs/ChatMessageWhereUniqueInput");
let UpsertOneChatMessageArgs = exports.UpsertOneChatMessageArgs = class UpsertOneChatMessageArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatMessageWhereUniqueInput_1.ChatMessageWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ChatMessageWhereUniqueInput_1.ChatMessageWhereUniqueInput)
], UpsertOneChatMessageArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatMessageUncheckedCreateInput_1.ChatMessageUncheckedCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ChatMessageUncheckedCreateInput_1.ChatMessageUncheckedCreateInput)
], UpsertOneChatMessageArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatMessageUncheckedUpdateInput_1.ChatMessageUncheckedUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ChatMessageUncheckedUpdateInput_1.ChatMessageUncheckedUpdateInput)
], UpsertOneChatMessageArgs.prototype, "update", void 0);
exports.UpsertOneChatMessageArgs = UpsertOneChatMessageArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneChatMessageArgs);
