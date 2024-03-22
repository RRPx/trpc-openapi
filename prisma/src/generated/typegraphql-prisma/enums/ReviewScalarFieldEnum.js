"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var ReviewScalarFieldEnum;
(function (ReviewScalarFieldEnum) {
    ReviewScalarFieldEnum["id"] = "id";
    ReviewScalarFieldEnum["cast_id"] = "cast_id";
    ReviewScalarFieldEnum["client_id"] = "client_id";
    ReviewScalarFieldEnum["nick_name"] = "nick_name";
    ReviewScalarFieldEnum["score"] = "score";
    ReviewScalarFieldEnum["reviews"] = "reviews";
    ReviewScalarFieldEnum["approval"] = "approval";
    ReviewScalarFieldEnum["is_display"] = "is_display";
    ReviewScalarFieldEnum["created_at"] = "created_at";
})(ReviewScalarFieldEnum || (exports.ReviewScalarFieldEnum = ReviewScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(ReviewScalarFieldEnum, {
    name: "ReviewScalarFieldEnum",
    description: undefined,
});
