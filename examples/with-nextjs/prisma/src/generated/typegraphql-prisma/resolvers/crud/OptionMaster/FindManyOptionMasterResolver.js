"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyOptionMasterResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManyOptionMasterArgs_1 = require("./args/FindManyOptionMasterArgs");
const OptionMaster_1 = require("../../../models/OptionMaster");
const helpers_1 = require("../../../helpers");
let FindManyOptionMasterResolver = exports.FindManyOptionMasterResolver = class FindManyOptionMasterResolver {
    async optionMasters(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).optionMaster.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [OptionMaster_1.OptionMaster], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyOptionMasterArgs_1.FindManyOptionMasterArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyOptionMasterResolver.prototype, "optionMasters", null);
exports.FindManyOptionMasterResolver = FindManyOptionMasterResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => OptionMaster_1.OptionMaster)
], FindManyOptionMasterResolver);
