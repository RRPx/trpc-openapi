"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueChatRoomOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChatRoomWhereUniqueInput_1 = require("../../../inputs/ChatRoomWhereUniqueInput");
let FindUniqueChatRoomOrThrowArgs = class FindUniqueChatRoomOrThrowArgs {
};
exports.FindUniqueChatRoomOrThrowArgs = FindUniqueChatRoomOrThrowArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatRoomWhereUniqueInput_1.ChatRoomWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ChatRoomWhereUniqueInput_1.ChatRoomWhereUniqueInput)
], FindUniqueChatRoomOrThrowArgs.prototype, "where", void 0);
exports.FindUniqueChatRoomOrThrowArgs = FindUniqueChatRoomOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueChatRoomOrThrowArgs);
