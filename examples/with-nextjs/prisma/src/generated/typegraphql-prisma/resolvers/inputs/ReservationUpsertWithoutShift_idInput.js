"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationUpsertWithoutShift_idInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReservationUncheckedCreateWithoutShift_idInput_1 = require("../inputs/ReservationUncheckedCreateWithoutShift_idInput");
const ReservationUncheckedUpdateWithoutShift_idInput_1 = require("../inputs/ReservationUncheckedUpdateWithoutShift_idInput");
const ReservationWhereInput_1 = require("../inputs/ReservationWhereInput");
let ReservationUpsertWithoutShift_idInput = exports.ReservationUpsertWithoutShift_idInput = class ReservationUpsertWithoutShift_idInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationUncheckedUpdateWithoutShift_idInput_1.ReservationUncheckedUpdateWithoutShift_idInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReservationUncheckedUpdateWithoutShift_idInput_1.ReservationUncheckedUpdateWithoutShift_idInput)
], ReservationUpsertWithoutShift_idInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationUncheckedCreateWithoutShift_idInput_1.ReservationUncheckedCreateWithoutShift_idInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReservationUncheckedCreateWithoutShift_idInput_1.ReservationUncheckedCreateWithoutShift_idInput)
], ReservationUpsertWithoutShift_idInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationWhereInput_1.ReservationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationWhereInput_1.ReservationWhereInput)
], ReservationUpsertWithoutShift_idInput.prototype, "where", void 0);
exports.ReservationUpsertWithoutShift_idInput = ReservationUpsertWithoutShift_idInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReservationUpsertWithoutShift_idInput", {})
], ReservationUpsertWithoutShift_idInput);
