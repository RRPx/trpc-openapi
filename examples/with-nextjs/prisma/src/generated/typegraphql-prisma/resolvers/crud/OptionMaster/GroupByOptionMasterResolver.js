"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByOptionMasterResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByOptionMasterArgs_1 = require("./args/GroupByOptionMasterArgs");
const OptionMaster_1 = require("../../../models/OptionMaster");
const OptionMasterGroupBy_1 = require("../../outputs/OptionMasterGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByOptionMasterResolver = exports.GroupByOptionMasterResolver = class GroupByOptionMasterResolver {
    async groupByOptionMaster(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).optionMaster.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [OptionMasterGroupBy_1.OptionMasterGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByOptionMasterArgs_1.GroupByOptionMasterArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByOptionMasterResolver.prototype, "groupByOptionMaster", null);
exports.GroupByOptionMasterResolver = GroupByOptionMasterResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => OptionMaster_1.OptionMaster)
], GroupByOptionMasterResolver);
