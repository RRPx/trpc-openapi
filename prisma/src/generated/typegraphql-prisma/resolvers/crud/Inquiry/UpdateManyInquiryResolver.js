"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyInquiryResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyInquiryArgs_1 = require("./args/UpdateManyInquiryArgs");
const Inquiry_1 = require("../../../models/Inquiry");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyInquiryResolver = class UpdateManyInquiryResolver {
    async updateManyInquiry(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).inquiry.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpdateManyInquiryResolver = UpdateManyInquiryResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyInquiryArgs_1.UpdateManyInquiryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyInquiryResolver.prototype, "updateManyInquiry", null);
exports.UpdateManyInquiryResolver = UpdateManyInquiryResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Inquiry_1.Inquiry)
], UpdateManyInquiryResolver);
