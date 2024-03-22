"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstExampleArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExampleOrderByWithRelationInput_1 = require("../../../inputs/ExampleOrderByWithRelationInput");
const ExampleWhereInput_1 = require("../../../inputs/ExampleWhereInput");
const ExampleWhereUniqueInput_1 = require("../../../inputs/ExampleWhereUniqueInput");
const ExampleScalarFieldEnum_1 = require("../../../../enums/ExampleScalarFieldEnum");
let FindFirstExampleArgs = class FindFirstExampleArgs {
};
exports.FindFirstExampleArgs = FindFirstExampleArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExampleWhereInput_1.ExampleWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExampleWhereInput_1.ExampleWhereInput)
], FindFirstExampleArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ExampleOrderByWithRelationInput_1.ExampleOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstExampleArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExampleWhereUniqueInput_1.ExampleWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExampleWhereUniqueInput_1.ExampleWhereUniqueInput)
], FindFirstExampleArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstExampleArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstExampleArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ExampleScalarFieldEnum_1.ExampleScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstExampleArgs.prototype, "distinct", void 0);
exports.FindFirstExampleArgs = FindFirstExampleArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstExampleArgs);
