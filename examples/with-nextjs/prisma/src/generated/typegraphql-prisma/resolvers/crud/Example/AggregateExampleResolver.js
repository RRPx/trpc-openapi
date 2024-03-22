"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateExampleResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateExampleArgs_1 = require("./args/AggregateExampleArgs");
const Example_1 = require("../../../models/Example");
const AggregateExample_1 = require("../../outputs/AggregateExample");
const helpers_1 = require("../../../helpers");
let AggregateExampleResolver = exports.AggregateExampleResolver = class AggregateExampleResolver {
    async aggregateExample(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).example.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateExample_1.AggregateExample, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateExampleArgs_1.AggregateExampleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateExampleResolver.prototype, "aggregateExample", null);
exports.AggregateExampleResolver = AggregateExampleResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Example_1.Example)
], AggregateExampleResolver);
