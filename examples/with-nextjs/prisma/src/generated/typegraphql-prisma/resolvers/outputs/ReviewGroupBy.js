"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReviewCountAggregate_1 = require("../outputs/ReviewCountAggregate");
const ReviewMaxAggregate_1 = require("../outputs/ReviewMaxAggregate");
const ReviewMinAggregate_1 = require("../outputs/ReviewMinAggregate");
const Approval_1 = require("../../enums/Approval");
let ReviewGroupBy = exports.ReviewGroupBy = class ReviewGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReviewGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReviewGroupBy.prototype, "cast_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReviewGroupBy.prototype, "client_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReviewGroupBy.prototype, "nick_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReviewGroupBy.prototype, "score", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReviewGroupBy.prototype, "reviews", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Approval_1.Approval, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReviewGroupBy.prototype, "approval", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], ReviewGroupBy.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ReviewGroupBy.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewCountAggregate_1.ReviewCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReviewCountAggregate_1.ReviewCountAggregate)
], ReviewGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewMinAggregate_1.ReviewMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReviewMinAggregate_1.ReviewMinAggregate)
], ReviewGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewMaxAggregate_1.ReviewMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReviewMaxAggregate_1.ReviewMaxAggregate)
], ReviewGroupBy.prototype, "_max", void 0);
exports.ReviewGroupBy = ReviewGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ReviewGroupBy", {})
], ReviewGroupBy);
