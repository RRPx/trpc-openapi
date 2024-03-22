"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankInformationRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BankInformation_1 = require("../../../models/BankInformation");
const Cast_1 = require("../../../models/Cast");
const BankInformationCastArgs_1 = require("./args/BankInformationCastArgs");
const helpers_1 = require("../../../helpers");
let BankInformationRelationsResolver = class BankInformationRelationsResolver {
    async cast(bankInformation, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).bankInformation.findUniqueOrThrow({
            where: {
                id: bankInformation.id,
            },
        }).cast({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.BankInformationRelationsResolver = BankInformationRelationsResolver;
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Cast_1.Cast, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [BankInformation_1.BankInformation, Object, Object, BankInformationCastArgs_1.BankInformationCastArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BankInformationRelationsResolver.prototype, "cast", null);
exports.BankInformationRelationsResolver = BankInformationRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => BankInformation_1.BankInformation)
], BankInformationRelationsResolver);
