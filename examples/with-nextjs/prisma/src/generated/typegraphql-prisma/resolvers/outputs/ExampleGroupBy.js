"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExampleGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExampleAvgAggregate_1 = require("../outputs/ExampleAvgAggregate");
const ExampleCountAggregate_1 = require("../outputs/ExampleCountAggregate");
const ExampleMaxAggregate_1 = require("../outputs/ExampleMaxAggregate");
const ExampleMinAggregate_1 = require("../outputs/ExampleMinAggregate");
const ExampleSumAggregate_1 = require("../outputs/ExampleSumAggregate");
let ExampleGroupBy = exports.ExampleGroupBy = class ExampleGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ExampleGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ExampleGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ExampleGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ExampleGroupBy.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExampleCountAggregate_1.ExampleCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExampleCountAggregate_1.ExampleCountAggregate)
], ExampleGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExampleAvgAggregate_1.ExampleAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExampleAvgAggregate_1.ExampleAvgAggregate)
], ExampleGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExampleSumAggregate_1.ExampleSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExampleSumAggregate_1.ExampleSumAggregate)
], ExampleGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExampleMinAggregate_1.ExampleMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExampleMinAggregate_1.ExampleMinAggregate)
], ExampleGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExampleMaxAggregate_1.ExampleMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExampleMaxAggregate_1.ExampleMaxAggregate)
], ExampleGroupBy.prototype, "_max", void 0);
exports.ExampleGroupBy = ExampleGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ExampleGroupBy", {})
], ExampleGroupBy);
