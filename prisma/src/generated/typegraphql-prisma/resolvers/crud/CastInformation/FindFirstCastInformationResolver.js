"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstCastInformationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstCastInformationArgs_1 = require("./args/FindFirstCastInformationArgs");
const CastInformation_1 = require("../../../models/CastInformation");
const helpers_1 = require("../../../helpers");
let FindFirstCastInformationResolver = class FindFirstCastInformationResolver {
    async findFirstCastInformation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).castInformation.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindFirstCastInformationResolver = FindFirstCastInformationResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => CastInformation_1.CastInformation, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstCastInformationArgs_1.FindFirstCastInformationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstCastInformationResolver.prototype, "findFirstCastInformation", null);
exports.FindFirstCastInformationResolver = FindFirstCastInformationResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => CastInformation_1.CastInformation)
], FindFirstCastInformationResolver);
