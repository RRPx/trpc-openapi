"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationUpsertWithWhereUniqueWithoutOption_idInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReservationUncheckedCreateWithoutOption_idInput_1 = require("../inputs/ReservationUncheckedCreateWithoutOption_idInput");
const ReservationUncheckedUpdateWithoutOption_idInput_1 = require("../inputs/ReservationUncheckedUpdateWithoutOption_idInput");
const ReservationWhereUniqueInput_1 = require("../inputs/ReservationWhereUniqueInput");
let ReservationUpsertWithWhereUniqueWithoutOption_idInput = exports.ReservationUpsertWithWhereUniqueWithoutOption_idInput = class ReservationUpsertWithWhereUniqueWithoutOption_idInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationWhereUniqueInput_1.ReservationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReservationWhereUniqueInput_1.ReservationWhereUniqueInput)
], ReservationUpsertWithWhereUniqueWithoutOption_idInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationUncheckedUpdateWithoutOption_idInput_1.ReservationUncheckedUpdateWithoutOption_idInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReservationUncheckedUpdateWithoutOption_idInput_1.ReservationUncheckedUpdateWithoutOption_idInput)
], ReservationUpsertWithWhereUniqueWithoutOption_idInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationUncheckedCreateWithoutOption_idInput_1.ReservationUncheckedCreateWithoutOption_idInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReservationUncheckedCreateWithoutOption_idInput_1.ReservationUncheckedCreateWithoutOption_idInput)
], ReservationUpsertWithWhereUniqueWithoutOption_idInput.prototype, "create", void 0);
exports.ReservationUpsertWithWhereUniqueWithoutOption_idInput = ReservationUpsertWithWhereUniqueWithoutOption_idInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReservationUpsertWithWhereUniqueWithoutOption_idInput", {})
], ReservationUpsertWithWhereUniqueWithoutOption_idInput);
