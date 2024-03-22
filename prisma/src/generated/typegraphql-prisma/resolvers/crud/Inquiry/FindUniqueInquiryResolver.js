"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueInquiryResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueInquiryArgs_1 = require("./args/FindUniqueInquiryArgs");
const Inquiry_1 = require("../../../models/Inquiry");
const helpers_1 = require("../../../helpers");
let FindUniqueInquiryResolver = class FindUniqueInquiryResolver {
    async inquiry(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).inquiry.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindUniqueInquiryResolver = FindUniqueInquiryResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Inquiry_1.Inquiry, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueInquiryArgs_1.FindUniqueInquiryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueInquiryResolver.prototype, "inquiry", null);
exports.FindUniqueInquiryResolver = FindUniqueInquiryResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Inquiry_1.Inquiry)
], FindUniqueInquiryResolver);
