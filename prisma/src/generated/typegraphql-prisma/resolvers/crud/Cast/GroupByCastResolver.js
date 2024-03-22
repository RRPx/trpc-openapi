"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByCastResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByCastArgs_1 = require("./args/GroupByCastArgs");
const Cast_1 = require("../../../models/Cast");
const CastGroupBy_1 = require("../../outputs/CastGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByCastResolver = class GroupByCastResolver {
    async groupByCast(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).cast.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
exports.GroupByCastResolver = GroupByCastResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [CastGroupBy_1.CastGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByCastArgs_1.GroupByCastArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByCastResolver.prototype, "groupByCast", null);
exports.GroupByCastResolver = GroupByCastResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Cast_1.Cast)
], GroupByCastResolver);
