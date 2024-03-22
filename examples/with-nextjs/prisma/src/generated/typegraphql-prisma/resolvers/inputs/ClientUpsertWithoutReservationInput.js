"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientUpsertWithoutReservationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClientUncheckedCreateWithoutReservationInput_1 = require("../inputs/ClientUncheckedCreateWithoutReservationInput");
const ClientUncheckedUpdateWithoutReservationInput_1 = require("../inputs/ClientUncheckedUpdateWithoutReservationInput");
const ClientWhereInput_1 = require("../inputs/ClientWhereInput");
let ClientUpsertWithoutReservationInput = exports.ClientUpsertWithoutReservationInput = class ClientUpsertWithoutReservationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientUncheckedUpdateWithoutReservationInput_1.ClientUncheckedUpdateWithoutReservationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClientUncheckedUpdateWithoutReservationInput_1.ClientUncheckedUpdateWithoutReservationInput)
], ClientUpsertWithoutReservationInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientUncheckedCreateWithoutReservationInput_1.ClientUncheckedCreateWithoutReservationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClientUncheckedCreateWithoutReservationInput_1.ClientUncheckedCreateWithoutReservationInput)
], ClientUpsertWithoutReservationInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientWhereInput_1.ClientWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientWhereInput_1.ClientWhereInput)
], ClientUpsertWithoutReservationInput.prototype, "where", void 0);
exports.ClientUpsertWithoutReservationInput = ClientUpsertWithoutReservationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClientUpsertWithoutReservationInput", {})
], ClientUpsertWithoutReservationInput);
