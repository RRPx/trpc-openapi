"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstShiftManagementOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstShiftManagementOrThrowArgs_1 = require("./args/FindFirstShiftManagementOrThrowArgs");
const ShiftManagement_1 = require("../../../models/ShiftManagement");
const helpers_1 = require("../../../helpers");
let FindFirstShiftManagementOrThrowResolver = class FindFirstShiftManagementOrThrowResolver {
    async findFirstShiftManagementOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).shiftManagement.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindFirstShiftManagementOrThrowResolver = FindFirstShiftManagementOrThrowResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => ShiftManagement_1.ShiftManagement, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstShiftManagementOrThrowArgs_1.FindFirstShiftManagementOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstShiftManagementOrThrowResolver.prototype, "findFirstShiftManagementOrThrow", null);
exports.FindFirstShiftManagementOrThrowResolver = FindFirstShiftManagementOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ShiftManagement_1.ShiftManagement)
], FindFirstShiftManagementOrThrowResolver);
