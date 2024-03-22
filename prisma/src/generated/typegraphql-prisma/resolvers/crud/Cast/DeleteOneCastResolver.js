"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneCastResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneCastArgs_1 = require("./args/DeleteOneCastArgs");
const Cast_1 = require("../../../models/Cast");
const helpers_1 = require("../../../helpers");
let DeleteOneCastResolver = class DeleteOneCastResolver {
    async deleteOneCast(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).cast.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.DeleteOneCastResolver = DeleteOneCastResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Cast_1.Cast, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneCastArgs_1.DeleteOneCastArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneCastResolver.prototype, "deleteOneCast", null);
exports.DeleteOneCastResolver = DeleteOneCastResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Cast_1.Cast)
], DeleteOneCastResolver);
