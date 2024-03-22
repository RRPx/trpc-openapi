"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRankGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserRankAvgAggregate_1 = require("../outputs/UserRankAvgAggregate");
const UserRankCountAggregate_1 = require("../outputs/UserRankCountAggregate");
const UserRankMaxAggregate_1 = require("../outputs/UserRankMaxAggregate");
const UserRankMinAggregate_1 = require("../outputs/UserRankMinAggregate");
const UserRankSumAggregate_1 = require("../outputs/UserRankSumAggregate");
let UserRankGroupBy = class UserRankGroupBy {
};
exports.UserRankGroupBy = UserRankGroupBy;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserRankGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserRankGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], UserRankGroupBy.prototype, "basic_fee", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], UserRankGroupBy.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], UserRankGroupBy.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], UserRankGroupBy.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRankCountAggregate_1.UserRankCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRankCountAggregate_1.UserRankCountAggregate)
], UserRankGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRankAvgAggregate_1.UserRankAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRankAvgAggregate_1.UserRankAvgAggregate)
], UserRankGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRankSumAggregate_1.UserRankSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRankSumAggregate_1.UserRankSumAggregate)
], UserRankGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRankMinAggregate_1.UserRankMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRankMinAggregate_1.UserRankMinAggregate)
], UserRankGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRankMaxAggregate_1.UserRankMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRankMaxAggregate_1.UserRankMaxAggregate)
], UserRankGroupBy.prototype, "_max", void 0);
exports.UserRankGroupBy = UserRankGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("UserRankGroupBy", {})
], UserRankGroupBy);
