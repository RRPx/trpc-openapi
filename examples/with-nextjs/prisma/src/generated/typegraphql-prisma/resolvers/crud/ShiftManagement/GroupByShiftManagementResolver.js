"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByShiftManagementResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByShiftManagementArgs_1 = require("./args/GroupByShiftManagementArgs");
const ShiftManagement_1 = require("../../../models/ShiftManagement");
const ShiftManagementGroupBy_1 = require("../../outputs/ShiftManagementGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByShiftManagementResolver = exports.GroupByShiftManagementResolver = class GroupByShiftManagementResolver {
    async groupByShiftManagement(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).shiftManagement.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ShiftManagementGroupBy_1.ShiftManagementGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByShiftManagementArgs_1.GroupByShiftManagementArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByShiftManagementResolver.prototype, "groupByShiftManagement", null);
exports.GroupByShiftManagementResolver = GroupByShiftManagementResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ShiftManagement_1.ShiftManagement)
], GroupByShiftManagementResolver);
