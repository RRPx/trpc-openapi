"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var UserScalarFieldEnum;
(function (UserScalarFieldEnum) {
    UserScalarFieldEnum["id"] = "id";
    UserScalarFieldEnum["last_name"] = "last_name";
    UserScalarFieldEnum["first_name"] = "first_name";
    UserScalarFieldEnum["email"] = "email";
    UserScalarFieldEnum["email_verified"] = "email_verified";
    UserScalarFieldEnum["firebase_auth_id"] = "firebase_auth_id";
    UserScalarFieldEnum["hash_password"] = "hash_password";
    UserScalarFieldEnum["stripe_account_id"] = "stripe_account_id";
    UserScalarFieldEnum["verification_image"] = "verification_image";
    UserScalarFieldEnum["client_id"] = "client_id";
    UserScalarFieldEnum["cast_id"] = "cast_id";
    UserScalarFieldEnum["admin_role"] = "admin_role";
    UserScalarFieldEnum["role"] = "role";
    UserScalarFieldEnum["created_at"] = "created_at";
})(UserScalarFieldEnum || (exports.UserScalarFieldEnum = UserScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(UserScalarFieldEnum, {
    name: "UserScalarFieldEnum",
    description: undefined,
});
