"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExampleUncheckedCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ExampleUncheckedCreateInput = exports.ExampleUncheckedCreateInput = class ExampleUncheckedCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ExampleUncheckedCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ExampleUncheckedCreateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ExampleUncheckedCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ExampleUncheckedCreateInput.prototype, "updatedAt", void 0);
exports.ExampleUncheckedCreateInput = ExampleUncheckedCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ExampleUncheckedCreateInput", {})
], ExampleUncheckedCreateInput);
