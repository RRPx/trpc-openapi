"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastFavoriteArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FavoriteOrderByWithRelationInput_1 = require("../../../inputs/FavoriteOrderByWithRelationInput");
const FavoriteWhereInput_1 = require("../../../inputs/FavoriteWhereInput");
const FavoriteWhereUniqueInput_1 = require("../../../inputs/FavoriteWhereUniqueInput");
const FavoriteScalarFieldEnum_1 = require("../../../../enums/FavoriteScalarFieldEnum");
let CastFavoriteArgs = exports.CastFavoriteArgs = class CastFavoriteArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FavoriteWhereInput_1.FavoriteWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FavoriteWhereInput_1.FavoriteWhereInput)
], CastFavoriteArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FavoriteOrderByWithRelationInput_1.FavoriteOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CastFavoriteArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FavoriteWhereUniqueInput_1.FavoriteWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FavoriteWhereUniqueInput_1.FavoriteWhereUniqueInput)
], CastFavoriteArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CastFavoriteArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CastFavoriteArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FavoriteScalarFieldEnum_1.FavoriteScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CastFavoriteArgs.prototype, "distinct", void 0);
exports.CastFavoriteArgs = CastFavoriteArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CastFavoriteArgs);
