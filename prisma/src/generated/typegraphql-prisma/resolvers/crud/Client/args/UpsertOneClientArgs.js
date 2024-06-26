"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneClientArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClientUncheckedCreateInput_1 = require("../../../inputs/ClientUncheckedCreateInput");
const ClientUncheckedUpdateInput_1 = require("../../../inputs/ClientUncheckedUpdateInput");
const ClientWhereUniqueInput_1 = require("../../../inputs/ClientWhereUniqueInput");
let UpsertOneClientArgs = class UpsertOneClientArgs {
};
exports.UpsertOneClientArgs = UpsertOneClientArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientWhereUniqueInput_1.ClientWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClientWhereUniqueInput_1.ClientWhereUniqueInput)
], UpsertOneClientArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientUncheckedCreateInput_1.ClientUncheckedCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClientUncheckedCreateInput_1.ClientUncheckedCreateInput)
], UpsertOneClientArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientUncheckedUpdateInput_1.ClientUncheckedUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClientUncheckedUpdateInput_1.ClientUncheckedUpdateInput)
], UpsertOneClientArgs.prototype, "update", void 0);
exports.UpsertOneClientArgs = UpsertOneClientArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneClientArgs);
