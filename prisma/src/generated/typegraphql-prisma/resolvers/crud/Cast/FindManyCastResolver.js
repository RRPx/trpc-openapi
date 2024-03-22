"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyCastResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManyCastArgs_1 = require("./args/FindManyCastArgs");
const Cast_1 = require("../../../models/Cast");
const helpers_1 = require("../../../helpers");
let FindManyCastResolver = class FindManyCastResolver {
    async casts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).cast.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindManyCastResolver = FindManyCastResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Cast_1.Cast], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyCastArgs_1.FindManyCastArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyCastResolver.prototype, "casts", null);
exports.FindManyCastResolver = FindManyCastResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Cast_1.Cast)
], FindManyCastResolver);
