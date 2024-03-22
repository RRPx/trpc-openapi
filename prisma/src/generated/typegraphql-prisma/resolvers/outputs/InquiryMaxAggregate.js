"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InquiryMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InquirerRole_1 = require("../../enums/InquirerRole");
let InquiryMaxAggregate = class InquiryMaxAggregate {
};
exports.InquiryMaxAggregate = InquiryMaxAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InquiryMaxAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InquiryMaxAggregate.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InquiryMaxAggregate.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InquiryMaxAggregate.prototype, "token", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InquiryMaxAggregate.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InquiryMaxAggregate.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], InquiryMaxAggregate.prototype, "is_seen", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InquirerRole_1.InquirerRole, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InquiryMaxAggregate.prototype, "inquirerRole", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], InquiryMaxAggregate.prototype, "created_at", void 0);
exports.InquiryMaxAggregate = InquiryMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("InquiryMaxAggregate", {})
], InquiryMaxAggregate);
