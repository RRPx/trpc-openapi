"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExampleSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ExampleSumAggregate = exports.ExampleSumAggregate = class ExampleSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ExampleSumAggregate.prototype, "id", void 0);
exports.ExampleSumAggregate = ExampleSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ExampleSumAggregate", {})
], ExampleSumAggregate);
