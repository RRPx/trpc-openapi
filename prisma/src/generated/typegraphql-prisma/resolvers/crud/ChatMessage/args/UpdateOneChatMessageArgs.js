"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneChatMessageArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChatMessageUncheckedUpdateInput_1 = require("../../../inputs/ChatMessageUncheckedUpdateInput");
const ChatMessageWhereUniqueInput_1 = require("../../../inputs/ChatMessageWhereUniqueInput");
let UpdateOneChatMessageArgs = class UpdateOneChatMessageArgs {
};
exports.UpdateOneChatMessageArgs = UpdateOneChatMessageArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatMessageUncheckedUpdateInput_1.ChatMessageUncheckedUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ChatMessageUncheckedUpdateInput_1.ChatMessageUncheckedUpdateInput)
], UpdateOneChatMessageArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatMessageWhereUniqueInput_1.ChatMessageWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ChatMessageWhereUniqueInput_1.ChatMessageWhereUniqueInput)
], UpdateOneChatMessageArgs.prototype, "where", void 0);
exports.UpdateOneChatMessageArgs = UpdateOneChatMessageArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneChatMessageArgs);
