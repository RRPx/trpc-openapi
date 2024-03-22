"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatRoomCountAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ChatRoomCountAggregate = class ChatRoomCountAggregate {
};
exports.ChatRoomCountAggregate = ChatRoomCountAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ChatRoomCountAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ChatRoomCountAggregate.prototype, "reservation_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ChatRoomCountAggregate.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ChatRoomCountAggregate.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ChatRoomCountAggregate.prototype, "_all", void 0);
exports.ChatRoomCountAggregate = ChatRoomCountAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ChatRoomCountAggregate", {})
], ChatRoomCountAggregate);
