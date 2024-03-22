"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateCastResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateCastArgs_1 = require("./args/AggregateCastArgs");
const Cast_1 = require("../../../models/Cast");
const AggregateCast_1 = require("../../outputs/AggregateCast");
const helpers_1 = require("../../../helpers");
let AggregateCastResolver = class AggregateCastResolver {
    async aggregateCast(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).cast.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
exports.AggregateCastResolver = AggregateCastResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateCast_1.AggregateCast, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateCastArgs_1.AggregateCastArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateCastResolver.prototype, "aggregateCast", null);
exports.AggregateCastResolver = AggregateCastResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Cast_1.Cast)
], AggregateCastResolver);
