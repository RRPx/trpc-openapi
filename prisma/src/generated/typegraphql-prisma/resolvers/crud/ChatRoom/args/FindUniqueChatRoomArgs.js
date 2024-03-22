"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueChatRoomArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChatRoomWhereUniqueInput_1 = require("../../../inputs/ChatRoomWhereUniqueInput");
let FindUniqueChatRoomArgs = class FindUniqueChatRoomArgs {
};
exports.FindUniqueChatRoomArgs = FindUniqueChatRoomArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatRoomWhereUniqueInput_1.ChatRoomWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ChatRoomWhereUniqueInput_1.ChatRoomWhereUniqueInput)
], FindUniqueChatRoomArgs.prototype, "where", void 0);
exports.FindUniqueChatRoomArgs = FindUniqueChatRoomArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueChatRoomArgs);
