"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationUpdateManyWithWhereWithoutOption_idInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReservationScalarWhereInput_1 = require("../inputs/ReservationScalarWhereInput");
const ReservationUncheckedUpdateManyWithoutOption_idInput_1 = require("../inputs/ReservationUncheckedUpdateManyWithoutOption_idInput");
let ReservationUpdateManyWithWhereWithoutOption_idInput = exports.ReservationUpdateManyWithWhereWithoutOption_idInput = class ReservationUpdateManyWithWhereWithoutOption_idInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationScalarWhereInput_1.ReservationScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReservationScalarWhereInput_1.ReservationScalarWhereInput)
], ReservationUpdateManyWithWhereWithoutOption_idInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationUncheckedUpdateManyWithoutOption_idInput_1.ReservationUncheckedUpdateManyWithoutOption_idInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReservationUncheckedUpdateManyWithoutOption_idInput_1.ReservationUncheckedUpdateManyWithoutOption_idInput)
], ReservationUpdateManyWithWhereWithoutOption_idInput.prototype, "data", void 0);
exports.ReservationUpdateManyWithWhereWithoutOption_idInput = ReservationUpdateManyWithWhereWithoutOption_idInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReservationUpdateManyWithWhereWithoutOption_idInput", {})
], ReservationUpdateManyWithWhereWithoutOption_idInput);
