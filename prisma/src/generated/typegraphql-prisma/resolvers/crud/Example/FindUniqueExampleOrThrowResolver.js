"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueExampleOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueExampleOrThrowArgs_1 = require("./args/FindUniqueExampleOrThrowArgs");
const Example_1 = require("../../../models/Example");
const helpers_1 = require("../../../helpers");
let FindUniqueExampleOrThrowResolver = class FindUniqueExampleOrThrowResolver {
    async getExample(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).example.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindUniqueExampleOrThrowResolver = FindUniqueExampleOrThrowResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Example_1.Example, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueExampleOrThrowArgs_1.FindUniqueExampleOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueExampleOrThrowResolver.prototype, "getExample", null);
exports.FindUniqueExampleOrThrowResolver = FindUniqueExampleOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Example_1.Example)
], FindUniqueExampleOrThrowResolver);
