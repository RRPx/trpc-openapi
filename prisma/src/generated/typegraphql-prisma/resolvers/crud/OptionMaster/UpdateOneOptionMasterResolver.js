"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneOptionMasterResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateOneOptionMasterArgs_1 = require("./args/UpdateOneOptionMasterArgs");
const OptionMaster_1 = require("../../../models/OptionMaster");
const helpers_1 = require("../../../helpers");
let UpdateOneOptionMasterResolver = class UpdateOneOptionMasterResolver {
    async updateOneOptionMaster(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).optionMaster.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpdateOneOptionMasterResolver = UpdateOneOptionMasterResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => OptionMaster_1.OptionMaster, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneOptionMasterArgs_1.UpdateOneOptionMasterArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneOptionMasterResolver.prototype, "updateOneOptionMaster", null);
exports.UpdateOneOptionMasterResolver = UpdateOneOptionMasterResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => OptionMaster_1.OptionMaster)
], UpdateOneOptionMasterResolver);
