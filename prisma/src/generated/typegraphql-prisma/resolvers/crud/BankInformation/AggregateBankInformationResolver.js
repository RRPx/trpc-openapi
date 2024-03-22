"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateBankInformationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateBankInformationArgs_1 = require("./args/AggregateBankInformationArgs");
const BankInformation_1 = require("../../../models/BankInformation");
const AggregateBankInformation_1 = require("../../outputs/AggregateBankInformation");
const helpers_1 = require("../../../helpers");
let AggregateBankInformationResolver = class AggregateBankInformationResolver {
    async aggregateBankInformation(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).bankInformation.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
exports.AggregateBankInformationResolver = AggregateBankInformationResolver;
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
], AggregateBankInformationResolver.prototype, "aggregateBankInformation", null);
exports.AggregateBankInformationResolver = AggregateBankInformationResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => BankInformation_1.BankInformation)
], AggregateBankInformationResolver);
