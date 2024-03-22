"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstInquiryOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstInquiryOrThrowArgs_1 = require("./args/FindFirstInquiryOrThrowArgs");
const Inquiry_1 = require("../../../models/Inquiry");
const helpers_1 = require("../../../helpers");
let FindFirstInquiryOrThrowResolver = exports.FindFirstInquiryOrThrowResolver = class FindFirstInquiryOrThrowResolver {
    async findFirstInquiryOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).inquiry.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Inquiry_1.Inquiry, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstInquiryOrThrowArgs_1.FindFirstInquiryOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstInquiryOrThrowResolver.prototype, "findFirstInquiryOrThrow", null);
exports.FindFirstInquiryOrThrowResolver = FindFirstInquiryOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Inquiry_1.Inquiry)
], FindFirstInquiryOrThrowResolver);
