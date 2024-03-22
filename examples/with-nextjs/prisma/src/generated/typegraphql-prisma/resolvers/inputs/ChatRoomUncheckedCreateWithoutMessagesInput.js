"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatRoomUncheckedCreateWithoutMessagesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ChatRoomUncheckedCreateWithoutMessagesInput = exports.ChatRoomUncheckedCreateWithoutMessagesInput = class ChatRoomUncheckedCreateWithoutMessagesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChatRoomUncheckedCreateWithoutMessagesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ChatRoomUncheckedCreateWithoutMessagesInput.prototype, "reservation_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ChatRoomUncheckedCreateWithoutMessagesInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ChatRoomUncheckedCreateWithoutMessagesInput.prototype, "updated_at", void 0);
exports.ChatRoomUncheckedCreateWithoutMessagesInput = ChatRoomUncheckedCreateWithoutMessagesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ChatRoomUncheckedCreateWithoutMessagesInput", {})
], ChatRoomUncheckedCreateWithoutMessagesInput);
