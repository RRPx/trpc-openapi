"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionMasterCreateNestedManyWithoutReservationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OptionMasterCreateOrConnectWithoutReservationInput_1 = require("../inputs/OptionMasterCreateOrConnectWithoutReservationInput");
const OptionMasterCreateWithoutReservationInput_1 = require("../inputs/OptionMasterCreateWithoutReservationInput");
const OptionMasterWhereUniqueInput_1 = require("../inputs/OptionMasterWhereUniqueInput");
let OptionMasterCreateNestedManyWithoutReservationInput = class OptionMasterCreateNestedManyWithoutReservationInput {
};
exports.OptionMasterCreateNestedManyWithoutReservationInput = OptionMasterCreateNestedManyWithoutReservationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OptionMasterCreateWithoutReservationInput_1.OptionMasterCreateWithoutReservationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OptionMasterCreateNestedManyWithoutReservationInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OptionMasterCreateOrConnectWithoutReservationInput_1.OptionMasterCreateOrConnectWithoutReservationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OptionMasterCreateNestedManyWithoutReservationInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OptionMasterWhereUniqueInput_1.OptionMasterWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OptionMasterCreateNestedManyWithoutReservationInput.prototype, "connect", void 0);
exports.OptionMasterCreateNestedManyWithoutReservationInput = OptionMasterCreateNestedManyWithoutReservationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OptionMasterCreateNestedManyWithoutReservationInput", {})
], OptionMasterCreateNestedManyWithoutReservationInput);
