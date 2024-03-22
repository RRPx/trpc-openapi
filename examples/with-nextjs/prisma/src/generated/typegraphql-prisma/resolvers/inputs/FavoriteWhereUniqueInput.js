"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoriteWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolFilter_1 = require("../inputs/BoolFilter");
const CastNullableRelationFilter_1 = require("../inputs/CastNullableRelationFilter");
const ClientNullableRelationFilter_1 = require("../inputs/ClientNullableRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const FavoriteWhereInput_1 = require("../inputs/FavoriteWhereInput");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let FavoriteWhereUniqueInput = exports.FavoriteWhereUniqueInput = class FavoriteWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FavoriteWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FavoriteWhereInput_1.FavoriteWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FavoriteWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FavoriteWhereInput_1.FavoriteWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FavoriteWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FavoriteWhereInput_1.FavoriteWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FavoriteWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], FavoriteWhereUniqueInput.prototype, "client_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], FavoriteWhereUniqueInput.prototype, "cast_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFilter_1.BoolFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFilter_1.BoolFilter)
], FavoriteWhereUniqueInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], FavoriteWhereUniqueInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], FavoriteWhereUniqueInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientNullableRelationFilter_1.ClientNullableRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientNullableRelationFilter_1.ClientNullableRelationFilter)
], FavoriteWhereUniqueInput.prototype, "client", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastNullableRelationFilter_1.CastNullableRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastNullableRelationFilter_1.CastNullableRelationFilter)
], FavoriteWhereUniqueInput.prototype, "cast", void 0);
exports.FavoriteWhereUniqueInput = FavoriteWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FavoriteWhereUniqueInput", {})
], FavoriteWhereUniqueInput);
