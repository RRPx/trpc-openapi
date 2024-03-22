"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRankRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserRankWhereInput_1 = require("../inputs/UserRankWhereInput");
let UserRankRelationFilter = exports.UserRankRelationFilter = class UserRankRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRankWhereInput_1.UserRankWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRankWhereInput_1.UserRankWhereInput)
], UserRankRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRankWhereInput_1.UserRankWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRankWhereInput_1.UserRankWhereInput)
], UserRankRelationFilter.prototype, "isNot", void 0);
exports.UserRankRelationFilter = UserRankRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("UserRankRelationFilter", {})
], UserRankRelationFilter);
