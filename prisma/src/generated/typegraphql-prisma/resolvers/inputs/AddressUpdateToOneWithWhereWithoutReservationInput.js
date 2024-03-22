"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressUpdateToOneWithWhereWithoutReservationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AddressUncheckedUpdateWithoutReservationInput_1 = require("../inputs/AddressUncheckedUpdateWithoutReservationInput");
const AddressWhereInput_1 = require("../inputs/AddressWhereInput");
let AddressUpdateToOneWithWhereWithoutReservationInput = class AddressUpdateToOneWithWhereWithoutReservationInput {
};
exports.AddressUpdateToOneWithWhereWithoutReservationInput = AddressUpdateToOneWithWhereWithoutReservationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressWhereInput_1.AddressWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AddressWhereInput_1.AddressWhereInput)
], AddressUpdateToOneWithWhereWithoutReservationInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressUncheckedUpdateWithoutReservationInput_1.AddressUncheckedUpdateWithoutReservationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AddressUncheckedUpdateWithoutReservationInput_1.AddressUncheckedUpdateWithoutReservationInput)
], AddressUpdateToOneWithWhereWithoutReservationInput.prototype, "data", void 0);
exports.AddressUpdateToOneWithWhereWithoutReservationInput = AddressUpdateToOneWithWhereWithoutReservationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AddressUpdateToOneWithWhereWithoutReservationInput", {})
], AddressUpdateToOneWithWhereWithoutReservationInput);
