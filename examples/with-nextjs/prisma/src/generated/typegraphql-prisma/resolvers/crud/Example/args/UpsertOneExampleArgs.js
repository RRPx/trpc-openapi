"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneExampleArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExampleUncheckedCreateInput_1 = require("../../../inputs/ExampleUncheckedCreateInput");
const ExampleUncheckedUpdateInput_1 = require("../../../inputs/ExampleUncheckedUpdateInput");
const ExampleWhereUniqueInput_1 = require("../../../inputs/ExampleWhereUniqueInput");
let UpsertOneExampleArgs = exports.UpsertOneExampleArgs = class UpsertOneExampleArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExampleWhereUniqueInput_1.ExampleWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExampleWhereUniqueInput_1.ExampleWhereUniqueInput)
], UpsertOneExampleArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExampleUncheckedCreateInput_1.ExampleUncheckedCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExampleUncheckedCreateInput_1.ExampleUncheckedCreateInput)
], UpsertOneExampleArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExampleUncheckedUpdateInput_1.ExampleUncheckedUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExampleUncheckedUpdateInput_1.ExampleUncheckedUpdateInput)
], UpsertOneExampleArgs.prototype, "update", void 0);
exports.UpsertOneExampleArgs = UpsertOneExampleArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneExampleArgs);
