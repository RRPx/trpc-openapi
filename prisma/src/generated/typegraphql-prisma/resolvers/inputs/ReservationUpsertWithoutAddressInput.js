"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationUpsertWithoutAddressInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReservationUncheckedCreateWithoutAddressInput_1 = require("../inputs/ReservationUncheckedCreateWithoutAddressInput");
const ReservationUncheckedUpdateWithoutAddressInput_1 = require("../inputs/ReservationUncheckedUpdateWithoutAddressInput");
const ReservationWhereInput_1 = require("../inputs/ReservationWhereInput");
let ReservationUpsertWithoutAddressInput = class ReservationUpsertWithoutAddressInput {
};
exports.ReservationUpsertWithoutAddressInput = ReservationUpsertWithoutAddressInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationUncheckedUpdateWithoutAddressInput_1.ReservationUncheckedUpdateWithoutAddressInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReservationUncheckedUpdateWithoutAddressInput_1.ReservationUncheckedUpdateWithoutAddressInput)
], ReservationUpsertWithoutAddressInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationUncheckedCreateWithoutAddressInput_1.ReservationUncheckedCreateWithoutAddressInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReservationUncheckedCreateWithoutAddressInput_1.ReservationUncheckedCreateWithoutAddressInput)
], ReservationUpsertWithoutAddressInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationWhereInput_1.ReservationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationWhereInput_1.ReservationWhereInput)
], ReservationUpsertWithoutAddressInput.prototype, "where", void 0);
exports.ReservationUpsertWithoutAddressInput = ReservationUpsertWithoutAddressInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReservationUpsertWithoutAddressInput", {})
], ReservationUpsertWithoutAddressInput);
