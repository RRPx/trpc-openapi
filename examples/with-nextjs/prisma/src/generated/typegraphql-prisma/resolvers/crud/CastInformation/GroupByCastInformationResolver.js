"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByCastInformationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByCastInformationArgs_1 = require("./args/GroupByCastInformationArgs");
const CastInformation_1 = require("../../../models/CastInformation");
const CastInformationGroupBy_1 = require("../../outputs/CastInformationGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByCastInformationResolver = exports.GroupByCastInformationResolver = class GroupByCastInformationResolver {
    async groupByCastInformation(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).castInformation.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [CastInformationGroupBy_1.CastInformationGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByCastInformationArgs_1.GroupByCastInformationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByCastInformationResolver.prototype, "groupByCastInformation", null);
exports.GroupByCastInformationResolver = GroupByCastInformationResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => CastInformation_1.CastInformation)
], GroupByCastInformationResolver);
