"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationUpsertWithoutChat_roomInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReservationUncheckedCreateWithoutChat_roomInput_1 = require("../inputs/ReservationUncheckedCreateWithoutChat_roomInput");
const ReservationUncheckedUpdateWithoutChat_roomInput_1 = require("../inputs/ReservationUncheckedUpdateWithoutChat_roomInput");
const ReservationWhereInput_1 = require("../inputs/ReservationWhereInput");
let ReservationUpsertWithoutChat_roomInput = exports.ReservationUpsertWithoutChat_roomInput = class ReservationUpsertWithoutChat_roomInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationUncheckedUpdateWithoutChat_roomInput_1.ReservationUncheckedUpdateWithoutChat_roomInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReservationUncheckedUpdateWithoutChat_roomInput_1.ReservationUncheckedUpdateWithoutChat_roomInput)
], ReservationUpsertWithoutChat_roomInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationUncheckedCreateWithoutChat_roomInput_1.ReservationUncheckedCreateWithoutChat_roomInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReservationUncheckedCreateWithoutChat_roomInput_1.ReservationUncheckedCreateWithoutChat_roomInput)
], ReservationUpsertWithoutChat_roomInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationWhereInput_1.ReservationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationWhereInput_1.ReservationWhereInput)
], ReservationUpsertWithoutChat_roomInput.prototype, "where", void 0);
exports.ReservationUpsertWithoutChat_roomInput = ReservationUpsertWithoutChat_roomInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReservationUpsertWithoutChat_roomInput", {})
], ReservationUpsertWithoutChat_roomInput);
