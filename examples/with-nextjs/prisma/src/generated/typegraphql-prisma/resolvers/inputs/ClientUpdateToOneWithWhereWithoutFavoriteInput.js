"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientUpdateToOneWithWhereWithoutFavoriteInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClientUncheckedUpdateWithoutFavoriteInput_1 = require("../inputs/ClientUncheckedUpdateWithoutFavoriteInput");
const ClientWhereInput_1 = require("../inputs/ClientWhereInput");
let ClientUpdateToOneWithWhereWithoutFavoriteInput = exports.ClientUpdateToOneWithWhereWithoutFavoriteInput = class ClientUpdateToOneWithWhereWithoutFavoriteInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientWhereInput_1.ClientWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientWhereInput_1.ClientWhereInput)
], ClientUpdateToOneWithWhereWithoutFavoriteInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientUncheckedUpdateWithoutFavoriteInput_1.ClientUncheckedUpdateWithoutFavoriteInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClientUncheckedUpdateWithoutFavoriteInput_1.ClientUncheckedUpdateWithoutFavoriteInput)
], ClientUpdateToOneWithWhereWithoutFavoriteInput.prototype, "data", void 0);
exports.ClientUpdateToOneWithWhereWithoutFavoriteInput = ClientUpdateToOneWithWhereWithoutFavoriteInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClientUpdateToOneWithWhereWithoutFavoriteInput", {})
], ClientUpdateToOneWithWhereWithoutFavoriteInput);
