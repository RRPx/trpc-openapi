"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneExampleArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExampleUncheckedUpdateInput_1 = require("../../../inputs/ExampleUncheckedUpdateInput");
const ExampleWhereUniqueInput_1 = require("../../../inputs/ExampleWhereUniqueInput");
let UpdateOneExampleArgs = exports.UpdateOneExampleArgs = class UpdateOneExampleArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExampleUncheckedUpdateInput_1.ExampleUncheckedUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExampleUncheckedUpdateInput_1.ExampleUncheckedUpdateInput)
], UpdateOneExampleArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExampleWhereUniqueInput_1.ExampleWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExampleWhereUniqueInput_1.ExampleWhereUniqueInput)
], UpdateOneExampleArgs.prototype, "where", void 0);
exports.UpdateOneExampleArgs = UpdateOneExampleArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneExampleArgs);
