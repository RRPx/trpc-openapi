"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyExampleResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyExampleArgs_1 = require("./args/DeleteManyExampleArgs");
const Example_1 = require("../../../models/Example");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyExampleResolver = exports.DeleteManyExampleResolver = class DeleteManyExampleResolver {
    async deleteManyExample(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).example.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyExampleArgs_1.DeleteManyExampleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyExampleResolver.prototype, "deleteManyExample", null);
exports.DeleteManyExampleResolver = DeleteManyExampleResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Example_1.Example)
], DeleteManyExampleResolver);
