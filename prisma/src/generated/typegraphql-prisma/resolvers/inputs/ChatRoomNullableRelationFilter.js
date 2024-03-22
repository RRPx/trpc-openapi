"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatRoomNullableRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChatRoomWhereInput_1 = require("../inputs/ChatRoomWhereInput");
let ChatRoomNullableRelationFilter = class ChatRoomNullableRelationFilter {
};
exports.ChatRoomNullableRelationFilter = ChatRoomNullableRelationFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatRoomWhereInput_1.ChatRoomWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChatRoomWhereInput_1.ChatRoomWhereInput)
], ChatRoomNullableRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatRoomWhereInput_1.ChatRoomWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChatRoomWhereInput_1.ChatRoomWhereInput)
], ChatRoomNullableRelationFilter.prototype, "isNot", void 0);
exports.ChatRoomNullableRelationFilter = ChatRoomNullableRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("ChatRoomNullableRelationFilter", {})
], ChatRoomNullableRelationFilter);
