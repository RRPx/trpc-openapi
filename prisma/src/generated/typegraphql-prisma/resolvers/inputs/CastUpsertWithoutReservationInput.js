"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastUpsertWithoutReservationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastUncheckedCreateWithoutReservationInput_1 = require("../inputs/CastUncheckedCreateWithoutReservationInput");
const CastUncheckedUpdateWithoutReservationInput_1 = require("../inputs/CastUncheckedUpdateWithoutReservationInput");
const CastWhereInput_1 = require("../inputs/CastWhereInput");
let CastUpsertWithoutReservationInput = class CastUpsertWithoutReservationInput {
};
exports.CastUpsertWithoutReservationInput = CastUpsertWithoutReservationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUncheckedUpdateWithoutReservationInput_1.CastUncheckedUpdateWithoutReservationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CastUncheckedUpdateWithoutReservationInput_1.CastUncheckedUpdateWithoutReservationInput)
], CastUpsertWithoutReservationInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUncheckedCreateWithoutReservationInput_1.CastUncheckedCreateWithoutReservationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CastUncheckedCreateWithoutReservationInput_1.CastUncheckedCreateWithoutReservationInput)
], CastUpsertWithoutReservationInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastWhereInput_1.CastWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastWhereInput_1.CastWhereInput)
], CastUpsertWithoutReservationInput.prototype, "where", void 0);
exports.CastUpsertWithoutReservationInput = CastUpsertWithoutReservationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CastUpsertWithoutReservationInput", {})
], CastUpsertWithoutReservationInput);
