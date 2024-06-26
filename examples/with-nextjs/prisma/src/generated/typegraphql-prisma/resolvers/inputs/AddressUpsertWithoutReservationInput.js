"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressUpsertWithoutReservationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AddressUncheckedCreateWithoutReservationInput_1 = require("../inputs/AddressUncheckedCreateWithoutReservationInput");
const AddressUncheckedUpdateWithoutReservationInput_1 = require("../inputs/AddressUncheckedUpdateWithoutReservationInput");
const AddressWhereInput_1 = require("../inputs/AddressWhereInput");
let AddressUpsertWithoutReservationInput = exports.AddressUpsertWithoutReservationInput = class AddressUpsertWithoutReservationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressUncheckedUpdateWithoutReservationInput_1.AddressUncheckedUpdateWithoutReservationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AddressUncheckedUpdateWithoutReservationInput_1.AddressUncheckedUpdateWithoutReservationInput)
], AddressUpsertWithoutReservationInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressUncheckedCreateWithoutReservationInput_1.AddressUncheckedCreateWithoutReservationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AddressUncheckedCreateWithoutReservationInput_1.AddressUncheckedCreateWithoutReservationInput)
], AddressUpsertWithoutReservationInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressWhereInput_1.AddressWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AddressWhereInput_1.AddressWhereInput)
], AddressUpsertWithoutReservationInput.prototype, "where", void 0);
exports.AddressUpsertWithoutReservationInput = AddressUpsertWithoutReservationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AddressUpsertWithoutReservationInput", {})
], AddressUpsertWithoutReservationInput);
