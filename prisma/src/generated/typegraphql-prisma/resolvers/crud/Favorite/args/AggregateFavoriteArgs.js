"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateFavoriteArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FavoriteOrderByWithRelationInput_1 = require("../../../inputs/FavoriteOrderByWithRelationInput");
const FavoriteWhereInput_1 = require("../../../inputs/FavoriteWhereInput");
const FavoriteWhereUniqueInput_1 = require("../../../inputs/FavoriteWhereUniqueInput");
let AggregateFavoriteArgs = class AggregateFavoriteArgs {
};
exports.AggregateFavoriteArgs = AggregateFavoriteArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FavoriteWhereInput_1.FavoriteWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FavoriteWhereInput_1.FavoriteWhereInput)
], AggregateFavoriteArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FavoriteOrderByWithRelationInput_1.FavoriteOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateFavoriteArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FavoriteWhereUniqueInput_1.FavoriteWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FavoriteWhereUniqueInput_1.FavoriteWhereUniqueInput)
], AggregateFavoriteArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateFavoriteArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateFavoriteArgs.prototype, "skip", void 0);
exports.AggregateFavoriteArgs = AggregateFavoriteArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateFavoriteArgs);
