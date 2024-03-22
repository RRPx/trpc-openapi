"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueExampleOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExampleWhereUniqueInput_1 = require("../../../inputs/ExampleWhereUniqueInput");
let FindUniqueExampleOrThrowArgs = exports.FindUniqueExampleOrThrowArgs = class FindUniqueExampleOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExampleWhereUniqueInput_1.ExampleWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExampleWhereUniqueInput_1.ExampleWhereUniqueInput)
], FindUniqueExampleOrThrowArgs.prototype, "where", void 0);
exports.FindUniqueExampleOrThrowArgs = FindUniqueExampleOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueExampleOrThrowArgs);
