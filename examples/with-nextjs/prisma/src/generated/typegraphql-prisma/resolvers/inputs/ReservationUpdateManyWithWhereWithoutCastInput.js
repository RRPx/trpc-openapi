"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationUpdateManyWithWhereWithoutCastInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReservationScalarWhereInput_1 = require("../inputs/ReservationScalarWhereInput");
const ReservationUncheckedUpdateManyWithoutCastInput_1 = require("../inputs/ReservationUncheckedUpdateManyWithoutCastInput");
let ReservationUpdateManyWithWhereWithoutCastInput = exports.ReservationUpdateManyWithWhereWithoutCastInput = class ReservationUpdateManyWithWhereWithoutCastInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationScalarWhereInput_1.ReservationScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReservationScalarWhereInput_1.ReservationScalarWhereInput)
], ReservationUpdateManyWithWhereWithoutCastInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationUncheckedUpdateManyWithoutCastInput_1.ReservationUncheckedUpdateManyWithoutCastInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReservationUncheckedUpdateManyWithoutCastInput_1.ReservationUncheckedUpdateManyWithoutCastInput)
], ReservationUpdateManyWithWhereWithoutCastInput.prototype, "data", void 0);
exports.ReservationUpdateManyWithWhereWithoutCastInput = ReservationUpdateManyWithWhereWithoutCastInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReservationUpdateManyWithWhereWithoutCastInput", {})
], ReservationUpdateManyWithWhereWithoutCastInput);
