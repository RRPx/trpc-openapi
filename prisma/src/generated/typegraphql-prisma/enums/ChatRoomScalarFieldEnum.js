"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatRoomScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var ChatRoomScalarFieldEnum;
(function (ChatRoomScalarFieldEnum) {
    ChatRoomScalarFieldEnum["id"] = "id";
    ChatRoomScalarFieldEnum["reservation_id"] = "reservation_id";
    ChatRoomScalarFieldEnum["created_at"] = "created_at";
    ChatRoomScalarFieldEnum["updated_at"] = "updated_at";
})(ChatRoomScalarFieldEnum || (exports.ChatRoomScalarFieldEnum = ChatRoomScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(ChatRoomScalarFieldEnum, {
    name: "ChatRoomScalarFieldEnum",
    description: undefined,
});
