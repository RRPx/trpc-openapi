"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByInquiryResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByInquiryArgs_1 = require("./args/GroupByInquiryArgs");
const Inquiry_1 = require("../../../models/Inquiry");
const InquiryGroupBy_1 = require("../../outputs/InquiryGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByInquiryResolver = exports.GroupByInquiryResolver = class GroupByInquiryResolver {
    async groupByInquiry(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).inquiry.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [InquiryGroupBy_1.InquiryGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByInquiryArgs_1.GroupByInquiryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByInquiryResolver.prototype, "groupByInquiry", null);
exports.GroupByInquiryResolver = GroupByInquiryResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Inquiry_1.Inquiry)
], GroupByInquiryResolver);
