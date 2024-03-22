"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InquiryGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InquiryCountAggregate_1 = require("../outputs/InquiryCountAggregate");
const InquiryMaxAggregate_1 = require("../outputs/InquiryMaxAggregate");
const InquiryMinAggregate_1 = require("../outputs/InquiryMinAggregate");
const InquirerRole_1 = require("../../enums/InquirerRole");
let InquiryGroupBy = exports.InquiryGroupBy = class InquiryGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], InquiryGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], InquiryGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], InquiryGroupBy.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], InquiryGroupBy.prototype, "token", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], InquiryGroupBy.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], InquiryGroupBy.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], InquiryGroupBy.prototype, "is_seen", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InquirerRole_1.InquirerRole, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], InquiryGroupBy.prototype, "inquirerRole", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], InquiryGroupBy.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InquiryCountAggregate_1.InquiryCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InquiryCountAggregate_1.InquiryCountAggregate)
], InquiryGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InquiryMinAggregate_1.InquiryMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InquiryMinAggregate_1.InquiryMinAggregate)
], InquiryGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InquiryMaxAggregate_1.InquiryMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InquiryMaxAggregate_1.InquiryMaxAggregate)
], InquiryGroupBy.prototype, "_max", void 0);
exports.InquiryGroupBy = InquiryGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("InquiryGroupBy", {})
], InquiryGroupBy);
