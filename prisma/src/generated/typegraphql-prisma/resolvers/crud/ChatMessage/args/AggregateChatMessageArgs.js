"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateChatMessageArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChatMessageOrderByWithRelationInput_1 = require("../../../inputs/ChatMessageOrderByWithRelationInput");
const ChatMessageWhereInput_1 = require("../../../inputs/ChatMessageWhereInput");
const ChatMessageWhereUniqueInput_1 = require("../../../inputs/ChatMessageWhereUniqueInput");
let AggregateChatMessageArgs = class AggregateChatMessageArgs {
};
exports.AggregateChatMessageArgs = AggregateChatMessageArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatMessageWhereInput_1.ChatMessageWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChatMessageWhereInput_1.ChatMessageWhereInput)
], AggregateChatMessageArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ChatMessageOrderByWithRelationInput_1.ChatMessageOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateChatMessageArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatMessageWhereUniqueInput_1.ChatMessageWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChatMessageWhereUniqueInput_1.ChatMessageWhereUniqueInput)
], AggregateChatMessageArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateChatMessageArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateChatMessageArgs.prototype, "skip", void 0);
exports.AggregateChatMessageArgs = AggregateChatMessageArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateChatMessageArgs);
