"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyExampleArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExampleUncheckedUpdateManyInput_1 = require("../../../inputs/ExampleUncheckedUpdateManyInput");
const ExampleWhereInput_1 = require("../../../inputs/ExampleWhereInput");
let UpdateManyExampleArgs = class UpdateManyExampleArgs {
};
exports.UpdateManyExampleArgs = UpdateManyExampleArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExampleUncheckedUpdateManyInput_1.ExampleUncheckedUpdateManyInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExampleUncheckedUpdateManyInput_1.ExampleUncheckedUpdateManyInput)
], UpdateManyExampleArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExampleWhereInput_1.ExampleWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExampleWhereInput_1.ExampleWhereInput)
], UpdateManyExampleArgs.prototype, "where", void 0);
exports.UpdateManyExampleArgs = UpdateManyExampleArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyExampleArgs);
