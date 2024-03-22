"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRankWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolFilter_1 = require("../inputs/BoolFilter");
const CastListRelationFilter_1 = require("../inputs/CastListRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const IntNullableFilter_1 = require("../inputs/IntNullableFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
const UserRankWhereInput_1 = require("../inputs/UserRankWhereInput");
let UserRankWhereUniqueInput = exports.UserRankWhereUniqueInput = class UserRankWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserRankWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserRankWhereInput_1.UserRankWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserRankWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserRankWhereInput_1.UserRankWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserRankWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserRankWhereInput_1.UserRankWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserRankWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], UserRankWhereUniqueInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntNullableFilter_1.IntNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntNullableFilter_1.IntNullableFilter)
], UserRankWhereUniqueInput.prototype, "basic_fee", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFilter_1.BoolFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFilter_1.BoolFilter)
], UserRankWhereUniqueInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], UserRankWhereUniqueInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], UserRankWhereUniqueInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastListRelationFilter_1.CastListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastListRelationFilter_1.CastListRelationFilter)
], UserRankWhereUniqueInput.prototype, "cast", void 0);
exports.UserRankWhereUniqueInput = UserRankWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserRankWhereUniqueInput", {})
], UserRankWhereUniqueInput);
