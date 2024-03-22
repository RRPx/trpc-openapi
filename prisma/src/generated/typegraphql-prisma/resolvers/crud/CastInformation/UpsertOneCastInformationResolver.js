"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneCastInformationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneCastInformationArgs_1 = require("./args/UpsertOneCastInformationArgs");
const CastInformation_1 = require("../../../models/CastInformation");
const helpers_1 = require("../../../helpers");
let UpsertOneCastInformationResolver = class UpsertOneCastInformationResolver {
    async upsertOneCastInformation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).castInformation.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpsertOneCastInformationResolver = UpsertOneCastInformationResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => CastInformation_1.CastInformation, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneCastInformationArgs_1.UpsertOneCastInformationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneCastInformationResolver.prototype, "upsertOneCastInformation", null);
exports.UpsertOneCastInformationResolver = UpsertOneCastInformationResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => CastInformation_1.CastInformation)
], UpsertOneCastInformationResolver);
