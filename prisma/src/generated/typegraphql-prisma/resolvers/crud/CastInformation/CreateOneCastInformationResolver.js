"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneCastInformationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateOneCastInformationArgs_1 = require("./args/CreateOneCastInformationArgs");
const CastInformation_1 = require("../../../models/CastInformation");
const helpers_1 = require("../../../helpers");
let CreateOneCastInformationResolver = class CreateOneCastInformationResolver {
    async createOneCastInformation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).castInformation.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateOneCastInformationResolver = CreateOneCastInformationResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => CastInformation_1.CastInformation, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneCastInformationArgs_1.CreateOneCastInformationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneCastInformationResolver.prototype, "createOneCastInformation", null);
exports.CreateOneCastInformationResolver = CreateOneCastInformationResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => CastInformation_1.CastInformation)
], CreateOneCastInformationResolver);
