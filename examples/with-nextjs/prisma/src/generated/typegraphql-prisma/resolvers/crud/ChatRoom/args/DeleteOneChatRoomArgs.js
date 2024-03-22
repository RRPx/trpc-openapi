"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneChatRoomArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChatRoomWhereUniqueInput_1 = require("../../../inputs/ChatRoomWhereUniqueInput");
let DeleteOneChatRoomArgs = exports.DeleteOneChatRoomArgs = class DeleteOneChatRoomArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatRoomWhereUniqueInput_1.ChatRoomWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ChatRoomWhereUniqueInput_1.ChatRoomWhereUniqueInput)
], DeleteOneChatRoomArgs.prototype, "where", void 0);
exports.DeleteOneChatRoomArgs = DeleteOneChatRoomArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneChatRoomArgs);
