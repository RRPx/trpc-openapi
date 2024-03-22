"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyOptionMasterResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyOptionMasterArgs_1 = require("./args/DeleteManyOptionMasterArgs");
const OptionMaster_1 = require("../../../models/OptionMaster");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyOptionMasterResolver = class DeleteManyOptionMasterResolver {
    async deleteManyOptionMaster(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).optionMaster.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.DeleteManyOptionMasterResolver = DeleteManyOptionMasterResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyOptionMasterArgs_1.DeleteManyOptionMasterArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyOptionMasterResolver.prototype, "deleteManyOptionMaster", null);
exports.DeleteManyOptionMasterResolver = DeleteManyOptionMasterResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => OptionMaster_1.OptionMaster)
], DeleteManyOptionMasterResolver);
