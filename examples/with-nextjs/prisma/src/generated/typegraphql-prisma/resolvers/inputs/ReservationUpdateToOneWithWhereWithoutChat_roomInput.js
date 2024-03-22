"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationUpdateToOneWithWhereWithoutChat_roomInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReservationUncheckedUpdateWithoutChat_roomInput_1 = require("../inputs/ReservationUncheckedUpdateWithoutChat_roomInput");
const ReservationWhereInput_1 = require("../inputs/ReservationWhereInput");
let ReservationUpdateToOneWithWhereWithoutChat_roomInput = exports.ReservationUpdateToOneWithWhereWithoutChat_roomInput = class ReservationUpdateToOneWithWhereWithoutChat_roomInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationWhereInput_1.ReservationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationWhereInput_1.ReservationWhereInput)
], ReservationUpdateToOneWithWhereWithoutChat_roomInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationUncheckedUpdateWithoutChat_roomInput_1.ReservationUncheckedUpdateWithoutChat_roomInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReservationUncheckedUpdateWithoutChat_roomInput_1.ReservationUncheckedUpdateWithoutChat_roomInput)
], ReservationUpdateToOneWithWhereWithoutChat_roomInput.prototype, "data", void 0);
exports.ReservationUpdateToOneWithWhereWithoutChat_roomInput = ReservationUpdateToOneWithWhereWithoutChat_roomInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReservationUpdateToOneWithWhereWithoutChat_roomInput", {})
], ReservationUpdateToOneWithWhereWithoutChat_roomInput);
