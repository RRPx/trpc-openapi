"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueCastResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueCastArgs_1 = require("./args/FindUniqueCastArgs");
const Cast_1 = require("../../../models/Cast");
const helpers_1 = require("../../../helpers");
let FindUniqueCastResolver = class FindUniqueCastResolver {
    async cast(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).cast.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindUniqueCastResolver = FindUniqueCastResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Cast_1.Cast, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueCastArgs_1.FindUniqueCastArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueCastResolver.prototype, "cast", null);
exports.FindUniqueCastResolver = FindUniqueCastResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Cast_1.Cast)
], FindUniqueCastResolver);
