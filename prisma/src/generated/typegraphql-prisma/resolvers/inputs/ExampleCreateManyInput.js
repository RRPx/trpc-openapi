"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExampleCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ExampleCreateManyInput = class ExampleCreateManyInput {
};
exports.ExampleCreateManyInput = ExampleCreateManyInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ExampleCreateManyInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ExampleCreateManyInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ExampleCreateManyInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ExampleCreateManyInput.prototype, "updatedAt", void 0);
exports.ExampleCreateManyInput = ExampleCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ExampleCreateManyInput", {})
], ExampleCreateManyInput);
