"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByOptionMasterArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OptionMasterOrderByWithAggregationInput_1 = require("../../../inputs/OptionMasterOrderByWithAggregationInput");
const OptionMasterScalarWhereWithAggregatesInput_1 = require("../../../inputs/OptionMasterScalarWhereWithAggregatesInput");
const OptionMasterWhereInput_1 = require("../../../inputs/OptionMasterWhereInput");
const OptionMasterScalarFieldEnum_1 = require("../../../../enums/OptionMasterScalarFieldEnum");
let GroupByOptionMasterArgs = exports.GroupByOptionMasterArgs = class GroupByOptionMasterArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OptionMasterWhereInput_1.OptionMasterWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OptionMasterWhereInput_1.OptionMasterWhereInput)
], GroupByOptionMasterArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OptionMasterOrderByWithAggregationInput_1.OptionMasterOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByOptionMasterArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OptionMasterScalarFieldEnum_1.OptionMasterScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByOptionMasterArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OptionMasterScalarWhereWithAggregatesInput_1.OptionMasterScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OptionMasterScalarWhereWithAggregatesInput_1.OptionMasterScalarWhereWithAggregatesInput)
], GroupByOptionMasterArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByOptionMasterArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByOptionMasterArgs.prototype, "skip", void 0);
exports.GroupByOptionMasterArgs = GroupByOptionMasterArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByOptionMasterArgs);
