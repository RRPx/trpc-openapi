"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyCastResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyCastArgs_1 = require("./args/DeleteManyCastArgs");
const Cast_1 = require("../../../models/Cast");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyCastResolver = exports.DeleteManyCastResolver = class DeleteManyCastResolver {
    async deleteManyCast(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).cast.deleteMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyCastArgs_1.DeleteManyCastArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyCastResolver.prototype, "deleteManyCast", null);
exports.DeleteManyCastResolver = DeleteManyCastResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Cast_1.Cast)
], DeleteManyCastResolver);
