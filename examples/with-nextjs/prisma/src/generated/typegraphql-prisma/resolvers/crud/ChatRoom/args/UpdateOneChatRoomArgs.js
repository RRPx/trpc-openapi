"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneChatRoomArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChatRoomUncheckedUpdateInput_1 = require("../../../inputs/ChatRoomUncheckedUpdateInput");
const ChatRoomWhereUniqueInput_1 = require("../../../inputs/ChatRoomWhereUniqueInput");
let UpdateOneChatRoomArgs = exports.UpdateOneChatRoomArgs = class UpdateOneChatRoomArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatRoomUncheckedUpdateInput_1.ChatRoomUncheckedUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ChatRoomUncheckedUpdateInput_1.ChatRoomUncheckedUpdateInput)
], UpdateOneChatRoomArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatRoomWhereUniqueInput_1.ChatRoomWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ChatRoomWhereUniqueInput_1.ChatRoomWhereUniqueInput)
], UpdateOneChatRoomArgs.prototype, "where", void 0);
exports.UpdateOneChatRoomArgs = UpdateOneChatRoomArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneChatRoomArgs);
