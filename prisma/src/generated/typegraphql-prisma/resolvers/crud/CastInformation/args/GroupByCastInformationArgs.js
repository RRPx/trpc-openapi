"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByCastInformationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastInformationOrderByWithAggregationInput_1 = require("../../../inputs/CastInformationOrderByWithAggregationInput");
const CastInformationScalarWhereWithAggregatesInput_1 = require("../../../inputs/CastInformationScalarWhereWithAggregatesInput");
const CastInformationWhereInput_1 = require("../../../inputs/CastInformationWhereInput");
const CastInformationScalarFieldEnum_1 = require("../../../../enums/CastInformationScalarFieldEnum");
let GroupByCastInformationArgs = class GroupByCastInformationArgs {
};
exports.GroupByCastInformationArgs = GroupByCastInformationArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastInformationWhereInput_1.CastInformationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastInformationWhereInput_1.CastInformationWhereInput)
], GroupByCastInformationArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CastInformationOrderByWithAggregationInput_1.CastInformationOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByCastInformationArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CastInformationScalarFieldEnum_1.CastInformationScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByCastInformationArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastInformationScalarWhereWithAggregatesInput_1.CastInformationScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastInformationScalarWhereWithAggregatesInput_1.CastInformationScalarWhereWithAggregatesInput)
], GroupByCastInformationArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByCastInformationArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByCastInformationArgs.prototype, "skip", void 0);
exports.GroupByCastInformationArgs = GroupByCastInformationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByCastInformationArgs);
