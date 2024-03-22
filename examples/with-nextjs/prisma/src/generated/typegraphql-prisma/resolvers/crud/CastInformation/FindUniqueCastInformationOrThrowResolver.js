"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueCastInformationOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueCastInformationOrThrowArgs_1 = require("./args/FindUniqueCastInformationOrThrowArgs");
const CastInformation_1 = require("../../../models/CastInformation");
const helpers_1 = require("../../../helpers");
let FindUniqueCastInformationOrThrowResolver = exports.FindUniqueCastInformationOrThrowResolver = class FindUniqueCastInformationOrThrowResolver {
    async getCastInformation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).castInformation.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => CastInformation_1.CastInformation, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueCastInformationOrThrowArgs_1.FindUniqueCastInformationOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueCastInformationOrThrowResolver.prototype, "getCastInformation", null);
exports.FindUniqueCastInformationOrThrowResolver = FindUniqueCastInformationOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => CastInformation_1.CastInformation)
], FindUniqueCastInformationOrThrowResolver);
