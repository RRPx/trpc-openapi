"use strict";
var ExampleWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExampleWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let ExampleWhereInput = exports.ExampleWhereInput = ExampleWhereInput_1 = class ExampleWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ExampleWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ExampleWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ExampleWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ExampleWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ExampleWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ExampleWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], ExampleWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ExampleWhereInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ExampleWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ExampleWhereInput.prototype, "updatedAt", void 0);
exports.ExampleWhereInput = ExampleWhereInput = ExampleWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("ExampleWhereInput", {})
], ExampleWhereInput);
