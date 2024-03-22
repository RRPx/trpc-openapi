"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyCastInformationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManyCastInformationArgs_1 = require("./args/FindManyCastInformationArgs");
const CastInformation_1 = require("../../../models/CastInformation");
const helpers_1 = require("../../../helpers");
let FindManyCastInformationResolver = exports.FindManyCastInformationResolver = class FindManyCastInformationResolver {
    async castInformations(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).castInformation.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [CastInformation_1.CastInformation], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyCastInformationArgs_1.FindManyCastInformationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyCastInformationResolver.prototype, "castInformations", null);
exports.FindManyCastInformationResolver = FindManyCastInformationResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => CastInformation_1.CastInformation)
], FindManyCastInformationResolver);
