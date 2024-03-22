"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyExampleResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyExampleArgs_1 = require("./args/CreateManyExampleArgs");
const Example_1 = require("../../../models/Example");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyExampleResolver = exports.CreateManyExampleResolver = class CreateManyExampleResolver {
    async createManyExample(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).example.createMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyExampleArgs_1.CreateManyExampleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyExampleResolver.prototype, "createManyExample", null);
exports.CreateManyExampleResolver = CreateManyExampleResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Example_1.Example)
], CreateManyExampleResolver);
