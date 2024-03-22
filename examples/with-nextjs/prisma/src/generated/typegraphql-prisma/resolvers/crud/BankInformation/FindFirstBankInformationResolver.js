"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstBankInformationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstBankInformationArgs_1 = require("./args/FindFirstBankInformationArgs");
const BankInformation_1 = require("../../../models/BankInformation");
const helpers_1 = require("../../../helpers");
let FindFirstBankInformationResolver = exports.FindFirstBankInformationResolver = class FindFirstBankInformationResolver {
    async findFirstBankInformation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).bankInformation.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], FindFirstBankInformationResolver.prototype, "findFirstBankInformation", null);
exports.FindFirstBankInformationResolver = FindFirstBankInformationResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => BankInformation_1.BankInformation)
], FindFirstBankInformationResolver);
