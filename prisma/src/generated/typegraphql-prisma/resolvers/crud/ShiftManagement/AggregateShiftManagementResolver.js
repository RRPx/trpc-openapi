"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateShiftManagementResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateShiftManagementArgs_1 = require("./args/AggregateShiftManagementArgs");
const ShiftManagement_1 = require("../../../models/ShiftManagement");
const AggregateShiftManagement_1 = require("../../outputs/AggregateShiftManagement");
const helpers_1 = require("../../../helpers");
let AggregateShiftManagementResolver = class AggregateShiftManagementResolver {
    async aggregateShiftManagement(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).shiftManagement.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
exports.AggregateShiftManagementResolver = AggregateShiftManagementResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateShiftManagement_1.AggregateShiftManagement, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateShiftManagementArgs_1.AggregateShiftManagementArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateShiftManagementResolver.prototype, "aggregateShiftManagement", null);
exports.AggregateShiftManagementResolver = AggregateShiftManagementResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ShiftManagement_1.ShiftManagement)
], AggregateShiftManagementResolver);
