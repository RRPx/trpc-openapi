"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatRoom = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChatRoomCount_1 = require("../resolvers/outputs/ChatRoomCount");
let ChatRoom = class ChatRoom {
};
exports.ChatRoom = ChatRoom;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ChatRoom.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ChatRoom.prototype, "reservation_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ChatRoom.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ChatRoom.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatRoomCount_1.ChatRoomCount, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChatRoomCount_1.ChatRoomCount)
], ChatRoom.prototype, "_count", void 0);
exports.ChatRoom = ChatRoom = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ChatRoom", {})
], ChatRoom);
