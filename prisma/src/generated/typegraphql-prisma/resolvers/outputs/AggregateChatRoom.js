"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateChatRoom = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChatRoomCountAggregate_1 = require("../outputs/ChatRoomCountAggregate");
const ChatRoomMaxAggregate_1 = require("../outputs/ChatRoomMaxAggregate");
const ChatRoomMinAggregate_1 = require("../outputs/ChatRoomMinAggregate");
let AggregateChatRoom = class AggregateChatRoom {
};
exports.AggregateChatRoom = AggregateChatRoom;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatRoomCountAggregate_1.ChatRoomCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChatRoomCountAggregate_1.ChatRoomCountAggregate)
], AggregateChatRoom.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatRoomMinAggregate_1.ChatRoomMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChatRoomMinAggregate_1.ChatRoomMinAggregate)
], AggregateChatRoom.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatRoomMaxAggregate_1.ChatRoomMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChatRoomMaxAggregate_1.ChatRoomMaxAggregate)
], AggregateChatRoom.prototype, "_max", void 0);
exports.AggregateChatRoom = AggregateChatRoom = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateChatRoom", {})
], AggregateChatRoom);
