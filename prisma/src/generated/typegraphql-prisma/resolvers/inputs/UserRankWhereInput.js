"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRankWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolFilter_1 = require("../inputs/BoolFilter");
const CastListRelationFilter_1 = require("../inputs/CastListRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const IntNullableFilter_1 = require("../inputs/IntNullableFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let UserRankWhereInput = class UserRankWhereInput {
};
exports.UserRankWhereInput = UserRankWhereInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserRankWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserRankWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserRankWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserRankWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserRankWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserRankWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], UserRankWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], UserRankWhereInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntNullableFilter_1.IntNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntNullableFilter_1.IntNullableFilter)
], UserRankWhereInput.prototype, "basic_fee", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFilter_1.BoolFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFilter_1.BoolFilter)
], UserRankWhereInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], UserRankWhereInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], UserRankWhereInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastListRelationFilter_1.CastListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastListRelationFilter_1.CastListRelationFilter)
], UserRankWhereInput.prototype, "cast", void 0);
exports.UserRankWhereInput = UserRankWhereInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserRankWhereInput", {})
], UserRankWhereInput);
