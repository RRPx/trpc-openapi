"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateInquiry = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InquiryCountAggregate_1 = require("../outputs/InquiryCountAggregate");
const InquiryMaxAggregate_1 = require("../outputs/InquiryMaxAggregate");
const InquiryMinAggregate_1 = require("../outputs/InquiryMinAggregate");
let AggregateInquiry = exports.AggregateInquiry = class AggregateInquiry {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InquiryCountAggregate_1.InquiryCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InquiryCountAggregate_1.InquiryCountAggregate)
], AggregateInquiry.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InquiryMinAggregate_1.InquiryMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InquiryMinAggregate_1.InquiryMinAggregate)
], AggregateInquiry.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InquiryMaxAggregate_1.InquiryMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InquiryMaxAggregate_1.InquiryMaxAggregate)
], AggregateInquiry.prototype, "_max", void 0);
exports.AggregateInquiry = AggregateInquiry = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateInquiry", {})
], AggregateInquiry);
