"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneCastResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateOneCastArgs_1 = require("./args/CreateOneCastArgs");
const Cast_1 = require("../../../models/Cast");
const helpers_1 = require("../../../helpers");
let CreateOneCastResolver = exports.CreateOneCastResolver = class CreateOneCastResolver {
    async createOneCast(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).cast.create({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneCastArgs_1.CreateOneCastArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneCastResolver.prototype, "createOneCast", null);
exports.CreateOneCastResolver = CreateOneCastResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Cast_1.Cast)
], CreateOneCastResolver);
