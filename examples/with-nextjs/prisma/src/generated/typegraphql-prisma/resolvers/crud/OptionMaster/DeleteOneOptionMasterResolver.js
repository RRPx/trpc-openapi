"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneOptionMasterResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneOptionMasterArgs_1 = require("./args/DeleteOneOptionMasterArgs");
const OptionMaster_1 = require("../../../models/OptionMaster");
const helpers_1 = require("../../../helpers");
let DeleteOneOptionMasterResolver = exports.DeleteOneOptionMasterResolver = class DeleteOneOptionMasterResolver {
    async deleteOneOptionMaster(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).optionMaster.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => OptionMaster_1.OptionMaster, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneOptionMasterArgs_1.DeleteOneOptionMasterArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneOptionMasterResolver.prototype, "deleteOneOptionMaster", null);
exports.DeleteOneOptionMasterResolver = DeleteOneOptionMasterResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => OptionMaster_1.OptionMaster)
], DeleteOneOptionMasterResolver);
