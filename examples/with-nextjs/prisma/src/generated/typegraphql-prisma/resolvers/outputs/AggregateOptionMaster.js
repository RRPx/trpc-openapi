"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateOptionMaster = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OptionMasterAvgAggregate_1 = require("../outputs/OptionMasterAvgAggregate");
const OptionMasterCountAggregate_1 = require("../outputs/OptionMasterCountAggregate");
const OptionMasterMaxAggregate_1 = require("../outputs/OptionMasterMaxAggregate");
const OptionMasterMinAggregate_1 = require("../outputs/OptionMasterMinAggregate");
const OptionMasterSumAggregate_1 = require("../outputs/OptionMasterSumAggregate");
let AggregateOptionMaster = exports.AggregateOptionMaster = class AggregateOptionMaster {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OptionMasterCountAggregate_1.OptionMasterCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OptionMasterCountAggregate_1.OptionMasterCountAggregate)
], AggregateOptionMaster.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OptionMasterAvgAggregate_1.OptionMasterAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OptionMasterAvgAggregate_1.OptionMasterAvgAggregate)
], AggregateOptionMaster.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OptionMasterSumAggregate_1.OptionMasterSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OptionMasterSumAggregate_1.OptionMasterSumAggregate)
], AggregateOptionMaster.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OptionMasterMinAggregate_1.OptionMasterMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OptionMasterMinAggregate_1.OptionMasterMinAggregate)
], AggregateOptionMaster.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OptionMasterMaxAggregate_1.OptionMasterMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OptionMasterMaxAggregate_1.OptionMasterMaxAggregate)
], AggregateOptionMaster.prototype, "_max", void 0);
exports.AggregateOptionMaster = AggregateOptionMaster = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateOptionMaster", {})
], AggregateOptionMaster);
