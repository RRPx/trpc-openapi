"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneCastResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneCastArgs_1 = require("./args/UpsertOneCastArgs");
const Cast_1 = require("../../../models/Cast");
const helpers_1 = require("../../../helpers");
let UpsertOneCastResolver = exports.UpsertOneCastResolver = class UpsertOneCastResolver {
    async upsertOneCast(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).cast.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Cast_1.Cast, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneCastArgs_1.UpsertOneCastArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneCastResolver.prototype, "upsertOneCast", null);
exports.UpsertOneCastResolver = UpsertOneCastResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Cast_1.Cast)
], UpsertOneCastResolver);
