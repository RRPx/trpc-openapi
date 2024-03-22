"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientCreateOrConnectWithoutReservationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClientUncheckedCreateWithoutReservationInput_1 = require("../inputs/ClientUncheckedCreateWithoutReservationInput");
const ClientWhereUniqueInput_1 = require("../inputs/ClientWhereUniqueInput");
let ClientCreateOrConnectWithoutReservationInput = exports.ClientCreateOrConnectWithoutReservationInput = class ClientCreateOrConnectWithoutReservationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientWhereUniqueInput_1.ClientWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClientWhereUniqueInput_1.ClientWhereUniqueInput)
], ClientCreateOrConnectWithoutReservationInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientUncheckedCreateWithoutReservationInput_1.ClientUncheckedCreateWithoutReservationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClientUncheckedCreateWithoutReservationInput_1.ClientUncheckedCreateWithoutReservationInput)
], ClientCreateOrConnectWithoutReservationInput.prototype, "create", void 0);
exports.ClientCreateOrConnectWithoutReservationInput = ClientCreateOrConnectWithoutReservationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClientCreateOrConnectWithoutReservationInput", {})
], ClientCreateOrConnectWithoutReservationInput);
