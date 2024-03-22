"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyShiftManagementResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyShiftManagementArgs_1 = require("./args/DeleteManyShiftManagementArgs");
const ShiftManagement_1 = require("../../../models/ShiftManagement");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyShiftManagementResolver = exports.DeleteManyShiftManagementResolver = class DeleteManyShiftManagementResolver {
    async deleteManyShiftManagement(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).shiftManagement.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyShiftManagementArgs_1.DeleteManyShiftManagementArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyShiftManagementResolver.prototype, "deleteManyShiftManagement", null);
exports.DeleteManyShiftManagementResolver = DeleteManyShiftManagementResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ShiftManagement_1.ShiftManagement)
], DeleteManyShiftManagementResolver);
