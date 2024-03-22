"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstCastInformationOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstCastInformationOrThrowArgs_1 = require("./args/FindFirstCastInformationOrThrowArgs");
const CastInformation_1 = require("../../../models/CastInformation");
const helpers_1 = require("../../../helpers");
let FindFirstCastInformationOrThrowResolver = exports.FindFirstCastInformationOrThrowResolver = class FindFirstCastInformationOrThrowResolver {
    async findFirstCastInformationOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).castInformation.findFirstOrThrow({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstCastInformationOrThrowArgs_1.FindFirstCastInformationOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstCastInformationOrThrowResolver.prototype, "findFirstCastInformationOrThrow", null);
exports.FindFirstCastInformationOrThrowResolver = FindFirstCastInformationOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => CastInformation_1.CastInformation)
], FindFirstCastInformationOrThrowResolver);
