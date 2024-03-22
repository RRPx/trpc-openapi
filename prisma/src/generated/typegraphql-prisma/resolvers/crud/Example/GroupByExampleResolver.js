"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByExampleResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByExampleArgs_1 = require("./args/GroupByExampleArgs");
const Example_1 = require("../../../models/Example");
const ExampleGroupBy_1 = require("../../outputs/ExampleGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByExampleResolver = class GroupByExampleResolver {
    async groupByExample(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).example.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
exports.GroupByExampleResolver = GroupByExampleResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ExampleGroupBy_1.ExampleGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByExampleArgs_1.GroupByExampleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByExampleResolver.prototype, "groupByExample", null);
exports.GroupByExampleResolver = GroupByExampleResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Example_1.Example)
], GroupByExampleResolver);
