"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyChatRoomArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChatRoomWhereInput_1 = require("../../../inputs/ChatRoomWhereInput");
let DeleteManyChatRoomArgs = class DeleteManyChatRoomArgs {
};
exports.DeleteManyChatRoomArgs = DeleteManyChatRoomArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatRoomWhereInput_1.ChatRoomWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChatRoomWhereInput_1.ChatRoomWhereInput)
], DeleteManyChatRoomArgs.prototype, "where", void 0);
exports.DeleteManyChatRoomArgs = DeleteManyChatRoomArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyChatRoomArgs);
