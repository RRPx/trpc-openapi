"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyBankInformationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyBankInformationArgs_1 = require("./args/CreateManyBankInformationArgs");
const BankInformation_1 = require("../../../models/BankInformation");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyBankInformationResolver = class CreateManyBankInformationResolver {
    async createManyBankInformation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).bankInformation.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateManyBankInformationResolver = CreateManyBankInformationResolver;
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
], CreateManyBankInformationResolver.prototype, "createManyBankInformation", null);
exports.CreateManyBankInformationResolver = CreateManyBankInformationResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => BankInformation_1.BankInformation)
], CreateManyBankInformationResolver);
