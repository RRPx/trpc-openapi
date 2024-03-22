"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyCastInformationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyCastInformationArgs_1 = require("./args/CreateManyCastInformationArgs");
const CastInformation_1 = require("../../../models/CastInformation");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyCastInformationResolver = class CreateManyCastInformationResolver {
    async createManyCastInformation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).castInformation.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateManyCastInformationResolver = CreateManyCastInformationResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyCastInformationArgs_1.CreateManyCastInformationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyCastInformationResolver.prototype, "createManyCastInformation", null);
exports.CreateManyCastInformationResolver = CreateManyCastInformationResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => CastInformation_1.CastInformation)
], CreateManyCastInformationResolver);
