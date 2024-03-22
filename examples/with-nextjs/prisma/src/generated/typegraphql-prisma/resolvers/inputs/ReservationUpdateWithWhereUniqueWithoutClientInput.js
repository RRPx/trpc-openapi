"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationUpdateWithWhereUniqueWithoutClientInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReservationUncheckedUpdateWithoutClientInput_1 = require("../inputs/ReservationUncheckedUpdateWithoutClientInput");
const ReservationWhereUniqueInput_1 = require("../inputs/ReservationWhereUniqueInput");
let ReservationUpdateWithWhereUniqueWithoutClientInput = exports.ReservationUpdateWithWhereUniqueWithoutClientInput = class ReservationUpdateWithWhereUniqueWithoutClientInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationWhereUniqueInput_1.ReservationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReservationWhereUniqueInput_1.ReservationWhereUniqueInput)
], ReservationUpdateWithWhereUniqueWithoutClientInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationUncheckedUpdateWithoutClientInput_1.ReservationUncheckedUpdateWithoutClientInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReservationUncheckedUpdateWithoutClientInput_1.ReservationUncheckedUpdateWithoutClientInput)
], ReservationUpdateWithWhereUniqueWithoutClientInput.prototype, "data", void 0);
exports.ReservationUpdateWithWhereUniqueWithoutClientInput = ReservationUpdateWithWhereUniqueWithoutClientInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReservationUpdateWithWhereUniqueWithoutClientInput", {})
], ReservationUpdateWithWhereUniqueWithoutClientInput);
