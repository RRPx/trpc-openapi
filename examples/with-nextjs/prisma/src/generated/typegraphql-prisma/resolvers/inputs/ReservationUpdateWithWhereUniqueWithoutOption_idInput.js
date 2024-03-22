"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationUpdateWithWhereUniqueWithoutOption_idInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReservationUncheckedUpdateWithoutOption_idInput_1 = require("../inputs/ReservationUncheckedUpdateWithoutOption_idInput");
const ReservationWhereUniqueInput_1 = require("../inputs/ReservationWhereUniqueInput");
let ReservationUpdateWithWhereUniqueWithoutOption_idInput = exports.ReservationUpdateWithWhereUniqueWithoutOption_idInput = class ReservationUpdateWithWhereUniqueWithoutOption_idInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationWhereUniqueInput_1.ReservationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReservationWhereUniqueInput_1.ReservationWhereUniqueInput)
], ReservationUpdateWithWhereUniqueWithoutOption_idInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationUncheckedUpdateWithoutOption_idInput_1.ReservationUncheckedUpdateWithoutOption_idInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReservationUncheckedUpdateWithoutOption_idInput_1.ReservationUncheckedUpdateWithoutOption_idInput)
], ReservationUpdateWithWhereUniqueWithoutOption_idInput.prototype, "data", void 0);
exports.ReservationUpdateWithWhereUniqueWithoutOption_idInput = ReservationUpdateWithWhereUniqueWithoutOption_idInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReservationUpdateWithWhereUniqueWithoutOption_idInput", {})
], ReservationUpdateWithWhereUniqueWithoutOption_idInput);
