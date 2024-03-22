"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueCastOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueCastOrThrowArgs_1 = require("./args/FindUniqueCastOrThrowArgs");
const Cast_1 = require("../../../models/Cast");
const helpers_1 = require("../../../helpers");
let FindUniqueCastOrThrowResolver = exports.FindUniqueCastOrThrowResolver = class FindUniqueCastOrThrowResolver {
    async getCast(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).cast.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Cast_1.Cast, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueCastOrThrowArgs_1.FindUniqueCastOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueCastOrThrowResolver.prototype, "getCast", null);
exports.FindUniqueCastOrThrowResolver = FindUniqueCastOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Cast_1.Cast)
], FindUniqueCastOrThrowResolver);
