"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyCastInformationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyCastInformationArgs_1 = require("./args/UpdateManyCastInformationArgs");
const CastInformation_1 = require("../../../models/CastInformation");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyCastInformationResolver = exports.UpdateManyCastInformationResolver = class UpdateManyCastInformationResolver {
    async updateManyCastInformation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).castInformation.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyCastInformationArgs_1.UpdateManyCastInformationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyCastInformationResolver.prototype, "updateManyCastInformation", null);
exports.UpdateManyCastInformationResolver = UpdateManyCastInformationResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => CastInformation_1.CastInformation)
], UpdateManyCastInformationResolver);
