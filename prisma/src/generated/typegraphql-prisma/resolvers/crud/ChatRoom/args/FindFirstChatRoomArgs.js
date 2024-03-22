"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstChatRoomArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChatRoomOrderByWithRelationInput_1 = require("../../../inputs/ChatRoomOrderByWithRelationInput");
const ChatRoomWhereInput_1 = require("../../../inputs/ChatRoomWhereInput");
const ChatRoomWhereUniqueInput_1 = require("../../../inputs/ChatRoomWhereUniqueInput");
const ChatRoomScalarFieldEnum_1 = require("../../../../enums/ChatRoomScalarFieldEnum");
let FindFirstChatRoomArgs = class FindFirstChatRoomArgs {
};
exports.FindFirstChatRoomArgs = FindFirstChatRoomArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatRoomWhereInput_1.ChatRoomWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChatRoomWhereInput_1.ChatRoomWhereInput)
], FindFirstChatRoomArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ChatRoomOrderByWithRelationInput_1.ChatRoomOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstChatRoomArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatRoomWhereUniqueInput_1.ChatRoomWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChatRoomWhereUniqueInput_1.ChatRoomWhereUniqueInput)
], FindFirstChatRoomArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstChatRoomArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstChatRoomArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ChatRoomScalarFieldEnum_1.ChatRoomScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstChatRoomArgs.prototype, "distinct", void 0);
exports.FindFirstChatRoomArgs = FindFirstChatRoomArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstChatRoomArgs);
