"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneChatRoomArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChatRoomUncheckedCreateInput_1 = require("../../../inputs/ChatRoomUncheckedCreateInput");
let CreateOneChatRoomArgs = exports.CreateOneChatRoomArgs = class CreateOneChatRoomArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatRoomUncheckedCreateInput_1.ChatRoomUncheckedCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ChatRoomUncheckedCreateInput_1.ChatRoomUncheckedCreateInput)
], CreateOneChatRoomArgs.prototype, "data", void 0);
exports.CreateOneChatRoomArgs = CreateOneChatRoomArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneChatRoomArgs);
