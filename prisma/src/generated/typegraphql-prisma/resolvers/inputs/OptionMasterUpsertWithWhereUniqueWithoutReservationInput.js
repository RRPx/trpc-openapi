"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionMasterUpsertWithWhereUniqueWithoutReservationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OptionMasterUncheckedCreateWithoutReservationInput_1 = require("../inputs/OptionMasterUncheckedCreateWithoutReservationInput");
const OptionMasterUncheckedUpdateWithoutReservationInput_1 = require("../inputs/OptionMasterUncheckedUpdateWithoutReservationInput");
const OptionMasterWhereUniqueInput_1 = require("../inputs/OptionMasterWhereUniqueInput");
let OptionMasterUpsertWithWhereUniqueWithoutReservationInput = class OptionMasterUpsertWithWhereUniqueWithoutReservationInput {
};
exports.OptionMasterUpsertWithWhereUniqueWithoutReservationInput = OptionMasterUpsertWithWhereUniqueWithoutReservationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OptionMasterWhereUniqueInput_1.OptionMasterWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OptionMasterWhereUniqueInput_1.OptionMasterWhereUniqueInput)
], OptionMasterUpsertWithWhereUniqueWithoutReservationInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OptionMasterUncheckedUpdateWithoutReservationInput_1.OptionMasterUncheckedUpdateWithoutReservationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OptionMasterUncheckedUpdateWithoutReservationInput_1.OptionMasterUncheckedUpdateWithoutReservationInput)
], OptionMasterUpsertWithWhereUniqueWithoutReservationInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OptionMasterUncheckedCreateWithoutReservationInput_1.OptionMasterUncheckedCreateWithoutReservationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OptionMasterUncheckedCreateWithoutReservationInput_1.OptionMasterUncheckedCreateWithoutReservationInput)
], OptionMasterUpsertWithWhereUniqueWithoutReservationInput.prototype, "create", void 0);
exports.OptionMasterUpsertWithWhereUniqueWithoutReservationInput = OptionMasterUpsertWithWhereUniqueWithoutReservationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OptionMasterUpsertWithWhereUniqueWithoutReservationInput", {})
], OptionMasterUpsertWithWhereUniqueWithoutReservationInput);
