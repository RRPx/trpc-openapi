"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneInquiryResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneInquiryArgs_1 = require("./args/UpsertOneInquiryArgs");
const Inquiry_1 = require("../../../models/Inquiry");
const helpers_1 = require("../../../helpers");
let UpsertOneInquiryResolver = class UpsertOneInquiryResolver {
    async upsertOneInquiry(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).inquiry.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpsertOneInquiryResolver = UpsertOneInquiryResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Inquiry_1.Inquiry, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneInquiryArgs_1.UpsertOneInquiryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneInquiryResolver.prototype, "upsertOneInquiry", null);
exports.UpsertOneInquiryResolver = UpsertOneInquiryResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Inquiry_1.Inquiry)
], UpsertOneInquiryResolver);
