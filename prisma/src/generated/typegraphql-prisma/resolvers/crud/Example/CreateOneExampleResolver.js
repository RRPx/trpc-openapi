"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneExampleResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateOneExampleArgs_1 = require("./args/CreateOneExampleArgs");
const Example_1 = require("../../../models/Example");
const helpers_1 = require("../../../helpers");
let CreateOneExampleResolver = class CreateOneExampleResolver {
    async createOneExample(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).example.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateOneExampleResolver = CreateOneExampleResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Example_1.Example, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneExampleArgs_1.CreateOneExampleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneExampleResolver.prototype, "createOneExample", null);
exports.CreateOneExampleResolver = CreateOneExampleResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Example_1.Example)
], CreateOneExampleResolver);
