"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueCastInformationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueCastInformationArgs_1 = require("./args/FindUniqueCastInformationArgs");
const CastInformation_1 = require("../../../models/CastInformation");
const helpers_1 = require("../../../helpers");
let FindUniqueCastInformationResolver = exports.FindUniqueCastInformationResolver = class FindUniqueCastInformationResolver {
    async castInformation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).castInformation.findUnique({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueCastInformationArgs_1.FindUniqueCastInformationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueCastInformationResolver.prototype, "castInformation", null);
exports.FindUniqueCastInformationResolver = FindUniqueCastInformationResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => CastInformation_1.CastInformation)
], FindUniqueCastInformationResolver);
