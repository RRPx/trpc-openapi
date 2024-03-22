"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatRoomMessagesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChatMessageOrderByWithRelationInput_1 = require("../../../inputs/ChatMessageOrderByWithRelationInput");
const ChatMessageWhereInput_1 = require("../../../inputs/ChatMessageWhereInput");
const ChatMessageWhereUniqueInput_1 = require("../../../inputs/ChatMessageWhereUniqueInput");
const ChatMessageScalarFieldEnum_1 = require("../../../../enums/ChatMessageScalarFieldEnum");
let ChatRoomMessagesArgs = class ChatRoomMessagesArgs {
};
exports.ChatRoomMessagesArgs = ChatRoomMessagesArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatMessageWhereInput_1.ChatMessageWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChatMessageWhereInput_1.ChatMessageWhereInput)
], ChatRoomMessagesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ChatMessageOrderByWithRelationInput_1.ChatMessageOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ChatRoomMessagesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatMessageWhereUniqueInput_1.ChatMessageWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChatMessageWhereUniqueInput_1.ChatMessageWhereUniqueInput)
], ChatRoomMessagesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ChatRoomMessagesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ChatRoomMessagesArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ChatMessageScalarFieldEnum_1.ChatMessageScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ChatRoomMessagesArgs.prototype, "distinct", void 0);
exports.ChatRoomMessagesArgs = ChatRoomMessagesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], ChatRoomMessagesArgs);
