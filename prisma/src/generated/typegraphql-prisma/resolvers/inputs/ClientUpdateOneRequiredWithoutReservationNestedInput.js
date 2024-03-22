"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientUpdateOneRequiredWithoutReservationNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClientCreateOrConnectWithoutReservationInput_1 = require("../inputs/ClientCreateOrConnectWithoutReservationInput");
const ClientUncheckedCreateWithoutReservationInput_1 = require("../inputs/ClientUncheckedCreateWithoutReservationInput");
const ClientUncheckedUpdateWithoutReservationInput_1 = require("../inputs/ClientUncheckedUpdateWithoutReservationInput");
const ClientUpsertWithoutReservationInput_1 = require("../inputs/ClientUpsertWithoutReservationInput");
const ClientWhereUniqueInput_1 = require("../inputs/ClientWhereUniqueInput");
let ClientUpdateOneRequiredWithoutReservationNestedInput = class ClientUpdateOneRequiredWithoutReservationNestedInput {
};
exports.ClientUpdateOneRequiredWithoutReservationNestedInput = ClientUpdateOneRequiredWithoutReservationNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientUncheckedCreateWithoutReservationInput_1.ClientUncheckedCreateWithoutReservationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientUncheckedCreateWithoutReservationInput_1.ClientUncheckedCreateWithoutReservationInput)
], ClientUpdateOneRequiredWithoutReservationNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientCreateOrConnectWithoutReservationInput_1.ClientCreateOrConnectWithoutReservationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientCreateOrConnectWithoutReservationInput_1.ClientCreateOrConnectWithoutReservationInput)
], ClientUpdateOneRequiredWithoutReservationNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientUpsertWithoutReservationInput_1.ClientUpsertWithoutReservationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientUpsertWithoutReservationInput_1.ClientUpsertWithoutReservationInput)
], ClientUpdateOneRequiredWithoutReservationNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientWhereUniqueInput_1.ClientWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientWhereUniqueInput_1.ClientWhereUniqueInput)
], ClientUpdateOneRequiredWithoutReservationNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientUncheckedUpdateWithoutReservationInput_1.ClientUncheckedUpdateWithoutReservationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientUncheckedUpdateWithoutReservationInput_1.ClientUncheckedUpdateWithoutReservationInput)
], ClientUpdateOneRequiredWithoutReservationNestedInput.prototype, "update", void 0);
exports.ClientUpdateOneRequiredWithoutReservationNestedInput = ClientUpdateOneRequiredWithoutReservationNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClientUpdateOneRequiredWithoutReservationNestedInput", {})
], ClientUpdateOneRequiredWithoutReservationNestedInput);
