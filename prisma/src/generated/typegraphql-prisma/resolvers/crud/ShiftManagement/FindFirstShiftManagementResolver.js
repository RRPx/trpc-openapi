"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstShiftManagementResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstShiftManagementArgs_1 = require("./args/FindFirstShiftManagementArgs");
const ShiftManagement_1 = require("../../../models/ShiftManagement");
const helpers_1 = require("../../../helpers");
let FindFirstShiftManagementResolver = class FindFirstShiftManagementResolver {
    async findFirstShiftManagement(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).shiftManagement.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindFirstShiftManagementResolver = FindFirstShiftManagementResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => ShiftManagement_1.ShiftManagement, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstShiftManagementArgs_1.FindFirstShiftManagementArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstShiftManagementResolver.prototype, "findFirstShiftManagement", null);
exports.FindFirstShiftManagementResolver = FindFirstShiftManagementResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ShiftManagement_1.ShiftManagement)
], FindFirstShiftManagementResolver);
