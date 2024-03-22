"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientUpdateToOneWithWhereWithoutReservationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClientUncheckedUpdateWithoutReservationInput_1 = require("../inputs/ClientUncheckedUpdateWithoutReservationInput");
const ClientWhereInput_1 = require("../inputs/ClientWhereInput");
let ClientUpdateToOneWithWhereWithoutReservationInput = exports.ClientUpdateToOneWithWhereWithoutReservationInput = class ClientUpdateToOneWithWhereWithoutReservationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientWhereInput_1.ClientWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientWhereInput_1.ClientWhereInput)
], ClientUpdateToOneWithWhereWithoutReservationInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientUncheckedUpdateWithoutReservationInput_1.ClientUncheckedUpdateWithoutReservationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClientUncheckedUpdateWithoutReservationInput_1.ClientUncheckedUpdateWithoutReservationInput)
], ClientUpdateToOneWithWhereWithoutReservationInput.prototype, "data", void 0);
exports.ClientUpdateToOneWithWhereWithoutReservationInput = ClientUpdateToOneWithWhereWithoutReservationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClientUpdateToOneWithWhereWithoutReservationInput", {})
], ClientUpdateToOneWithWhereWithoutReservationInput);
