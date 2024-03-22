"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueExampleArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExampleWhereUniqueInput_1 = require("../../../inputs/ExampleWhereUniqueInput");
let FindUniqueExampleArgs = class FindUniqueExampleArgs {
};
exports.FindUniqueExampleArgs = FindUniqueExampleArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExampleWhereUniqueInput_1.ExampleWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExampleWhereUniqueInput_1.ExampleWhereUniqueInput)
], FindUniqueExampleArgs.prototype, "where", void 0);
exports.FindUniqueExampleArgs = FindUniqueExampleArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueExampleArgs);
