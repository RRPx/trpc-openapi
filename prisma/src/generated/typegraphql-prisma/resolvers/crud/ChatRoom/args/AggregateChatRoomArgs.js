"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateChatRoomArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChatRoomOrderByWithRelationInput_1 = require("../../../inputs/ChatRoomOrderByWithRelationInput");
const ChatRoomWhereInput_1 = require("../../../inputs/ChatRoomWhereInput");
const ChatRoomWhereUniqueInput_1 = require("../../../inputs/ChatRoomWhereUniqueInput");
let AggregateChatRoomArgs = class AggregateChatRoomArgs {
};
exports.AggregateChatRoomArgs = AggregateChatRoomArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatRoomWhereInput_1.ChatRoomWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChatRoomWhereInput_1.ChatRoomWhereInput)
], AggregateChatRoomArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ChatRoomOrderByWithRelationInput_1.ChatRoomOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateChatRoomArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatRoomWhereUniqueInput_1.ChatRoomWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChatRoomWhereUniqueInput_1.ChatRoomWhereUniqueInput)
], AggregateChatRoomArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateChatRoomArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateChatRoomArgs.prototype, "skip", void 0);
exports.AggregateChatRoomArgs = AggregateChatRoomArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateChatRoomArgs);
