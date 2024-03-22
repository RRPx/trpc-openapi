"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressCreateOrConnectWithoutReservationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AddressUncheckedCreateWithoutReservationInput_1 = require("../inputs/AddressUncheckedCreateWithoutReservationInput");
const AddressWhereUniqueInput_1 = require("../inputs/AddressWhereUniqueInput");
let AddressCreateOrConnectWithoutReservationInput = class AddressCreateOrConnectWithoutReservationInput {
};
exports.AddressCreateOrConnectWithoutReservationInput = AddressCreateOrConnectWithoutReservationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressWhereUniqueInput_1.AddressWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AddressWhereUniqueInput_1.AddressWhereUniqueInput)
], AddressCreateOrConnectWithoutReservationInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressUncheckedCreateWithoutReservationInput_1.AddressUncheckedCreateWithoutReservationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AddressUncheckedCreateWithoutReservationInput_1.AddressUncheckedCreateWithoutReservationInput)
], AddressCreateOrConnectWithoutReservationInput.prototype, "create", void 0);
exports.AddressCreateOrConnectWithoutReservationInput = AddressCreateOrConnectWithoutReservationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AddressCreateOrConnectWithoutReservationInput", {})
], AddressCreateOrConnectWithoutReservationInput);
