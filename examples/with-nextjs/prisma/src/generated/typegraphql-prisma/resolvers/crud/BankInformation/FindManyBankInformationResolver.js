"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyBankInformationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManyBankInformationArgs_1 = require("./args/FindManyBankInformationArgs");
const BankInformation_1 = require("../../../models/BankInformation");
const helpers_1 = require("../../../helpers");
let FindManyBankInformationResolver = exports.FindManyBankInformationResolver = class FindManyBankInformationResolver {
    async bankInformations(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).bankInformation.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], FindManyBankInformationResolver.prototype, "bankInformations", null);
exports.FindManyBankInformationResolver = FindManyBankInformationResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => BankInformation_1.BankInformation)
], FindManyBankInformationResolver);
