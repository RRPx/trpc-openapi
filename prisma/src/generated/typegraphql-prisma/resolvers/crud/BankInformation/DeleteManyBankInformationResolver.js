"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyBankInformationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyBankInformationArgs_1 = require("./args/DeleteManyBankInformationArgs");
const BankInformation_1 = require("../../../models/BankInformation");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyBankInformationResolver = class DeleteManyBankInformationResolver {
    async deleteManyBankInformation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).bankInformation.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.DeleteManyBankInformationResolver = DeleteManyBankInformationResolver;
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
], DeleteManyBankInformationResolver.prototype, "deleteManyBankInformation", null);
exports.DeleteManyBankInformationResolver = DeleteManyBankInformationResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => BankInformation_1.BankInformation)
], DeleteManyBankInformationResolver);
