"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientCreateNestedOneWithoutFavoriteInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClientCreateOrConnectWithoutFavoriteInput_1 = require("../inputs/ClientCreateOrConnectWithoutFavoriteInput");
const ClientUncheckedCreateWithoutFavoriteInput_1 = require("../inputs/ClientUncheckedCreateWithoutFavoriteInput");
const ClientWhereUniqueInput_1 = require("../inputs/ClientWhereUniqueInput");
let ClientCreateNestedOneWithoutFavoriteInput = exports.ClientCreateNestedOneWithoutFavoriteInput = class ClientCreateNestedOneWithoutFavoriteInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientUncheckedCreateWithoutFavoriteInput_1.ClientUncheckedCreateWithoutFavoriteInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientUncheckedCreateWithoutFavoriteInput_1.ClientUncheckedCreateWithoutFavoriteInput)
], ClientCreateNestedOneWithoutFavoriteInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientCreateOrConnectWithoutFavoriteInput_1.ClientCreateOrConnectWithoutFavoriteInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientCreateOrConnectWithoutFavoriteInput_1.ClientCreateOrConnectWithoutFavoriteInput)
], ClientCreateNestedOneWithoutFavoriteInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientWhereUniqueInput_1.ClientWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientWhereUniqueInput_1.ClientWhereUniqueInput)
], ClientCreateNestedOneWithoutFavoriteInput.prototype, "connect", void 0);
exports.ClientCreateNestedOneWithoutFavoriteInput = ClientCreateNestedOneWithoutFavoriteInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClientCreateNestedOneWithoutFavoriteInput", {})
], ClientCreateNestedOneWithoutFavoriteInput);
