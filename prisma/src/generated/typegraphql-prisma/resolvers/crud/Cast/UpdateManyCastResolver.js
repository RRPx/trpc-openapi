"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyCastResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyCastArgs_1 = require("./args/UpdateManyCastArgs");
const Cast_1 = require("../../../models/Cast");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyCastResolver = class UpdateManyCastResolver {
    async updateManyCast(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).cast.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpdateManyCastResolver = UpdateManyCastResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyCastArgs_1.UpdateManyCastArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyCastResolver.prototype, "updateManyCast", null);
exports.UpdateManyCastResolver = UpdateManyCastResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Cast_1.Cast)
], UpdateManyCastResolver);
