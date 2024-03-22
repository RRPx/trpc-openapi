"use strict";
var ReviewWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolFilter_1 = require("../inputs/BoolFilter");
const CastRelationFilter_1 = require("../inputs/CastRelationFilter");
const ClientRelationFilter_1 = require("../inputs/ClientRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const EnumApprovalFilter_1 = require("../inputs/EnumApprovalFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let ReviewWhereInput = exports.ReviewWhereInput = ReviewWhereInput_1 = class ReviewWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReviewWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReviewWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReviewWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReviewWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReviewWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReviewWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ReviewWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ReviewWhereInput.prototype, "cast_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ReviewWhereInput.prototype, "client_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ReviewWhereInput.prototype, "nick_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ReviewWhereInput.prototype, "score", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ReviewWhereInput.prototype, "reviews", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumApprovalFilter_1.EnumApprovalFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumApprovalFilter_1.EnumApprovalFilter)
], ReviewWhereInput.prototype, "approval", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFilter_1.BoolFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFilter_1.BoolFilter)
], ReviewWhereInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ReviewWhereInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastRelationFilter_1.CastRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastRelationFilter_1.CastRelationFilter)
], ReviewWhereInput.prototype, "cast", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientRelationFilter_1.ClientRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientRelationFilter_1.ClientRelationFilter)
], ReviewWhereInput.prototype, "client", void 0);
exports.ReviewWhereInput = ReviewWhereInput = ReviewWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("ReviewWhereInput", {})
], ReviewWhereInput);
