"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionMasterUpdateWithWhereUniqueWithoutReservationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OptionMasterUncheckedUpdateWithoutReservationInput_1 = require("../inputs/OptionMasterUncheckedUpdateWithoutReservationInput");
const OptionMasterWhereUniqueInput_1 = require("../inputs/OptionMasterWhereUniqueInput");
let OptionMasterUpdateWithWhereUniqueWithoutReservationInput = exports.OptionMasterUpdateWithWhereUniqueWithoutReservationInput = class OptionMasterUpdateWithWhereUniqueWithoutReservationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OptionMasterWhereUniqueInput_1.OptionMasterWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OptionMasterWhereUniqueInput_1.OptionMasterWhereUniqueInput)
], OptionMasterUpdateWithWhereUniqueWithoutReservationInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OptionMasterUncheckedUpdateWithoutReservationInput_1.OptionMasterUncheckedUpdateWithoutReservationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OptionMasterUncheckedUpdateWithoutReservationInput_1.OptionMasterUncheckedUpdateWithoutReservationInput)
], OptionMasterUpdateWithWhereUniqueWithoutReservationInput.prototype, "data", void 0);
exports.OptionMasterUpdateWithWhereUniqueWithoutReservationInput = OptionMasterUpdateWithWhereUniqueWithoutReservationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OptionMasterUpdateWithWhereUniqueWithoutReservationInput", {})
], OptionMasterUpdateWithWhereUniqueWithoutReservationInput);
