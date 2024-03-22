"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneChatMessageArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChatMessageUncheckedCreateInput_1 = require("../../../inputs/ChatMessageUncheckedCreateInput");
let CreateOneChatMessageArgs = class CreateOneChatMessageArgs {
};
exports.CreateOneChatMessageArgs = CreateOneChatMessageArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatMessageUncheckedCreateInput_1.ChatMessageUncheckedCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ChatMessageUncheckedCreateInput_1.ChatMessageUncheckedCreateInput)
], CreateOneChatMessageArgs.prototype, "data", void 0);
exports.CreateOneChatMessageArgs = CreateOneChatMessageArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneChatMessageArgs);
