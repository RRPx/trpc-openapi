"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyExampleResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyExampleArgs_1 = require("./args/UpdateManyExampleArgs");
const Example_1 = require("../../../models/Example");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyExampleResolver = class UpdateManyExampleResolver {
    async updateManyExample(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).example.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpdateManyExampleResolver = UpdateManyExampleResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyExampleArgs_1.UpdateManyExampleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyExampleResolver.prototype, "updateManyExample", null);
exports.UpdateManyExampleResolver = UpdateManyExampleResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Example_1.Example)
], UpdateManyExampleResolver);
