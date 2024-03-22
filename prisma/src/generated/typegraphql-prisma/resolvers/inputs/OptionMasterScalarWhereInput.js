"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionMasterScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolFilter_1 = require("../inputs/BoolFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let OptionMasterScalarWhereInput = class OptionMasterScalarWhereInput {
};
exports.OptionMasterScalarWhereInput = OptionMasterScalarWhereInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OptionMasterScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OptionMasterScalarWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OptionMasterScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OptionMasterScalarWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OptionMasterScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OptionMasterScalarWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], OptionMasterScalarWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], OptionMasterScalarWhereInput.prototype, "option_menu", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], OptionMasterScalarWhereInput.prototype, "fee", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFilter_1.BoolFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFilter_1.BoolFilter)
], OptionMasterScalarWhereInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], OptionMasterScalarWhereInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], OptionMasterScalarWhereInput.prototype, "updated_at", void 0);
exports.OptionMasterScalarWhereInput = OptionMasterScalarWhereInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OptionMasterScalarWhereInput", {})
], OptionMasterScalarWhereInput);
