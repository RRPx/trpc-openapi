"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientCreateNestedOneWithoutReservationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClientCreateOrConnectWithoutReservationInput_1 = require("../inputs/ClientCreateOrConnectWithoutReservationInput");
const ClientUncheckedCreateWithoutReservationInput_1 = require("../inputs/ClientUncheckedCreateWithoutReservationInput");
const ClientWhereUniqueInput_1 = require("../inputs/ClientWhereUniqueInput");
let ClientCreateNestedOneWithoutReservationInput = exports.ClientCreateNestedOneWithoutReservationInput = class ClientCreateNestedOneWithoutReservationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientUncheckedCreateWithoutReservationInput_1.ClientUncheckedCreateWithoutReservationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientUncheckedCreateWithoutReservationInput_1.ClientUncheckedCreateWithoutReservationInput)
], ClientCreateNestedOneWithoutReservationInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientCreateOrConnectWithoutReservationInput_1.ClientCreateOrConnectWithoutReservationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientCreateOrConnectWithoutReservationInput_1.ClientCreateOrConnectWithoutReservationInput)
], ClientCreateNestedOneWithoutReservationInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientWhereUniqueInput_1.ClientWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientWhereUniqueInput_1.ClientWhereUniqueInput)
], ClientCreateNestedOneWithoutReservationInput.prototype, "connect", void 0);
exports.ClientCreateNestedOneWithoutReservationInput = ClientCreateNestedOneWithoutReservationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClientCreateNestedOneWithoutReservationInput", {})
], ClientCreateNestedOneWithoutReservationInput);
