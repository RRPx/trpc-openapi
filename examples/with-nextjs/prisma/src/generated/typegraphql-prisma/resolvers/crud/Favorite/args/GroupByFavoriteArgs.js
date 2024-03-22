"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByFavoriteArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FavoriteOrderByWithAggregationInput_1 = require("../../../inputs/FavoriteOrderByWithAggregationInput");
const FavoriteScalarWhereWithAggregatesInput_1 = require("../../../inputs/FavoriteScalarWhereWithAggregatesInput");
const FavoriteWhereInput_1 = require("../../../inputs/FavoriteWhereInput");
const FavoriteScalarFieldEnum_1 = require("../../../../enums/FavoriteScalarFieldEnum");
let GroupByFavoriteArgs = exports.GroupByFavoriteArgs = class GroupByFavoriteArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FavoriteWhereInput_1.FavoriteWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FavoriteWhereInput_1.FavoriteWhereInput)
], GroupByFavoriteArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FavoriteOrderByWithAggregationInput_1.FavoriteOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByFavoriteArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FavoriteScalarFieldEnum_1.FavoriteScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByFavoriteArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FavoriteScalarWhereWithAggregatesInput_1.FavoriteScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FavoriteScalarWhereWithAggregatesInput_1.FavoriteScalarWhereWithAggregatesInput)
], GroupByFavoriteArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByFavoriteArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByFavoriteArgs.prototype, "skip", void 0);
exports.GroupByFavoriteArgs = GroupByFavoriteArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByFavoriteArgs);
