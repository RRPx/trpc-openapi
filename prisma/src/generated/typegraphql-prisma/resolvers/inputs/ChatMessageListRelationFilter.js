"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatMessageListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChatMessageWhereInput_1 = require("../inputs/ChatMessageWhereInput");
let ChatMessageListRelationFilter = class ChatMessageListRelationFilter {
};
exports.ChatMessageListRelationFilter = ChatMessageListRelationFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatMessageWhereInput_1.ChatMessageWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChatMessageWhereInput_1.ChatMessageWhereInput)
], ChatMessageListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatMessageWhereInput_1.ChatMessageWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChatMessageWhereInput_1.ChatMessageWhereInput)
], ChatMessageListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatMessageWhereInput_1.ChatMessageWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChatMessageWhereInput_1.ChatMessageWhereInput)
], ChatMessageListRelationFilter.prototype, "none", void 0);
exports.ChatMessageListRelationFilter = ChatMessageListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("ChatMessageListRelationFilter", {})
], ChatMessageListRelationFilter);
