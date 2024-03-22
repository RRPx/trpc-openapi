"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneShiftManagementResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneShiftManagementArgs_1 = require("./args/DeleteOneShiftManagementArgs");
const ShiftManagement_1 = require("../../../models/ShiftManagement");
const helpers_1 = require("../../../helpers");
let DeleteOneShiftManagementResolver = exports.DeleteOneShiftManagementResolver = class DeleteOneShiftManagementResolver {
    async deleteOneShiftManagement(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).shiftManagement.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => ShiftManagement_1.ShiftManagement, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneShiftManagementArgs_1.DeleteOneShiftManagementArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneShiftManagementResolver.prototype, "deleteOneShiftManagement", null);
exports.DeleteOneShiftManagementResolver = DeleteOneShiftManagementResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ShiftManagement_1.ShiftManagement)
], DeleteOneShiftManagementResolver);
