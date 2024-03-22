"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstCastOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstCastOrThrowArgs_1 = require("./args/FindFirstCastOrThrowArgs");
const Cast_1 = require("../../../models/Cast");
const helpers_1 = require("../../../helpers");
let FindFirstCastOrThrowResolver = exports.FindFirstCastOrThrowResolver = class FindFirstCastOrThrowResolver {
    async findFirstCastOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).cast.findFirstOrThrow({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstCastOrThrowArgs_1.FindFirstCastOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstCastOrThrowResolver.prototype, "findFirstCastOrThrow", null);
exports.FindFirstCastOrThrowResolver = FindFirstCastOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Cast_1.Cast)
], FindFirstCastOrThrowResolver);
