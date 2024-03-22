"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExampleMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ExampleMinAggregate = exports.ExampleMinAggregate = class ExampleMinAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ExampleMinAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExampleMinAggregate.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ExampleMinAggregate.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ExampleMinAggregate.prototype, "updatedAt", void 0);
exports.ExampleMinAggregate = ExampleMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ExampleMinAggregate", {})
], ExampleMinAggregate);
