"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionMasterCreateOrConnectWithoutReservationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OptionMasterUncheckedCreateWithoutReservationInput_1 = require("../inputs/OptionMasterUncheckedCreateWithoutReservationInput");
const OptionMasterWhereUniqueInput_1 = require("../inputs/OptionMasterWhereUniqueInput");
let OptionMasterCreateOrConnectWithoutReservationInput = exports.OptionMasterCreateOrConnectWithoutReservationInput = class OptionMasterCreateOrConnectWithoutReservationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OptionMasterWhereUniqueInput_1.OptionMasterWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OptionMasterWhereUniqueInput_1.OptionMasterWhereUniqueInput)
], OptionMasterCreateOrConnectWithoutReservationInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OptionMasterUncheckedCreateWithoutReservationInput_1.OptionMasterUncheckedCreateWithoutReservationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OptionMasterUncheckedCreateWithoutReservationInput_1.OptionMasterUncheckedCreateWithoutReservationInput)
], OptionMasterCreateOrConnectWithoutReservationInput.prototype, "create", void 0);
exports.OptionMasterCreateOrConnectWithoutReservationInput = OptionMasterCreateOrConnectWithoutReservationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OptionMasterCreateOrConnectWithoutReservationInput", {})
], OptionMasterCreateOrConnectWithoutReservationInput);
