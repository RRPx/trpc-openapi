"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatMessageCreateManyChat_roomInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChatMessageCreateManyChat_roomInput_1 = require("../inputs/ChatMessageCreateManyChat_roomInput");
let ChatMessageCreateManyChat_roomInputEnvelope = class ChatMessageCreateManyChat_roomInputEnvelope {
};
exports.ChatMessageCreateManyChat_roomInputEnvelope = ChatMessageCreateManyChat_roomInputEnvelope;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ChatMessageCreateManyChat_roomInput_1.ChatMessageCreateManyChat_roomInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], ChatMessageCreateManyChat_roomInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ChatMessageCreateManyChat_roomInputEnvelope.prototype, "skipDuplicates", void 0);
exports.ChatMessageCreateManyChat_roomInputEnvelope = ChatMessageCreateManyChat_roomInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("ChatMessageCreateManyChat_roomInputEnvelope", {})
], ChatMessageCreateManyChat_roomInputEnvelope);
