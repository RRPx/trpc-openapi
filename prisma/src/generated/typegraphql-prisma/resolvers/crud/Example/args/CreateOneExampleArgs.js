"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneExampleArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExampleUncheckedCreateInput_1 = require("../../../inputs/ExampleUncheckedCreateInput");
let CreateOneExampleArgs = class CreateOneExampleArgs {
};
exports.CreateOneExampleArgs = CreateOneExampleArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExampleUncheckedCreateInput_1.ExampleUncheckedCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExampleUncheckedCreateInput_1.ExampleUncheckedCreateInput)
], CreateOneExampleArgs.prototype, "data", void 0);
exports.CreateOneExampleArgs = CreateOneExampleArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneExampleArgs);
