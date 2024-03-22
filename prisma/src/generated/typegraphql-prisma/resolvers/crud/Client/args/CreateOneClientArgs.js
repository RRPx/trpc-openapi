"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneClientArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClientUncheckedCreateInput_1 = require("../../../inputs/ClientUncheckedCreateInput");
let CreateOneClientArgs = class CreateOneClientArgs {
};
exports.CreateOneClientArgs = CreateOneClientArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientUncheckedCreateInput_1.ClientUncheckedCreateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientUncheckedCreateInput_1.ClientUncheckedCreateInput)
], CreateOneClientArgs.prototype, "data", void 0);
exports.CreateOneClientArgs = CreateOneClientArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneClientArgs);
