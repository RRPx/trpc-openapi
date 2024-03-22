"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatRoomMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ChatRoomMaxAggregate = class ChatRoomMaxAggregate {
};
exports.ChatRoomMaxAggregate = ChatRoomMaxAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChatRoomMaxAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChatRoomMaxAggregate.prototype, "reservation_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ChatRoomMaxAggregate.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ChatRoomMaxAggregate.prototype, "updated_at", void 0);
exports.ChatRoomMaxAggregate = ChatRoomMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ChatRoomMaxAggregate", {})
], ChatRoomMaxAggregate);
