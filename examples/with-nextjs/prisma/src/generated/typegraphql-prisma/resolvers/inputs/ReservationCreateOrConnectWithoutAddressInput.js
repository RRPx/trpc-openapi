"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationCreateOrConnectWithoutAddressInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReservationUncheckedCreateWithoutAddressInput_1 = require("../inputs/ReservationUncheckedCreateWithoutAddressInput");
const ReservationWhereUniqueInput_1 = require("../inputs/ReservationWhereUniqueInput");
let ReservationCreateOrConnectWithoutAddressInput = exports.ReservationCreateOrConnectWithoutAddressInput = class ReservationCreateOrConnectWithoutAddressInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationWhereUniqueInput_1.ReservationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReservationWhereUniqueInput_1.ReservationWhereUniqueInput)
], ReservationCreateOrConnectWithoutAddressInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationUncheckedCreateWithoutAddressInput_1.ReservationUncheckedCreateWithoutAddressInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReservationUncheckedCreateWithoutAddressInput_1.ReservationUncheckedCreateWithoutAddressInput)
], ReservationCreateOrConnectWithoutAddressInput.prototype, "create", void 0);
exports.ReservationCreateOrConnectWithoutAddressInput = ReservationCreateOrConnectWithoutAddressInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReservationCreateOrConnectWithoutAddressInput", {})
], ReservationCreateOrConnectWithoutAddressInput);
