"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExampleAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ExampleAvgAggregate = class ExampleAvgAggregate {
};
exports.ExampleAvgAggregate = ExampleAvgAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ExampleAvgAggregate.prototype, "id", void 0);
exports.ExampleAvgAggregate = ExampleAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ExampleAvgAggregate", {})
], ExampleAvgAggregate);
