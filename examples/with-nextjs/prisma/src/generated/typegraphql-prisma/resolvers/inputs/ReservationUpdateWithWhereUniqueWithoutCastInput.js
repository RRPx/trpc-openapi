"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationUpdateWithWhereUniqueWithoutCastInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReservationUncheckedUpdateWithoutCastInput_1 = require("../inputs/ReservationUncheckedUpdateWithoutCastInput");
const ReservationWhereUniqueInput_1 = require("../inputs/ReservationWhereUniqueInput");
let ReservationUpdateWithWhereUniqueWithoutCastInput = exports.ReservationUpdateWithWhereUniqueWithoutCastInput = class ReservationUpdateWithWhereUniqueWithoutCastInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationWhereUniqueInput_1.ReservationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReservationWhereUniqueInput_1.ReservationWhereUniqueInput)
], ReservationUpdateWithWhereUniqueWithoutCastInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationUncheckedUpdateWithoutCastInput_1.ReservationUncheckedUpdateWithoutCastInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReservationUncheckedUpdateWithoutCastInput_1.ReservationUncheckedUpdateWithoutCastInput)
], ReservationUpdateWithWhereUniqueWithoutCastInput.prototype, "data", void 0);
exports.ReservationUpdateWithWhereUniqueWithoutCastInput = ReservationUpdateWithWhereUniqueWithoutCastInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReservationUpdateWithWhereUniqueWithoutCastInput", {})
], ReservationUpdateWithWhereUniqueWithoutCastInput);
