"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueBankInformationOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueBankInformationOrThrowArgs_1 = require("./args/FindUniqueBankInformationOrThrowArgs");
const BankInformation_1 = require("../../../models/BankInformation");
const helpers_1 = require("../../../helpers");
let FindUniqueBankInformationOrThrowResolver = class FindUniqueBankInformationOrThrowResolver {
    async getBankInformation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).bankInformation.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindUniqueBankInformationOrThrowResolver = FindUniqueBankInformationOrThrowResolver;
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
], FindUniqueBankInformationOrThrowResolver.prototype, "getBankInformation", null);
exports.FindUniqueBankInformationOrThrowResolver = FindUniqueBankInformationOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => BankInformation_1.BankInformation)
], FindUniqueBankInformationOrThrowResolver);
