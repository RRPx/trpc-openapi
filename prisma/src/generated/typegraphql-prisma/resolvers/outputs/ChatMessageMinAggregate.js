"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatMessageMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserType_1 = require("../../enums/UserType");
let ChatMessageMinAggregate = class ChatMessageMinAggregate {
};
exports.ChatMessageMinAggregate = ChatMessageMinAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChatMessageMinAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChatMessageMinAggregate.prototype, "chat_room_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChatMessageMinAggregate.prototype, "message", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ChatMessageMinAggregate.prototype, "is_seen", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ChatMessageMinAggregate.prototype, "is_admin_seen", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserType_1.UserType, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChatMessageMinAggregate.prototype, "user_type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ChatMessageMinAggregate.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ChatMessageMinAggregate.prototype, "updated_at", void 0);
exports.ChatMessageMinAggregate = ChatMessageMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ChatMessageMinAggregate", {})
], ChatMessageMinAggregate);
