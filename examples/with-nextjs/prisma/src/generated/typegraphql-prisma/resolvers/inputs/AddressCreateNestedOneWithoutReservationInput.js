"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressCreateNestedOneWithoutReservationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AddressCreateOrConnectWithoutReservationInput_1 = require("../inputs/AddressCreateOrConnectWithoutReservationInput");
const AddressUncheckedCreateWithoutReservationInput_1 = require("../inputs/AddressUncheckedCreateWithoutReservationInput");
const AddressWhereUniqueInput_1 = require("../inputs/AddressWhereUniqueInput");
let AddressCreateNestedOneWithoutReservationInput = exports.AddressCreateNestedOneWithoutReservationInput = class AddressCreateNestedOneWithoutReservationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressUncheckedCreateWithoutReservationInput_1.AddressUncheckedCreateWithoutReservationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AddressUncheckedCreateWithoutReservationInput_1.AddressUncheckedCreateWithoutReservationInput)
], AddressCreateNestedOneWithoutReservationInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressCreateOrConnectWithoutReservationInput_1.AddressCreateOrConnectWithoutReservationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AddressCreateOrConnectWithoutReservationInput_1.AddressCreateOrConnectWithoutReservationInput)
], AddressCreateNestedOneWithoutReservationInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressWhereUniqueInput_1.AddressWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AddressWhereUniqueInput_1.AddressWhereUniqueInput)
], AddressCreateNestedOneWithoutReservationInput.prototype, "connect", void 0);
exports.AddressCreateNestedOneWithoutReservationInput = AddressCreateNestedOneWithoutReservationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AddressCreateNestedOneWithoutReservationInput", {})
], AddressCreateNestedOneWithoutReservationInput);
