"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatMessageScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var ChatMessageScalarFieldEnum;
(function (ChatMessageScalarFieldEnum) {
    ChatMessageScalarFieldEnum["id"] = "id";
    ChatMessageScalarFieldEnum["chat_room_id"] = "chat_room_id";
    ChatMessageScalarFieldEnum["message"] = "message";
    ChatMessageScalarFieldEnum["is_seen"] = "is_seen";
    ChatMessageScalarFieldEnum["is_admin_seen"] = "is_admin_seen";
    ChatMessageScalarFieldEnum["user_type"] = "user_type";
    ChatMessageScalarFieldEnum["created_at"] = "created_at";
    ChatMessageScalarFieldEnum["updated_at"] = "updated_at";
})(ChatMessageScalarFieldEnum || (exports.ChatMessageScalarFieldEnum = ChatMessageScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(ChatMessageScalarFieldEnum, {
    name: "ChatMessageScalarFieldEnum",
    description: undefined,
});
