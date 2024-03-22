"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationUpdateToOneWithWhereWithoutAddressInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReservationUncheckedUpdateWithoutAddressInput_1 = require("../inputs/ReservationUncheckedUpdateWithoutAddressInput");
const ReservationWhereInput_1 = require("../inputs/ReservationWhereInput");
let ReservationUpdateToOneWithWhereWithoutAddressInput = class ReservationUpdateToOneWithWhereWithoutAddressInput {
};
exports.ReservationUpdateToOneWithWhereWithoutAddressInput = ReservationUpdateToOneWithWhereWithoutAddressInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationWhereInput_1.ReservationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationWhereInput_1.ReservationWhereInput)
], ReservationUpdateToOneWithWhereWithoutAddressInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationUncheckedUpdateWithoutAddressInput_1.ReservationUncheckedUpdateWithoutAddressInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReservationUncheckedUpdateWithoutAddressInput_1.ReservationUncheckedUpdateWithoutAddressInput)
], ReservationUpdateToOneWithWhereWithoutAddressInput.prototype, "data", void 0);
exports.ReservationUpdateToOneWithWhereWithoutAddressInput = ReservationUpdateToOneWithWhereWithoutAddressInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReservationUpdateToOneWithWhereWithoutAddressInput", {})
], ReservationUpdateToOneWithWhereWithoutAddressInput);
