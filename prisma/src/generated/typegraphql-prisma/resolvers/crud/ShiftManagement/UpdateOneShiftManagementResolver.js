"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneShiftManagementResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateOneShiftManagementArgs_1 = require("./args/UpdateOneShiftManagementArgs");
const ShiftManagement_1 = require("../../../models/ShiftManagement");
const helpers_1 = require("../../../helpers");
let UpdateOneShiftManagementResolver = class UpdateOneShiftManagementResolver {
    async updateOneShiftManagement(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).shiftManagement.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpdateOneShiftManagementResolver = UpdateOneShiftManagementResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => ShiftManagement_1.ShiftManagement, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneShiftManagementArgs_1.UpdateOneShiftManagementArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneShiftManagementResolver.prototype, "updateOneShiftManagement", null);
exports.UpdateOneShiftManagementResolver = UpdateOneShiftManagementResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ShiftManagement_1.ShiftManagement)
], UpdateOneShiftManagementResolver);
