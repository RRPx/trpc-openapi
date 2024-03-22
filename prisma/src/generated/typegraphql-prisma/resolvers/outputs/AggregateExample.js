"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateExample = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExampleAvgAggregate_1 = require("../outputs/ExampleAvgAggregate");
const ExampleCountAggregate_1 = require("../outputs/ExampleCountAggregate");
const ExampleMaxAggregate_1 = require("../outputs/ExampleMaxAggregate");
const ExampleMinAggregate_1 = require("../outputs/ExampleMinAggregate");
const ExampleSumAggregate_1 = require("../outputs/ExampleSumAggregate");
let AggregateExample = class AggregateExample {
};
exports.AggregateExample = AggregateExample;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExampleCountAggregate_1.ExampleCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExampleCountAggregate_1.ExampleCountAggregate)
], AggregateExample.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExampleAvgAggregate_1.ExampleAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExampleAvgAggregate_1.ExampleAvgAggregate)
], AggregateExample.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExampleSumAggregate_1.ExampleSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExampleSumAggregate_1.ExampleSumAggregate)
], AggregateExample.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExampleMinAggregate_1.ExampleMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExampleMinAggregate_1.ExampleMinAggregate)
], AggregateExample.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExampleMaxAggregate_1.ExampleMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExampleMaxAggregate_1.ExampleMaxAggregate)
], AggregateExample.prototype, "_max", void 0);
exports.AggregateExample = AggregateExample = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateExample", {})
], AggregateExample);
