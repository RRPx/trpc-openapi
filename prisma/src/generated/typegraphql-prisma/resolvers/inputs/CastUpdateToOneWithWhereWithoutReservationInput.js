"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastUpdateToOneWithWhereWithoutReservationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastUncheckedUpdateWithoutReservationInput_1 = require("../inputs/CastUncheckedUpdateWithoutReservationInput");
const CastWhereInput_1 = require("../inputs/CastWhereInput");
let CastUpdateToOneWithWhereWithoutReservationInput = class CastUpdateToOneWithWhereWithoutReservationInput {
};
exports.CastUpdateToOneWithWhereWithoutReservationInput = CastUpdateToOneWithWhereWithoutReservationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastWhereInput_1.CastWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastWhereInput_1.CastWhereInput)
], CastUpdateToOneWithWhereWithoutReservationInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUncheckedUpdateWithoutReservationInput_1.CastUncheckedUpdateWithoutReservationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CastUncheckedUpdateWithoutReservationInput_1.CastUncheckedUpdateWithoutReservationInput)
], CastUpdateToOneWithWhereWithoutReservationInput.prototype, "data", void 0);
exports.CastUpdateToOneWithWhereWithoutReservationInput = CastUpdateToOneWithWhereWithoutReservationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CastUpdateToOneWithWhereWithoutReservationInput", {})
], CastUpdateToOneWithWhereWithoutReservationInput);
