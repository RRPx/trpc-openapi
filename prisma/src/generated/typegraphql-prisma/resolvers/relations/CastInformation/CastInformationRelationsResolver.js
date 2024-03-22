"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastInformationRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Cast_1 = require("../../../models/Cast");
const CastInformation_1 = require("../../../models/CastInformation");
const helpers_1 = require("../../../helpers");
let CastInformationRelationsResolver = class CastInformationRelationsResolver {
    async cast(castInformation, ctx, info) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).castInformation.findUniqueOrThrow({
            where: {
                id: castInformation.id,
            },
        }).cast({
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CastInformationRelationsResolver = CastInformationRelationsResolver;
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Cast_1.Cast, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [CastInformation_1.CastInformation, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CastInformationRelationsResolver.prototype, "cast", null);
exports.CastInformationRelationsResolver = CastInformationRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => CastInformation_1.CastInformation)
], CastInformationRelationsResolver);
