"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationUncheckedCreateNestedOneWithoutAddressInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReservationCreateOrConnectWithoutAddressInput_1 = require("../inputs/ReservationCreateOrConnectWithoutAddressInput");
const ReservationUncheckedCreateWithoutAddressInput_1 = require("../inputs/ReservationUncheckedCreateWithoutAddressInput");
const ReservationWhereUniqueInput_1 = require("../inputs/ReservationWhereUniqueInput");
let ReservationUncheckedCreateNestedOneWithoutAddressInput = class ReservationUncheckedCreateNestedOneWithoutAddressInput {
};
exports.ReservationUncheckedCreateNestedOneWithoutAddressInput = ReservationUncheckedCreateNestedOneWithoutAddressInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationUncheckedCreateWithoutAddressInput_1.ReservationUncheckedCreateWithoutAddressInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationUncheckedCreateWithoutAddressInput_1.ReservationUncheckedCreateWithoutAddressInput)
], ReservationUncheckedCreateNestedOneWithoutAddressInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationCreateOrConnectWithoutAddressInput_1.ReservationCreateOrConnectWithoutAddressInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationCreateOrConnectWithoutAddressInput_1.ReservationCreateOrConnectWithoutAddressInput)
], ReservationUncheckedCreateNestedOneWithoutAddressInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationWhereUniqueInput_1.ReservationWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationWhereUniqueInput_1.ReservationWhereUniqueInput)
], ReservationUncheckedCreateNestedOneWithoutAddressInput.prototype, "connect", void 0);
exports.ReservationUncheckedCreateNestedOneWithoutAddressInput = ReservationUncheckedCreateNestedOneWithoutAddressInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReservationUncheckedCreateNestedOneWithoutAddressInput", {})
], ReservationUncheckedCreateNestedOneWithoutAddressInput);
