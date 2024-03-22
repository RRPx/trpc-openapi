"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByBankInformationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByBankInformationArgs_1 = require("./args/GroupByBankInformationArgs");
const BankInformation_1 = require("../../../models/BankInformation");
const BankInformationGroupBy_1 = require("../../outputs/BankInformationGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByBankInformationResolver = exports.GroupByBankInformationResolver = class GroupByBankInformationResolver {
    async groupByBankInformation(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).bankInformation.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
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
], GroupByBankInformationResolver.prototype, "groupByBankInformation", null);
exports.GroupByBankInformationResolver = GroupByBankInformationResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => BankInformation_1.BankInformation)
], GroupByBankInformationResolver);
