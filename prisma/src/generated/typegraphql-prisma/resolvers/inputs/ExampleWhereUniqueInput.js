"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExampleWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const ExampleWhereInput_1 = require("../inputs/ExampleWhereInput");
const StringFilter_1 = require("../inputs/StringFilter");
let ExampleWhereUniqueInput = class ExampleWhereUniqueInput {
};
exports.ExampleWhereUniqueInput = ExampleWhereUniqueInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ExampleWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ExampleWhereInput_1.ExampleWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ExampleWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ExampleWhereInput_1.ExampleWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ExampleWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ExampleWhereInput_1.ExampleWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ExampleWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ExampleWhereUniqueInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ExampleWhereUniqueInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ExampleWhereUniqueInput.prototype, "updatedAt", void 0);
exports.ExampleWhereUniqueInput = ExampleWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ExampleWhereUniqueInput", {})
], ExampleWhereUniqueInput);
