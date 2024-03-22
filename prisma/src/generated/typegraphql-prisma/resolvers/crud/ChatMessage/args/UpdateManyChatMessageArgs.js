"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyChatMessageArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChatMessageUncheckedUpdateManyInput_1 = require("../../../inputs/ChatMessageUncheckedUpdateManyInput");
const ChatMessageWhereInput_1 = require("../../../inputs/ChatMessageWhereInput");
let UpdateManyChatMessageArgs = class UpdateManyChatMessageArgs {
};
exports.UpdateManyChatMessageArgs = UpdateManyChatMessageArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatMessageUncheckedUpdateManyInput_1.ChatMessageUncheckedUpdateManyInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ChatMessageUncheckedUpdateManyInput_1.ChatMessageUncheckedUpdateManyInput)
], UpdateManyChatMessageArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatMessageWhereInput_1.ChatMessageWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChatMessageWhereInput_1.ChatMessageWhereInput)
], UpdateManyChatMessageArgs.prototype, "where", void 0);
exports.UpdateManyChatMessageArgs = UpdateManyChatMessageArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyChatMessageArgs);
