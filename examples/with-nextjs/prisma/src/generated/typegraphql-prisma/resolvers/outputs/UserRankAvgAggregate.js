"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRankAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let UserRankAvgAggregate = exports.UserRankAvgAggregate = class UserRankAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], UserRankAvgAggregate.prototype, "basic_fee", void 0);
exports.UserRankAvgAggregate = UserRankAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("UserRankAvgAggregate", {})
], UserRankAvgAggregate);
