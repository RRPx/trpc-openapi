"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateOptionMasterResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateOptionMasterArgs_1 = require("./args/AggregateOptionMasterArgs");
const OptionMaster_1 = require("../../../models/OptionMaster");
const AggregateOptionMaster_1 = require("../../outputs/AggregateOptionMaster");
const helpers_1 = require("../../../helpers");
let AggregateOptionMasterResolver = class AggregateOptionMasterResolver {
    async aggregateOptionMaster(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).optionMaster.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
exports.AggregateOptionMasterResolver = AggregateOptionMasterResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateOptionMaster_1.AggregateOptionMaster, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateOptionMasterArgs_1.AggregateOptionMasterArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateOptionMasterResolver.prototype, "aggregateOptionMaster", null);
exports.AggregateOptionMasterResolver = AggregateOptionMasterResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => OptionMaster_1.OptionMaster)
], AggregateOptionMasterResolver);
