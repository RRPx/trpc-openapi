"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstExampleOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstExampleOrThrowArgs_1 = require("./args/FindFirstExampleOrThrowArgs");
const Example_1 = require("../../../models/Example");
const helpers_1 = require("../../../helpers");
let FindFirstExampleOrThrowResolver = class FindFirstExampleOrThrowResolver {
    async findFirstExampleOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).example.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindFirstExampleOrThrowResolver = FindFirstExampleOrThrowResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Example_1.Example, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstExampleOrThrowArgs_1.FindFirstExampleOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstExampleOrThrowResolver.prototype, "findFirstExampleOrThrow", null);
exports.FindFirstExampleOrThrowResolver = FindFirstExampleOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Example_1.Example)
], FindFirstExampleOrThrowResolver);
