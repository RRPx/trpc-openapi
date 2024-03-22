"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateExampleArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExampleOrderByWithRelationInput_1 = require("../../../inputs/ExampleOrderByWithRelationInput");
const ExampleWhereInput_1 = require("../../../inputs/ExampleWhereInput");
const ExampleWhereUniqueInput_1 = require("../../../inputs/ExampleWhereUniqueInput");
let AggregateExampleArgs = exports.AggregateExampleArgs = class AggregateExampleArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExampleWhereInput_1.ExampleWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExampleWhereInput_1.ExampleWhereInput)
], AggregateExampleArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ExampleOrderByWithRelationInput_1.ExampleOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateExampleArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExampleWhereUniqueInput_1.ExampleWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExampleWhereUniqueInput_1.ExampleWhereUniqueInput)
], AggregateExampleArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateExampleArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateExampleArgs.prototype, "skip", void 0);
exports.AggregateExampleArgs = AggregateExampleArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateExampleArgs);
