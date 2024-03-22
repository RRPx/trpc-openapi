"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyShiftManagementResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyShiftManagementArgs_1 = require("./args/UpdateManyShiftManagementArgs");
const ShiftManagement_1 = require("../../../models/ShiftManagement");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyShiftManagementResolver = exports.UpdateManyShiftManagementResolver = class UpdateManyShiftManagementResolver {
    async updateManyShiftManagement(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).shiftManagement.updateMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyShiftManagementArgs_1.UpdateManyShiftManagementArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyShiftManagementResolver.prototype, "updateManyShiftManagement", null);
exports.UpdateManyShiftManagementResolver = UpdateManyShiftManagementResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ShiftManagement_1.ShiftManagement)
], UpdateManyShiftManagementResolver);
