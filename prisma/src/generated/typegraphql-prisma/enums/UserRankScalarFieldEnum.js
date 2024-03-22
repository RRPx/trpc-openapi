"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRankScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var UserRankScalarFieldEnum;
(function (UserRankScalarFieldEnum) {
    UserRankScalarFieldEnum["id"] = "id";
    UserRankScalarFieldEnum["name"] = "name";
    UserRankScalarFieldEnum["basic_fee"] = "basic_fee";
    UserRankScalarFieldEnum["is_display"] = "is_display";
    UserRankScalarFieldEnum["created_at"] = "created_at";
    UserRankScalarFieldEnum["updated_at"] = "updated_at";
})(UserRankScalarFieldEnum || (exports.UserRankScalarFieldEnum = UserRankScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(UserRankScalarFieldEnum, {
    name: "UserRankScalarFieldEnum",
    description: undefined,
});
