"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneChatRoomArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChatRoomUncheckedCreateInput_1 = require("../../../inputs/ChatRoomUncheckedCreateInput");
const ChatRoomUncheckedUpdateInput_1 = require("../../../inputs/ChatRoomUncheckedUpdateInput");
const ChatRoomWhereUniqueInput_1 = require("../../../inputs/ChatRoomWhereUniqueInput");
let UpsertOneChatRoomArgs = class UpsertOneChatRoomArgs {
};
exports.UpsertOneChatRoomArgs = UpsertOneChatRoomArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatRoomWhereUniqueInput_1.ChatRoomWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ChatRoomWhereUniqueInput_1.ChatRoomWhereUniqueInput)
], UpsertOneChatRoomArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatRoomUncheckedCreateInput_1.ChatRoomUncheckedCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ChatRoomUncheckedCreateInput_1.ChatRoomUncheckedCreateInput)
], UpsertOneChatRoomArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatRoomUncheckedUpdateInput_1.ChatRoomUncheckedUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ChatRoomUncheckedUpdateInput_1.ChatRoomUncheckedUpdateInput)
], UpsertOneChatRoomArgs.prototype, "update", void 0);
exports.UpsertOneChatRoomArgs = UpsertOneChatRoomArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneChatRoomArgs);
