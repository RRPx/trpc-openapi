"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExampleCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ExampleCreateInput = exports.ExampleCreateInput = class ExampleCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ExampleCreateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ExampleCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ExampleCreateInput.prototype, "updatedAt", void 0);
exports.ExampleCreateInput = ExampleCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ExampleCreateInput", {})
], ExampleCreateInput);
