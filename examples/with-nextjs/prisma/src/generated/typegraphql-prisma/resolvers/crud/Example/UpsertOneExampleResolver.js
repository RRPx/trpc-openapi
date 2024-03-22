"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneExampleResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneExampleArgs_1 = require("./args/UpsertOneExampleArgs");
const Example_1 = require("../../../models/Example");
const helpers_1 = require("../../../helpers");
let UpsertOneExampleResolver = exports.UpsertOneExampleResolver = class UpsertOneExampleResolver {
    async upsertOneExample(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).example.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Example_1.Example, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneExampleArgs_1.UpsertOneExampleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneExampleResolver.prototype, "upsertOneExample", null);
exports.UpsertOneExampleResolver = UpsertOneExampleResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Example_1.Example)
], UpsertOneExampleResolver);
