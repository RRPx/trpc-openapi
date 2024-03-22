"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueOptionMasterResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueOptionMasterArgs_1 = require("./args/FindUniqueOptionMasterArgs");
const OptionMaster_1 = require("../../../models/OptionMaster");
const helpers_1 = require("../../../helpers");
let FindUniqueOptionMasterResolver = class FindUniqueOptionMasterResolver {
    async optionMaster(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).optionMaster.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindUniqueOptionMasterResolver = FindUniqueOptionMasterResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => OptionMaster_1.OptionMaster, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueOptionMasterArgs_1.FindUniqueOptionMasterArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueOptionMasterResolver.prototype, "optionMaster", null);
exports.FindUniqueOptionMasterResolver = FindUniqueOptionMasterResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => OptionMaster_1.OptionMaster)
], FindUniqueOptionMasterResolver);
