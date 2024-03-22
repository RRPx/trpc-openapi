"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionMasterGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OptionMasterAvgAggregate_1 = require("../outputs/OptionMasterAvgAggregate");
const OptionMasterCountAggregate_1 = require("../outputs/OptionMasterCountAggregate");
const OptionMasterMaxAggregate_1 = require("../outputs/OptionMasterMaxAggregate");
const OptionMasterMinAggregate_1 = require("../outputs/OptionMasterMinAggregate");
const OptionMasterSumAggregate_1 = require("../outputs/OptionMasterSumAggregate");
let OptionMasterGroupBy = exports.OptionMasterGroupBy = class OptionMasterGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], OptionMasterGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], OptionMasterGroupBy.prototype, "option_menu", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], OptionMasterGroupBy.prototype, "fee", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], OptionMasterGroupBy.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], OptionMasterGroupBy.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], OptionMasterGroupBy.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OptionMasterCountAggregate_1.OptionMasterCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OptionMasterCountAggregate_1.OptionMasterCountAggregate)
], OptionMasterGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OptionMasterAvgAggregate_1.OptionMasterAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OptionMasterAvgAggregate_1.OptionMasterAvgAggregate)
], OptionMasterGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OptionMasterSumAggregate_1.OptionMasterSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OptionMasterSumAggregate_1.OptionMasterSumAggregate)
], OptionMasterGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OptionMasterMinAggregate_1.OptionMasterMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OptionMasterMinAggregate_1.OptionMasterMinAggregate)
], OptionMasterGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OptionMasterMaxAggregate_1.OptionMasterMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OptionMasterMaxAggregate_1.OptionMasterMaxAggregate)
], OptionMasterGroupBy.prototype, "_max", void 0);
exports.OptionMasterGroupBy = OptionMasterGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("OptionMasterGroupBy", {})
], OptionMasterGroupBy);
