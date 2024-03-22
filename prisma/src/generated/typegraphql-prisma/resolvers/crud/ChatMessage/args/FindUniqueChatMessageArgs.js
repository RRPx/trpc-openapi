"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueChatMessageArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChatMessageWhereUniqueInput_1 = require("../../../inputs/ChatMessageWhereUniqueInput");
let FindUniqueChatMessageArgs = class FindUniqueChatMessageArgs {
};
exports.FindUniqueChatMessageArgs = FindUniqueChatMessageArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatMessageWhereUniqueInput_1.ChatMessageWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ChatMessageWhereUniqueInput_1.ChatMessageWhereUniqueInput)
], FindUniqueChatMessageArgs.prototype, "where", void 0);
exports.FindUniqueChatMessageArgs = FindUniqueChatMessageArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueChatMessageArgs);
