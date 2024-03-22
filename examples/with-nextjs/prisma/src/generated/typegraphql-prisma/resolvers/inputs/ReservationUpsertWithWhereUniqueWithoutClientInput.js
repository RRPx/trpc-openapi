"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationUpsertWithWhereUniqueWithoutClientInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReservationUncheckedCreateWithoutClientInput_1 = require("../inputs/ReservationUncheckedCreateWithoutClientInput");
const ReservationUncheckedUpdateWithoutClientInput_1 = require("../inputs/ReservationUncheckedUpdateWithoutClientInput");
const ReservationWhereUniqueInput_1 = require("../inputs/ReservationWhereUniqueInput");
let ReservationUpsertWithWhereUniqueWithoutClientInput = exports.ReservationUpsertWithWhereUniqueWithoutClientInput = class ReservationUpsertWithWhereUniqueWithoutClientInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationWhereUniqueInput_1.ReservationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReservationWhereUniqueInput_1.ReservationWhereUniqueInput)
], ReservationUpsertWithWhereUniqueWithoutClientInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationUncheckedUpdateWithoutClientInput_1.ReservationUncheckedUpdateWithoutClientInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReservationUncheckedUpdateWithoutClientInput_1.ReservationUncheckedUpdateWithoutClientInput)
], ReservationUpsertWithWhereUniqueWithoutClientInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationUncheckedCreateWithoutClientInput_1.ReservationUncheckedCreateWithoutClientInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReservationUncheckedCreateWithoutClientInput_1.ReservationUncheckedCreateWithoutClientInput)
], ReservationUpsertWithWhereUniqueWithoutClientInput.prototype, "create", void 0);
exports.ReservationUpsertWithWhereUniqueWithoutClientInput = ReservationUpsertWithWhereUniqueWithoutClientInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReservationUpsertWithWhereUniqueWithoutClientInput", {})
], ReservationUpsertWithWhereUniqueWithoutClientInput);
