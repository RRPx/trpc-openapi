"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankInformationCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateBankInformationArgs_1 = require("./args/AggregateBankInformationArgs");
const CreateManyBankInformationArgs_1 = require("./args/CreateManyBankInformationArgs");
const CreateOneBankInformationArgs_1 = require("./args/CreateOneBankInformationArgs");
const DeleteManyBankInformationArgs_1 = require("./args/DeleteManyBankInformationArgs");
const DeleteOneBankInformationArgs_1 = require("./args/DeleteOneBankInformationArgs");
const FindFirstBankInformationArgs_1 = require("./args/FindFirstBankInformationArgs");
const FindFirstBankInformationOrThrowArgs_1 = require("./args/FindFirstBankInformationOrThrowArgs");
const FindManyBankInformationArgs_1 = require("./args/FindManyBankInformationArgs");
const FindUniqueBankInformationArgs_1 = require("./args/FindUniqueBankInformationArgs");
const FindUniqueBankInformationOrThrowArgs_1 = require("./args/FindUniqueBankInformationOrThrowArgs");
const GroupByBankInformationArgs_1 = require("./args/GroupByBankInformationArgs");
const UpdateManyBankInformationArgs_1 = require("./args/UpdateManyBankInformationArgs");
const UpdateOneBankInformationArgs_1 = require("./args/UpdateOneBankInformationArgs");
const UpsertOneBankInformationArgs_1 = require("./args/UpsertOneBankInformationArgs");
const helpers_1 = require("../../../helpers");
const BankInformation_1 = require("../../../models/BankInformation");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateBankInformation_1 = require("../../outputs/AggregateBankInformation");
const BankInformationGroupBy_1 = require("../../outputs/BankInformationGroupBy");
let BankInformationCrudResolver = exports.BankInformationCrudResolver = class BankInformationCrudResolver {
    async aggregateBankInformation(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).bankInformation.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyBankInformation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).bankInformation.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneBankInformation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).bankInformation.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyBankInformation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).bankInformation.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneBankInformation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).bankInformation.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstBankInformation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).bankInformation.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstBankInformationOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).bankInformation.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async bankInformations(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).bankInformation.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async bankInformation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).bankInformation.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getBankInformation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).bankInformation.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByBankInformation(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).bankInformation.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyBankInformation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).bankInformation.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneBankInformation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).bankInformation.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneBankInformation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).bankInformation.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateBankInformation_1.AggregateBankInformation, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateBankInformationArgs_1.AggregateBankInformationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BankInformationCrudResolver.prototype, "aggregateBankInformation", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyBankInformationArgs_1.CreateManyBankInformationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BankInformationCrudResolver.prototype, "createManyBankInformation", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => BankInformation_1.BankInformation, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneBankInformationArgs_1.CreateOneBankInformationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BankInformationCrudResolver.prototype, "createOneBankInformation", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyBankInformationArgs_1.DeleteManyBankInformationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BankInformationCrudResolver.prototype, "deleteManyBankInformation", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => BankInformation_1.BankInformation, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneBankInformationArgs_1.DeleteOneBankInformationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BankInformationCrudResolver.prototype, "deleteOneBankInformation", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => BankInformation_1.BankInformation, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstBankInformationArgs_1.FindFirstBankInformationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BankInformationCrudResolver.prototype, "findFirstBankInformation", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => BankInformation_1.BankInformation, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstBankInformationOrThrowArgs_1.FindFirstBankInformationOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BankInformationCrudResolver.prototype, "findFirstBankInformationOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [BankInformation_1.BankInformation], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyBankInformationArgs_1.FindManyBankInformationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BankInformationCrudResolver.prototype, "bankInformations", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => BankInformation_1.BankInformation, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueBankInformationArgs_1.FindUniqueBankInformationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BankInformationCrudResolver.prototype, "bankInformation", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => BankInformation_1.BankInformation, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueBankInformationOrThrowArgs_1.FindUniqueBankInformationOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BankInformationCrudResolver.prototype, "getBankInformation", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [BankInformationGroupBy_1.BankInformationGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByBankInformationArgs_1.GroupByBankInformationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BankInformationCrudResolver.prototype, "groupByBankInformation", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyBankInformationArgs_1.UpdateManyBankInformationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BankInformationCrudResolver.prototype, "updateManyBankInformation", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => BankInformation_1.BankInformation, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneBankInformationArgs_1.UpdateOneBankInformationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BankInformationCrudResolver.prototype, "updateOneBankInformation", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => BankInformation_1.BankInformation, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneBankInformationArgs_1.UpsertOneBankInformationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BankInformationCrudResolver.prototype, "upsertOneBankInformation", null);
exports.BankInformationCrudResolver = BankInformationCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => BankInformation_1.BankInformation)
], BankInformationCrudResolver);
