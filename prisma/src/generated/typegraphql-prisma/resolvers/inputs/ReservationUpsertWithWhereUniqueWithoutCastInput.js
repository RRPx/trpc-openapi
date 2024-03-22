"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationUpsertWithWhereUniqueWithoutCastInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReservationUncheckedCreateWithoutCastInput_1 = require("../inputs/ReservationUncheckedCreateWithoutCastInput");
const ReservationUncheckedUpdateWithoutCastInput_1 = require("../inputs/ReservationUncheckedUpdateWithoutCastInput");
const ReservationWhereUniqueInput_1 = require("../inputs/ReservationWhereUniqueInput");
let ReservationUpsertWithWhereUniqueWithoutCastInput = class ReservationUpsertWithWhereUniqueWithoutCastInput {
};
exports.ReservationUpsertWithWhereUniqueWithoutCastInput = ReservationUpsertWithWhereUniqueWithoutCastInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationWhereUniqueInput_1.ReservationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReservationWhereUniqueInput_1.ReservationWhereUniqueInput)
], ReservationUpsertWithWhereUniqueWithoutCastInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationUncheckedUpdateWithoutCastInput_1.ReservationUncheckedUpdateWithoutCastInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReservationUncheckedUpdateWithoutCastInput_1.ReservationUncheckedUpdateWithoutCastInput)
], ReservationUpsertWithWhereUniqueWithoutCastInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationUncheckedCreateWithoutCastInput_1.ReservationUncheckedCreateWithoutCastInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReservationUncheckedCreateWithoutCastInput_1.ReservationUncheckedCreateWithoutCastInput)
], ReservationUpsertWithWhereUniqueWithoutCastInput.prototype, "create", void 0);
exports.ReservationUpsertWithWhereUniqueWithoutCastInput = ReservationUpsertWithWhereUniqueWithoutCastInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReservationUpsertWithWhereUniqueWithoutCastInput", {})
], ReservationUpsertWithWhereUniqueWithoutCastInput);
