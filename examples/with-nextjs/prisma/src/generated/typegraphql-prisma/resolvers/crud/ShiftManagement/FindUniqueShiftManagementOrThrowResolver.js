"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueShiftManagementOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueShiftManagementOrThrowArgs_1 = require("./args/FindUniqueShiftManagementOrThrowArgs");
const ShiftManagement_1 = require("../../../models/ShiftManagement");
const helpers_1 = require("../../../helpers");
let FindUniqueShiftManagementOrThrowResolver = exports.FindUniqueShiftManagementOrThrowResolver = class FindUniqueShiftManagementOrThrowResolver {
    async getShiftManagement(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).shiftManagement.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => ShiftManagement_1.ShiftManagement, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueShiftManagementOrThrowArgs_1.FindUniqueShiftManagementOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueShiftManagementOrThrowResolver.prototype, "getShiftManagement", null);
exports.FindUniqueShiftManagementOrThrowResolver = FindUniqueShiftManagementOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ShiftManagement_1.ShiftManagement)
], FindUniqueShiftManagementOrThrowResolver);
