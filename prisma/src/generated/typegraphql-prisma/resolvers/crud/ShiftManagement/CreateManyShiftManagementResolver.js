"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyShiftManagementResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyShiftManagementArgs_1 = require("./args/CreateManyShiftManagementArgs");
const ShiftManagement_1 = require("../../../models/ShiftManagement");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyShiftManagementResolver = class CreateManyShiftManagementResolver {
    async createManyShiftManagement(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).shiftManagement.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateManyShiftManagementResolver = CreateManyShiftManagementResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyShiftManagementArgs_1.CreateManyShiftManagementArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyShiftManagementResolver.prototype, "createManyShiftManagement", null);
exports.CreateManyShiftManagementResolver = CreateManyShiftManagementResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ShiftManagement_1.ShiftManagement)
], CreateManyShiftManagementResolver);
