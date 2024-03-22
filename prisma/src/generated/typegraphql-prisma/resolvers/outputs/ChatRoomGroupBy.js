"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatRoomGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChatRoomCountAggregate_1 = require("../outputs/ChatRoomCountAggregate");
const ChatRoomMaxAggregate_1 = require("../outputs/ChatRoomMaxAggregate");
const ChatRoomMinAggregate_1 = require("../outputs/ChatRoomMinAggregate");
let ChatRoomGroupBy = class ChatRoomGroupBy {
};
exports.ChatRoomGroupBy = ChatRoomGroupBy;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ChatRoomGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ChatRoomGroupBy.prototype, "reservation_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ChatRoomGroupBy.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ChatRoomGroupBy.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatRoomCountAggregate_1.ChatRoomCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChatRoomCountAggregate_1.ChatRoomCountAggregate)
], ChatRoomGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatRoomMinAggregate_1.ChatRoomMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChatRoomMinAggregate_1.ChatRoomMinAggregate)
], ChatRoomGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatRoomMaxAggregate_1.ChatRoomMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChatRoomMaxAggregate_1.ChatRoomMaxAggregate)
], ChatRoomGroupBy.prototype, "_max", void 0);
exports.ChatRoomGroupBy = ChatRoomGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ChatRoomGroupBy", {})
], ChatRoomGroupBy);
