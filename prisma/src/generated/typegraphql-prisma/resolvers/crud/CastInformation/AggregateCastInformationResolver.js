"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateCastInformationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateCastInformationArgs_1 = require("./args/AggregateCastInformationArgs");
const CastInformation_1 = require("../../../models/CastInformation");
const AggregateCastInformation_1 = require("../../outputs/AggregateCastInformation");
const helpers_1 = require("../../../helpers");
let AggregateCastInformationResolver = class AggregateCastInformationResolver {
    async aggregateCastInformation(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).castInformation.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
exports.AggregateCastInformationResolver = AggregateCastInformationResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateCastInformation_1.AggregateCastInformation, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateCastInformationArgs_1.AggregateCastInformationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateCastInformationResolver.prototype, "aggregateCastInformation", null);
exports.AggregateCastInformationResolver = AggregateCastInformationResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => CastInformation_1.CastInformation)
], AggregateCastInformationResolver);
