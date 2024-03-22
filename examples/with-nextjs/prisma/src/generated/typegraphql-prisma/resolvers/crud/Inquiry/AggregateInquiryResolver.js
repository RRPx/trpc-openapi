"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateInquiryResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateInquiryArgs_1 = require("./args/AggregateInquiryArgs");
const Inquiry_1 = require("../../../models/Inquiry");
const AggregateInquiry_1 = require("../../outputs/AggregateInquiry");
const helpers_1 = require("../../../helpers");
let AggregateInquiryResolver = exports.AggregateInquiryResolver = class AggregateInquiryResolver {
    async aggregateInquiry(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).inquiry.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateInquiry_1.AggregateInquiry, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateInquiryArgs_1.AggregateInquiryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateInquiryResolver.prototype, "aggregateInquiry", null);
exports.AggregateInquiryResolver = AggregateInquiryResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Inquiry_1.Inquiry)
], AggregateInquiryResolver);
