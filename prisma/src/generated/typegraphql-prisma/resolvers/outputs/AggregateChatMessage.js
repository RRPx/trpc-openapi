"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateChatMessage = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChatMessageCountAggregate_1 = require("../outputs/ChatMessageCountAggregate");
const ChatMessageMaxAggregate_1 = require("../outputs/ChatMessageMaxAggregate");
const ChatMessageMinAggregate_1 = require("../outputs/ChatMessageMinAggregate");
let AggregateChatMessage = class AggregateChatMessage {
};
exports.AggregateChatMessage = AggregateChatMessage;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatMessageCountAggregate_1.ChatMessageCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChatMessageCountAggregate_1.ChatMessageCountAggregate)
], AggregateChatMessage.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatMessageMinAggregate_1.ChatMessageMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChatMessageMinAggregate_1.ChatMessageMinAggregate)
], AggregateChatMessage.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatMessageMaxAggregate_1.ChatMessageMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChatMessageMaxAggregate_1.ChatMessageMaxAggregate)
], AggregateChatMessage.prototype, "_max", void 0);
exports.AggregateChatMessage = AggregateChatMessage = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateChatMessage", {})
], AggregateChatMessage);
