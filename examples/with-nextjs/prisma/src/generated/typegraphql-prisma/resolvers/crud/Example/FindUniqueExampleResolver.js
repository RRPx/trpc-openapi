"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueExampleResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueExampleArgs_1 = require("./args/FindUniqueExampleArgs");
const Example_1 = require("../../../models/Example");
const helpers_1 = require("../../../helpers");
let FindUniqueExampleResolver = exports.FindUniqueExampleResolver = class FindUniqueExampleResolver {
    async example(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).example.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Example_1.Example, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueExampleArgs_1.FindUniqueExampleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueExampleResolver.prototype, "example", null);
exports.FindUniqueExampleResolver = FindUniqueExampleResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Example_1.Example)
], FindUniqueExampleResolver);
