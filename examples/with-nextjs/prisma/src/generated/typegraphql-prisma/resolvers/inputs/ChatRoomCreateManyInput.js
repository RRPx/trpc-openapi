"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatRoomCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ChatRoomCreateManyInput = exports.ChatRoomCreateManyInput = class ChatRoomCreateManyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChatRoomCreateManyInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ChatRoomCreateManyInput.prototype, "reservation_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ChatRoomCreateManyInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ChatRoomCreateManyInput.prototype, "updated_at", void 0);
exports.ChatRoomCreateManyInput = ChatRoomCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ChatRoomCreateManyInput", {})
], ChatRoomCreateManyInput);
