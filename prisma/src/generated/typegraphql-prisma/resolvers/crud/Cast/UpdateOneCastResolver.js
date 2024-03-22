"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneCastResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateOneCastArgs_1 = require("./args/UpdateOneCastArgs");
const Cast_1 = require("../../../models/Cast");
const helpers_1 = require("../../../helpers");
let UpdateOneCastResolver = class UpdateOneCastResolver {
    async updateOneCast(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).cast.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpdateOneCastResolver = UpdateOneCastResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Cast_1.Cast, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneCastArgs_1.UpdateOneCastArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneCastResolver.prototype, "updateOneCast", null);
exports.UpdateOneCastResolver = UpdateOneCastResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Cast_1.Cast)
], UpdateOneCastResolver);
