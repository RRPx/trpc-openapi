"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationUpdateToOneWithWhereWithoutShift_idInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReservationUncheckedUpdateWithoutShift_idInput_1 = require("../inputs/ReservationUncheckedUpdateWithoutShift_idInput");
const ReservationWhereInput_1 = require("../inputs/ReservationWhereInput");
let ReservationUpdateToOneWithWhereWithoutShift_idInput = class ReservationUpdateToOneWithWhereWithoutShift_idInput {
};
exports.ReservationUpdateToOneWithWhereWithoutShift_idInput = ReservationUpdateToOneWithWhereWithoutShift_idInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationWhereInput_1.ReservationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationWhereInput_1.ReservationWhereInput)
], ReservationUpdateToOneWithWhereWithoutShift_idInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationUncheckedUpdateWithoutShift_idInput_1.ReservationUncheckedUpdateWithoutShift_idInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReservationUncheckedUpdateWithoutShift_idInput_1.ReservationUncheckedUpdateWithoutShift_idInput)
], ReservationUpdateToOneWithWhereWithoutShift_idInput.prototype, "data", void 0);
exports.ReservationUpdateToOneWithWhereWithoutShift_idInput = ReservationUpdateToOneWithWhereWithoutShift_idInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReservationUpdateToOneWithWhereWithoutShift_idInput", {})
], ReservationUpdateToOneWithWhereWithoutShift_idInput);
