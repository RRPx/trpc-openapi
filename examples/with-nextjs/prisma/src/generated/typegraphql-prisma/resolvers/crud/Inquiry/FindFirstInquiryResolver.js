"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstInquiryResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstInquiryArgs_1 = require("./args/FindFirstInquiryArgs");
const Inquiry_1 = require("../../../models/Inquiry");
const helpers_1 = require("../../../helpers");
let FindFirstInquiryResolver = exports.FindFirstInquiryResolver = class FindFirstInquiryResolver {
    async findFirstInquiry(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).inquiry.findFirst({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstInquiryArgs_1.FindFirstInquiryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstInquiryResolver.prototype, "findFirstInquiry", null);
exports.FindFirstInquiryResolver = FindFirstInquiryResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Inquiry_1.Inquiry)
], FindFirstInquiryResolver);
