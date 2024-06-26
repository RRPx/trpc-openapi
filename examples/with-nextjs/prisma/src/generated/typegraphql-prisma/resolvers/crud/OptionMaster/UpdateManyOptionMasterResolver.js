"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyOptionMasterResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyOptionMasterArgs_1 = require("./args/UpdateManyOptionMasterArgs");
const OptionMaster_1 = require("../../../models/OptionMaster");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyOptionMasterResolver = exports.UpdateManyOptionMasterResolver = class UpdateManyOptionMasterResolver {
    async updateManyOptionMaster(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).optionMaster.updateMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyOptionMasterArgs_1.UpdateManyOptionMasterArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyOptionMasterResolver.prototype, "updateManyOptionMaster", null);
exports.UpdateManyOptionMasterResolver = UpdateManyOptionMasterResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => OptionMaster_1.OptionMaster)
], UpdateManyOptionMasterResolver);
