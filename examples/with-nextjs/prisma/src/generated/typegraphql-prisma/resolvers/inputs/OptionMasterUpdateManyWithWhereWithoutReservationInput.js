"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionMasterUpdateManyWithWhereWithoutReservationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OptionMasterScalarWhereInput_1 = require("../inputs/OptionMasterScalarWhereInput");
const OptionMasterUncheckedUpdateManyWithoutReservationInput_1 = require("../inputs/OptionMasterUncheckedUpdateManyWithoutReservationInput");
let OptionMasterUpdateManyWithWhereWithoutReservationInput = exports.OptionMasterUpdateManyWithWhereWithoutReservationInput = class OptionMasterUpdateManyWithWhereWithoutReservationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OptionMasterScalarWhereInput_1.OptionMasterScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OptionMasterScalarWhereInput_1.OptionMasterScalarWhereInput)
], OptionMasterUpdateManyWithWhereWithoutReservationInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OptionMasterUncheckedUpdateManyWithoutReservationInput_1.OptionMasterUncheckedUpdateManyWithoutReservationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OptionMasterUncheckedUpdateManyWithoutReservationInput_1.OptionMasterUncheckedUpdateManyWithoutReservationInput)
], OptionMasterUpdateManyWithWhereWithoutReservationInput.prototype, "data", void 0);
exports.OptionMasterUpdateManyWithWhereWithoutReservationInput = OptionMasterUpdateManyWithWhereWithoutReservationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OptionMasterUpdateManyWithWhereWithoutReservationInput", {})
], OptionMasterUpdateManyWithWhereWithoutReservationInput);
