"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneExampleResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateOneExampleArgs_1 = require("./args/UpdateOneExampleArgs");
const Example_1 = require("../../../models/Example");
const helpers_1 = require("../../../helpers");
let UpdateOneExampleResolver = exports.UpdateOneExampleResolver = class UpdateOneExampleResolver {
    async updateOneExample(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).example.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Example_1.Example, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneExampleArgs_1.UpdateOneExampleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneExampleResolver.prototype, "updateOneExample", null);
exports.UpdateOneExampleResolver = UpdateOneExampleResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Example_1.Example)
], UpdateOneExampleResolver);
