"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyExampleArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExampleWhereInput_1 = require("../../../inputs/ExampleWhereInput");
let DeleteManyExampleArgs = class DeleteManyExampleArgs {
};
exports.DeleteManyExampleArgs = DeleteManyExampleArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExampleWhereInput_1.ExampleWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExampleWhereInput_1.ExampleWhereInput)
], DeleteManyExampleArgs.prototype, "where", void 0);
exports.DeleteManyExampleArgs = DeleteManyExampleArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyExampleArgs);
