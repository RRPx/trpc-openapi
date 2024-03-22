"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoriteScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var FavoriteScalarFieldEnum;
(function (FavoriteScalarFieldEnum) {
    FavoriteScalarFieldEnum["id"] = "id";
    FavoriteScalarFieldEnum["client_id"] = "client_id";
    FavoriteScalarFieldEnum["cast_id"] = "cast_id";
    FavoriteScalarFieldEnum["is_display"] = "is_display";
    FavoriteScalarFieldEnum["created_at"] = "created_at";
    FavoriteScalarFieldEnum["updated_at"] = "updated_at";
})(FavoriteScalarFieldEnum || (exports.FavoriteScalarFieldEnum = FavoriteScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(FavoriteScalarFieldEnum, {
    name: "FavoriteScalarFieldEnum",
    description: undefined,
});
