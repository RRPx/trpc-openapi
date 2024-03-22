"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolFilter_1 = require("../inputs/BoolFilter");
const CastRelationFilter_1 = require("../inputs/CastRelationFilter");
const ClientRelationFilter_1 = require("../inputs/ClientRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const EnumApprovalFilter_1 = require("../inputs/EnumApprovalFilter");
const ReviewWhereInput_1 = require("../inputs/ReviewWhereInput");
const StringFilter_1 = require("../inputs/StringFilter");
let ReviewWhereUniqueInput = exports.ReviewWhereUniqueInput = class ReviewWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReviewWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReviewWhereInput_1.ReviewWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReviewWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReviewWhereInput_1.ReviewWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReviewWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReviewWhereInput_1.ReviewWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReviewWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ReviewWhereUniqueInput.prototype, "cast_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ReviewWhereUniqueInput.prototype, "client_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ReviewWhereUniqueInput.prototype, "nick_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ReviewWhereUniqueInput.prototype, "score", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ReviewWhereUniqueInput.prototype, "reviews", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumApprovalFilter_1.EnumApprovalFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumApprovalFilter_1.EnumApprovalFilter)
], ReviewWhereUniqueInput.prototype, "approval", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFilter_1.BoolFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFilter_1.BoolFilter)
], ReviewWhereUniqueInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ReviewWhereUniqueInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastRelationFilter_1.CastRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastRelationFilter_1.CastRelationFilter)
], ReviewWhereUniqueInput.prototype, "cast", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientRelationFilter_1.ClientRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientRelationFilter_1.ClientRelationFilter)
], ReviewWhereUniqueInput.prototype, "client", void 0);
exports.ReviewWhereUniqueInput = ReviewWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReviewWhereUniqueInput", {})
], ReviewWhereUniqueInput);
