"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRankSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let UserRankSumAggregate = exports.UserRankSumAggregate = class UserRankSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], UserRankSumAggregate.prototype, "basic_fee", void 0);
exports.UserRankSumAggregate = UserRankSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("UserRankSumAggregate", {})
], UserRankSumAggregate);
