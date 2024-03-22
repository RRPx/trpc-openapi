"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstOptionMasterOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstOptionMasterOrThrowArgs_1 = require("./args/FindFirstOptionMasterOrThrowArgs");
const OptionMaster_1 = require("../../../models/OptionMaster");
const helpers_1 = require("../../../helpers");
let FindFirstOptionMasterOrThrowResolver = exports.FindFirstOptionMasterOrThrowResolver = class FindFirstOptionMasterOrThrowResolver {
    async findFirstOptionMasterOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).optionMaster.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => OptionMaster_1.OptionMaster, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstOptionMasterOrThrowArgs_1.FindFirstOptionMasterOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstOptionMasterOrThrowResolver.prototype, "findFirstOptionMasterOrThrow", null);
exports.FindFirstOptionMasterOrThrowResolver = FindFirstOptionMasterOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => OptionMaster_1.OptionMaster)
], FindFirstOptionMasterOrThrowResolver);
