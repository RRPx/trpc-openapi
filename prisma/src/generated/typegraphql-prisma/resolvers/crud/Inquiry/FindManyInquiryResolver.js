"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyInquiryResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManyInquiryArgs_1 = require("./args/FindManyInquiryArgs");
const Inquiry_1 = require("../../../models/Inquiry");
const helpers_1 = require("../../../helpers");
let FindManyInquiryResolver = class FindManyInquiryResolver {
    async inquiries(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).inquiry.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindManyInquiryResolver = FindManyInquiryResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Inquiry_1.Inquiry], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyInquiryArgs_1.FindManyInquiryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyInquiryResolver.prototype, "inquiries", null);
exports.FindManyInquiryResolver = FindManyInquiryResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Inquiry_1.Inquiry)
], FindManyInquiryResolver);
