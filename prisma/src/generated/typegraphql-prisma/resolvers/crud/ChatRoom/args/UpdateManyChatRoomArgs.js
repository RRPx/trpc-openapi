"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyChatRoomArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChatRoomUncheckedUpdateManyInput_1 = require("../../../inputs/ChatRoomUncheckedUpdateManyInput");
const ChatRoomWhereInput_1 = require("../../../inputs/ChatRoomWhereInput");
let UpdateManyChatRoomArgs = class UpdateManyChatRoomArgs {
};
exports.UpdateManyChatRoomArgs = UpdateManyChatRoomArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatRoomUncheckedUpdateManyInput_1.ChatRoomUncheckedUpdateManyInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ChatRoomUncheckedUpdateManyInput_1.ChatRoomUncheckedUpdateManyInput)
], UpdateManyChatRoomArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatRoomWhereInput_1.ChatRoomWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChatRoomWhereInput_1.ChatRoomWhereInput)
], UpdateManyChatRoomArgs.prototype, "where", void 0);
exports.UpdateManyChatRoomArgs = UpdateManyChatRoomArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyChatRoomArgs);
