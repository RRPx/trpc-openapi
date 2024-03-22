"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatRoomCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChatRoomCountMessagesArgs_1 = require("./args/ChatRoomCountMessagesArgs");
let ChatRoomCount = exports.ChatRoomCount = class ChatRoomCount {
    getMessages(root, args) {
        return root.messages;
    }
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "messages",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [ChatRoomCount, ChatRoomCountMessagesArgs_1.ChatRoomCountMessagesArgs]),
    tslib_1.__metadata("design:returntype", Number)
], ChatRoomCount.prototype, "getMessages", null);
exports.ChatRoomCount = ChatRoomCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ChatRoomCount", {})
], ChatRoomCount);
