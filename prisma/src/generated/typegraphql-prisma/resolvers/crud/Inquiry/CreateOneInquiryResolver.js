"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneInquiryResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateOneInquiryArgs_1 = require("./args/CreateOneInquiryArgs");
const Inquiry_1 = require("../../../models/Inquiry");
const helpers_1 = require("../../../helpers");
let CreateOneInquiryResolver = class CreateOneInquiryResolver {
    async createOneInquiry(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).inquiry.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateOneInquiryResolver = CreateOneInquiryResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Inquiry_1.Inquiry, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneInquiryArgs_1.CreateOneInquiryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneInquiryResolver.prototype, "createOneInquiry", null);
exports.CreateOneInquiryResolver = CreateOneInquiryResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Inquiry_1.Inquiry)
], CreateOneInquiryResolver);
