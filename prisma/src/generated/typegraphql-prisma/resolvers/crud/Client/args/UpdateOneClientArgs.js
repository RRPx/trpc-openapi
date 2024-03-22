"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneClientArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClientUncheckedUpdateInput_1 = require("../../../inputs/ClientUncheckedUpdateInput");
const ClientWhereUniqueInput_1 = require("../../../inputs/ClientWhereUniqueInput");
let UpdateOneClientArgs = class UpdateOneClientArgs {
};
exports.UpdateOneClientArgs = UpdateOneClientArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientUncheckedUpdateInput_1.ClientUncheckedUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClientUncheckedUpdateInput_1.ClientUncheckedUpdateInput)
], UpdateOneClientArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientWhereUniqueInput_1.ClientWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClientWhereUniqueInput_1.ClientWhereUniqueInput)
], UpdateOneClientArgs.prototype, "where", void 0);
exports.UpdateOneClientArgs = UpdateOneClientArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneClientArgs);
