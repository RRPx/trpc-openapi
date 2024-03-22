"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExampleMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ExampleMaxAggregate = exports.ExampleMaxAggregate = class ExampleMaxAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ExampleMaxAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExampleMaxAggregate.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ExampleMaxAggregate.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ExampleMaxAggregate.prototype, "updatedAt", void 0);
exports.ExampleMaxAggregate = ExampleMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ExampleMaxAggregate", {})
], ExampleMaxAggregate);
