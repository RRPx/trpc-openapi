"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationUpdateManyWithWhereWithoutClientInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReservationScalarWhereInput_1 = require("../inputs/ReservationScalarWhereInput");
const ReservationUncheckedUpdateManyWithoutClientInput_1 = require("../inputs/ReservationUncheckedUpdateManyWithoutClientInput");
let ReservationUpdateManyWithWhereWithoutClientInput = exports.ReservationUpdateManyWithWhereWithoutClientInput = class ReservationUpdateManyWithWhereWithoutClientInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationScalarWhereInput_1.ReservationScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReservationScalarWhereInput_1.ReservationScalarWhereInput)
], ReservationUpdateManyWithWhereWithoutClientInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationUncheckedUpdateManyWithoutClientInput_1.ReservationUncheckedUpdateManyWithoutClientInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReservationUncheckedUpdateManyWithoutClientInput_1.ReservationUncheckedUpdateManyWithoutClientInput)
], ReservationUpdateManyWithWhereWithoutClientInput.prototype, "data", void 0);
exports.ReservationUpdateManyWithWhereWithoutClientInput = ReservationUpdateManyWithWhereWithoutClientInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReservationUpdateManyWithWhereWithoutClientInput", {})
], ReservationUpdateManyWithWhereWithoutClientInput);
