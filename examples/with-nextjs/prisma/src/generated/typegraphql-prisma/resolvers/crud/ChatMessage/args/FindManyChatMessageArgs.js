"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyChatMessageArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChatMessageOrderByWithRelationInput_1 = require("../../../inputs/ChatMessageOrderByWithRelationInput");
const ChatMessageWhereInput_1 = require("../../../inputs/ChatMessageWhereInput");
const ChatMessageWhereUniqueInput_1 = require("../../../inputs/ChatMessageWhereUniqueInput");
const ChatMessageScalarFieldEnum_1 = require("../../../../enums/ChatMessageScalarFieldEnum");
let FindManyChatMessageArgs = exports.FindManyChatMessageArgs = class FindManyChatMessageArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatMessageWhereInput_1.ChatMessageWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChatMessageWhereInput_1.ChatMessageWhereInput)
], FindManyChatMessageArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ChatMessageOrderByWithRelationInput_1.ChatMessageOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyChatMessageArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatMessageWhereUniqueInput_1.ChatMessageWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChatMessageWhereUniqueInput_1.ChatMessageWhereUniqueInput)
], FindManyChatMessageArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyChatMessageArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyChatMessageArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ChatMessageScalarFieldEnum_1.ChatMessageScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyChatMessageArgs.prototype, "distinct", void 0);
exports.FindManyChatMessageArgs = FindManyChatMessageArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyChatMessageArgs);
