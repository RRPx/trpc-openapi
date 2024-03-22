"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyChatMessageArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChatMessageWhereInput_1 = require("../../../inputs/ChatMessageWhereInput");
let DeleteManyChatMessageArgs = exports.DeleteManyChatMessageArgs = class DeleteManyChatMessageArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatMessageWhereInput_1.ChatMessageWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChatMessageWhereInput_1.ChatMessageWhereInput)
], DeleteManyChatMessageArgs.prototype, "where", void 0);
exports.DeleteManyChatMessageArgs = DeleteManyChatMessageArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyChatMessageArgs);
