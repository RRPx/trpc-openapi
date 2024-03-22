"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var NotificationScalarFieldEnum;
(function (NotificationScalarFieldEnum) {
    NotificationScalarFieldEnum["id"] = "id";
    NotificationScalarFieldEnum["title"] = "title";
    NotificationScalarFieldEnum["category"] = "category";
    NotificationScalarFieldEnum["notification_date"] = "notification_date";
    NotificationScalarFieldEnum["content"] = "content";
    NotificationScalarFieldEnum["cast_id"] = "cast_id";
    NotificationScalarFieldEnum["client_id"] = "client_id";
    NotificationScalarFieldEnum["is_seen"] = "is_seen";
    NotificationScalarFieldEnum["language"] = "language";
    NotificationScalarFieldEnum["targeted_user"] = "targeted_user";
    NotificationScalarFieldEnum["created_at"] = "created_at";
    NotificationScalarFieldEnum["updated_at"] = "updated_at";
})(NotificationScalarFieldEnum || (exports.NotificationScalarFieldEnum = NotificationScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(NotificationScalarFieldEnum, {
    name: "NotificationScalarFieldEnum",
    description: undefined,
});
