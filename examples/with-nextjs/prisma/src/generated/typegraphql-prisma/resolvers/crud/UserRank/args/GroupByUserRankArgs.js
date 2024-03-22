"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByUserRankArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserRankOrderByWithAggregationInput_1 = require("../../../inputs/UserRankOrderByWithAggregationInput");
const UserRankScalarWhereWithAggregatesInput_1 = require("../../../inputs/UserRankScalarWhereWithAggregatesInput");
const UserRankWhereInput_1 = require("../../../inputs/UserRankWhereInput");
const UserRankScalarFieldEnum_1 = require("../../../../enums/UserRankScalarFieldEnum");
let GroupByUserRankArgs = exports.GroupByUserRankArgs = class GroupByUserRankArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRankWhereInput_1.UserRankWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRankWhereInput_1.UserRankWhereInput)
], GroupByUserRankArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserRankOrderByWithAggregationInput_1.UserRankOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByUserRankArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserRankScalarFieldEnum_1.UserRankScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByUserRankArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRankScalarWhereWithAggregatesInput_1.UserRankScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRankScalarWhereWithAggregatesInput_1.UserRankScalarWhereWithAggregatesInput)
], GroupByUserRankArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByUserRankArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByUserRankArgs.prototype, "skip", void 0);
exports.GroupByUserRankArgs = GroupByUserRankArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByUserRankArgs);
