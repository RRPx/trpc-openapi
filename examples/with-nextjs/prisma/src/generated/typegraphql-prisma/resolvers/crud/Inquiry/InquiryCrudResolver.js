"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InquiryCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateInquiryArgs_1 = require("./args/AggregateInquiryArgs");
const CreateManyInquiryArgs_1 = require("./args/CreateManyInquiryArgs");
const CreateOneInquiryArgs_1 = require("./args/CreateOneInquiryArgs");
const DeleteManyInquiryArgs_1 = require("./args/DeleteManyInquiryArgs");
const DeleteOneInquiryArgs_1 = require("./args/DeleteOneInquiryArgs");
const FindFirstInquiryArgs_1 = require("./args/FindFirstInquiryArgs");
const FindFirstInquiryOrThrowArgs_1 = require("./args/FindFirstInquiryOrThrowArgs");
const FindManyInquiryArgs_1 = require("./args/FindManyInquiryArgs");
const FindUniqueInquiryArgs_1 = require("./args/FindUniqueInquiryArgs");
const FindUniqueInquiryOrThrowArgs_1 = require("./args/FindUniqueInquiryOrThrowArgs");
const GroupByInquiryArgs_1 = require("./args/GroupByInquiryArgs");
const UpdateManyInquiryArgs_1 = require("./args/UpdateManyInquiryArgs");
const UpdateOneInquiryArgs_1 = require("./args/UpdateOneInquiryArgs");
const UpsertOneInquiryArgs_1 = require("./args/UpsertOneInquiryArgs");
const helpers_1 = require("../../../helpers");
const Inquiry_1 = require("../../../models/Inquiry");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateInquiry_1 = require("../../outputs/AggregateInquiry");
const InquiryGroupBy_1 = require("../../outputs/InquiryGroupBy");
let InquiryCrudResolver = exports.InquiryCrudResolver = class InquiryCrudResolver {
    async aggregateInquiry(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).inquiry.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyInquiry(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).inquiry.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneInquiry(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).inquiry.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyInquiry(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).inquiry.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneInquiry(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).inquiry.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstInquiry(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).inquiry.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstInquiryOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).inquiry.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async inquiries(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).inquiry.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async inquiry(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).inquiry.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getInquiry(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).inquiry.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByInquiry(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).inquiry.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyInquiry(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).inquiry.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneInquiry(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).inquiry.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneInquiry(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).inquiry.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
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
], InquiryCrudResolver.prototype, "aggregateInquiry", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyInquiryArgs_1.CreateManyInquiryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InquiryCrudResolver.prototype, "createManyInquiry", null);
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
], InquiryCrudResolver.prototype, "createOneInquiry", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyInquiryArgs_1.DeleteManyInquiryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InquiryCrudResolver.prototype, "deleteManyInquiry", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Inquiry_1.Inquiry, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneInquiryArgs_1.DeleteOneInquiryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InquiryCrudResolver.prototype, "deleteOneInquiry", null);
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
], InquiryCrudResolver.prototype, "findFirstInquiry", null);
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
], InquiryCrudResolver.prototype, "findFirstInquiryOrThrow", null);
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
], InquiryCrudResolver.prototype, "inquiries", null);
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
], InquiryCrudResolver.prototype, "inquiry", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Inquiry_1.Inquiry, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueInquiryOrThrowArgs_1.FindUniqueInquiryOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InquiryCrudResolver.prototype, "getInquiry", null);
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
], InquiryCrudResolver.prototype, "groupByInquiry", null);
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
], InquiryCrudResolver.prototype, "updateManyInquiry", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Inquiry_1.Inquiry, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneInquiryArgs_1.UpdateOneInquiryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InquiryCrudResolver.prototype, "updateOneInquiry", null);
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
], InquiryCrudResolver.prototype, "upsertOneInquiry", null);
exports.InquiryCrudResolver = InquiryCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Inquiry_1.Inquiry)
], InquiryCrudResolver);
