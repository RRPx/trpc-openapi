"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByCastArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastOrderByWithAggregationInput_1 = require("../../../inputs/CastOrderByWithAggregationInput");
const CastScalarWhereWithAggregatesInput_1 = require("../../../inputs/CastScalarWhereWithAggregatesInput");
const CastWhereInput_1 = require("../../../inputs/CastWhereInput");
const CastScalarFieldEnum_1 = require("../../../../enums/CastScalarFieldEnum");
let GroupByCastArgs = class GroupByCastArgs {
};
exports.GroupByCastArgs = GroupByCastArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastWhereInput_1.CastWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastWhereInput_1.CastWhereInput)
], GroupByCastArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CastOrderByWithAggregationInput_1.CastOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByCastArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CastScalarFieldEnum_1.CastScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByCastArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastScalarWhereWithAggregatesInput_1.CastScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastScalarWhereWithAggregatesInput_1.CastScalarWhereWithAggregatesInput)
], GroupByCastArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByCastArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByCastArgs.prototype, "skip", void 0);
exports.GroupByCastArgs = GroupByCastArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByCastArgs);
