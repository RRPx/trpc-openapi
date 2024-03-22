"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyExampleArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExampleCreateManyInput_1 = require("../../../inputs/ExampleCreateManyInput");
let CreateManyExampleArgs = class CreateManyExampleArgs {
};
exports.CreateManyExampleArgs = CreateManyExampleArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ExampleCreateManyInput_1.ExampleCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyExampleArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyExampleArgs.prototype, "skipDuplicates", void 0);
exports.CreateManyExampleArgs = CreateManyExampleArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyExampleArgs);
