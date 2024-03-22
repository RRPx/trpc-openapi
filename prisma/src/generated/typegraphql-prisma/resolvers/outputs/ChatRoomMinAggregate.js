"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatRoomMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ChatRoomMinAggregate = class ChatRoomMinAggregate {
};
exports.ChatRoomMinAggregate = ChatRoomMinAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChatRoomMinAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChatRoomMinAggregate.prototype, "reservation_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ChatRoomMinAggregate.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ChatRoomMinAggregate.prototype, "updated_at", void 0);
exports.ChatRoomMinAggregate = ChatRoomMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ChatRoomMinAggregate", {})
], ChatRoomMinAggregate);
