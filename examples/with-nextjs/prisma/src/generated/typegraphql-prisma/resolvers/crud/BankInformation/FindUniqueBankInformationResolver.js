"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueBankInformationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueBankInformationArgs_1 = require("./args/FindUniqueBankInformationArgs");
const BankInformation_1 = require("../../../models/BankInformation");
const helpers_1 = require("../../../helpers");
let FindUniqueBankInformationResolver = exports.FindUniqueBankInformationResolver = class FindUniqueBankInformationResolver {
    async bankInformation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).bankInformation.findUnique({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueBankInformationArgs_1.FindUniqueBankInformationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueBankInformationResolver.prototype, "bankInformation", null);
exports.FindUniqueBankInformationResolver = FindUniqueBankInformationResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => BankInformation_1.BankInformation)
], FindUniqueBankInformationResolver);
