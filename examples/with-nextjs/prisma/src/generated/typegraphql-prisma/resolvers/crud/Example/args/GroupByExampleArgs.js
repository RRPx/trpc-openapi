"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByExampleArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExampleOrderByWithAggregationInput_1 = require("../../../inputs/ExampleOrderByWithAggregationInput");
const ExampleScalarWhereWithAggregatesInput_1 = require("../../../inputs/ExampleScalarWhereWithAggregatesInput");
const ExampleWhereInput_1 = require("../../../inputs/ExampleWhereInput");
const ExampleScalarFieldEnum_1 = require("../../../../enums/ExampleScalarFieldEnum");
let GroupByExampleArgs = exports.GroupByExampleArgs = class GroupByExampleArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExampleWhereInput_1.ExampleWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExampleWhereInput_1.ExampleWhereInput)
], GroupByExampleArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ExampleOrderByWithAggregationInput_1.ExampleOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByExampleArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ExampleScalarFieldEnum_1.ExampleScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByExampleArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExampleScalarWhereWithAggregatesInput_1.ExampleScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExampleScalarWhereWithAggregatesInput_1.ExampleScalarWhereWithAggregatesInput)
], GroupByExampleArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByExampleArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByExampleArgs.prototype, "skip", void 0);
exports.GroupByExampleArgs = GroupByExampleArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByExampleArgs);
