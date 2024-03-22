"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientCreateOrConnectWithoutFavoriteInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClientUncheckedCreateWithoutFavoriteInput_1 = require("../inputs/ClientUncheckedCreateWithoutFavoriteInput");
const ClientWhereUniqueInput_1 = require("../inputs/ClientWhereUniqueInput");
let ClientCreateOrConnectWithoutFavoriteInput = exports.ClientCreateOrConnectWithoutFavoriteInput = class ClientCreateOrConnectWithoutFavoriteInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientWhereUniqueInput_1.ClientWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClientWhereUniqueInput_1.ClientWhereUniqueInput)
], ClientCreateOrConnectWithoutFavoriteInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientUncheckedCreateWithoutFavoriteInput_1.ClientUncheckedCreateWithoutFavoriteInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClientUncheckedCreateWithoutFavoriteInput_1.ClientUncheckedCreateWithoutFavoriteInput)
], ClientCreateOrConnectWithoutFavoriteInput.prototype, "create", void 0);
exports.ClientCreateOrConnectWithoutFavoriteInput = ClientCreateOrConnectWithoutFavoriteInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClientCreateOrConnectWithoutFavoriteInput", {})
], ClientCreateOrConnectWithoutFavoriteInput);
