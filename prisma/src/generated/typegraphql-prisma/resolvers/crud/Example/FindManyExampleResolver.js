"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyExampleResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManyExampleArgs_1 = require("./args/FindManyExampleArgs");
const Example_1 = require("../../../models/Example");
const helpers_1 = require("../../../helpers");
let FindManyExampleResolver = class FindManyExampleResolver {
    async examples(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).example.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindManyExampleResolver = FindManyExampleResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Example_1.Example], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyExampleArgs_1.FindManyExampleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyExampleResolver.prototype, "examples", null);
exports.FindManyExampleResolver = FindManyExampleResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Example_1.Example)
], FindManyExampleResolver);
