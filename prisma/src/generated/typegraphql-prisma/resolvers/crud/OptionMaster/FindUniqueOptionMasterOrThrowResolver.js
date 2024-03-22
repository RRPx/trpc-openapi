"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueOptionMasterOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueOptionMasterOrThrowArgs_1 = require("./args/FindUniqueOptionMasterOrThrowArgs");
const OptionMaster_1 = require("../../../models/OptionMaster");
const helpers_1 = require("../../../helpers");
let FindUniqueOptionMasterOrThrowResolver = class FindUniqueOptionMasterOrThrowResolver {
    async getOptionMaster(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).optionMaster.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindUniqueOptionMasterOrThrowResolver = FindUniqueOptionMasterOrThrowResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => OptionMaster_1.OptionMaster, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueOptionMasterOrThrowArgs_1.FindUniqueOptionMasterOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueOptionMasterOrThrowResolver.prototype, "getOptionMaster", null);
exports.FindUniqueOptionMasterOrThrowResolver = FindUniqueOptionMasterOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => OptionMaster_1.OptionMaster)
], FindUniqueOptionMasterOrThrowResolver);
