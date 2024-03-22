"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressUpdateOneRequiredWithoutReservationNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AddressCreateOrConnectWithoutReservationInput_1 = require("../inputs/AddressCreateOrConnectWithoutReservationInput");
const AddressUncheckedCreateWithoutReservationInput_1 = require("../inputs/AddressUncheckedCreateWithoutReservationInput");
const AddressUncheckedUpdateWithoutReservationInput_1 = require("../inputs/AddressUncheckedUpdateWithoutReservationInput");
const AddressUpsertWithoutReservationInput_1 = require("../inputs/AddressUpsertWithoutReservationInput");
const AddressWhereUniqueInput_1 = require("../inputs/AddressWhereUniqueInput");
let AddressUpdateOneRequiredWithoutReservationNestedInput = class AddressUpdateOneRequiredWithoutReservationNestedInput {
};
exports.AddressUpdateOneRequiredWithoutReservationNestedInput = AddressUpdateOneRequiredWithoutReservationNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressUncheckedCreateWithoutReservationInput_1.AddressUncheckedCreateWithoutReservationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AddressUncheckedCreateWithoutReservationInput_1.AddressUncheckedCreateWithoutReservationInput)
], AddressUpdateOneRequiredWithoutReservationNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressCreateOrConnectWithoutReservationInput_1.AddressCreateOrConnectWithoutReservationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AddressCreateOrConnectWithoutReservationInput_1.AddressCreateOrConnectWithoutReservationInput)
], AddressUpdateOneRequiredWithoutReservationNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressUpsertWithoutReservationInput_1.AddressUpsertWithoutReservationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AddressUpsertWithoutReservationInput_1.AddressUpsertWithoutReservationInput)
], AddressUpdateOneRequiredWithoutReservationNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressWhereUniqueInput_1.AddressWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AddressWhereUniqueInput_1.AddressWhereUniqueInput)
], AddressUpdateOneRequiredWithoutReservationNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressUncheckedUpdateWithoutReservationInput_1.AddressUncheckedUpdateWithoutReservationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AddressUncheckedUpdateWithoutReservationInput_1.AddressUncheckedUpdateWithoutReservationInput)
], AddressUpdateOneRequiredWithoutReservationNestedInput.prototype, "update", void 0);
exports.AddressUpdateOneRequiredWithoutReservationNestedInput = AddressUpdateOneRequiredWithoutReservationNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AddressUpdateOneRequiredWithoutReservationNestedInput", {})
], AddressUpdateOneRequiredWithoutReservationNestedInput);
