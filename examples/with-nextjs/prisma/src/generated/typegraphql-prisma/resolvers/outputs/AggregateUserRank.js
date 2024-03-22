"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateUserRank = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserRankAvgAggregate_1 = require("../outputs/UserRankAvgAggregate");
const UserRankCountAggregate_1 = require("../outputs/UserRankCountAggregate");
const UserRankMaxAggregate_1 = require("../outputs/UserRankMaxAggregate");
const UserRankMinAggregate_1 = require("../outputs/UserRankMinAggregate");
const UserRankSumAggregate_1 = require("../outputs/UserRankSumAggregate");
let AggregateUserRank = exports.AggregateUserRank = class AggregateUserRank {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRankCountAggregate_1.UserRankCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRankCountAggregate_1.UserRankCountAggregate)
], AggregateUserRank.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRankAvgAggregate_1.UserRankAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRankAvgAggregate_1.UserRankAvgAggregate)
], AggregateUserRank.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRankSumAggregate_1.UserRankSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRankSumAggregate_1.UserRankSumAggregate)
], AggregateUserRank.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRankMinAggregate_1.UserRankMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRankMinAggregate_1.UserRankMinAggregate)
], AggregateUserRank.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRankMaxAggregate_1.UserRankMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRankMaxAggregate_1.UserRankMaxAggregate)
], AggregateUserRank.prototype, "_max", void 0);
exports.AggregateUserRank = AggregateUserRank = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateUserRank", {})
], AggregateUserRank);
