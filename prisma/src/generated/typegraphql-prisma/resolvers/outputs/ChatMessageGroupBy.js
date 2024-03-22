"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatMessageGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChatMessageCountAggregate_1 = require("../outputs/ChatMessageCountAggregate");
const ChatMessageMaxAggregate_1 = require("../outputs/ChatMessageMaxAggregate");
const ChatMessageMinAggregate_1 = require("../outputs/ChatMessageMinAggregate");
const UserType_1 = require("../../enums/UserType");
let ChatMessageGroupBy = class ChatMessageGroupBy {
};
exports.ChatMessageGroupBy = ChatMessageGroupBy;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ChatMessageGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ChatMessageGroupBy.prototype, "chat_room_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChatMessageGroupBy.prototype, "message", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], ChatMessageGroupBy.prototype, "is_seen", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], ChatMessageGroupBy.prototype, "is_admin_seen", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserType_1.UserType, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ChatMessageGroupBy.prototype, "user_type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ChatMessageGroupBy.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ChatMessageGroupBy.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatMessageCountAggregate_1.ChatMessageCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChatMessageCountAggregate_1.ChatMessageCountAggregate)
], ChatMessageGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatMessageMinAggregate_1.ChatMessageMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChatMessageMinAggregate_1.ChatMessageMinAggregate)
], ChatMessageGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatMessageMaxAggregate_1.ChatMessageMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChatMessageMaxAggregate_1.ChatMessageMaxAggregate)
], ChatMessageGroupBy.prototype, "_max", void 0);
exports.ChatMessageGroupBy = ChatMessageGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ChatMessageGroupBy", {})
], ChatMessageGroupBy);
