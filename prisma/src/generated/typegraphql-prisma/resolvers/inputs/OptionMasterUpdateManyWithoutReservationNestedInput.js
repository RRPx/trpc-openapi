"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionMasterUpdateManyWithoutReservationNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OptionMasterCreateOrConnectWithoutReservationInput_1 = require("../inputs/OptionMasterCreateOrConnectWithoutReservationInput");
const OptionMasterCreateWithoutReservationInput_1 = require("../inputs/OptionMasterCreateWithoutReservationInput");
const OptionMasterScalarWhereInput_1 = require("../inputs/OptionMasterScalarWhereInput");
const OptionMasterUpdateManyWithWhereWithoutReservationInput_1 = require("../inputs/OptionMasterUpdateManyWithWhereWithoutReservationInput");
const OptionMasterUpdateWithWhereUniqueWithoutReservationInput_1 = require("../inputs/OptionMasterUpdateWithWhereUniqueWithoutReservationInput");
const OptionMasterUpsertWithWhereUniqueWithoutReservationInput_1 = require("../inputs/OptionMasterUpsertWithWhereUniqueWithoutReservationInput");
const OptionMasterWhereUniqueInput_1 = require("../inputs/OptionMasterWhereUniqueInput");
let OptionMasterUpdateManyWithoutReservationNestedInput = class OptionMasterUpdateManyWithoutReservationNestedInput {
};
exports.OptionMasterUpdateManyWithoutReservationNestedInput = OptionMasterUpdateManyWithoutReservationNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OptionMasterCreateWithoutReservationInput_1.OptionMasterCreateWithoutReservationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OptionMasterUpdateManyWithoutReservationNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OptionMasterCreateOrConnectWithoutReservationInput_1.OptionMasterCreateOrConnectWithoutReservationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OptionMasterUpdateManyWithoutReservationNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OptionMasterUpsertWithWhereUniqueWithoutReservationInput_1.OptionMasterUpsertWithWhereUniqueWithoutReservationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OptionMasterUpdateManyWithoutReservationNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OptionMasterWhereUniqueInput_1.OptionMasterWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OptionMasterUpdateManyWithoutReservationNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OptionMasterWhereUniqueInput_1.OptionMasterWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OptionMasterUpdateManyWithoutReservationNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OptionMasterWhereUniqueInput_1.OptionMasterWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OptionMasterUpdateManyWithoutReservationNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OptionMasterWhereUniqueInput_1.OptionMasterWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OptionMasterUpdateManyWithoutReservationNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OptionMasterUpdateWithWhereUniqueWithoutReservationInput_1.OptionMasterUpdateWithWhereUniqueWithoutReservationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OptionMasterUpdateManyWithoutReservationNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OptionMasterUpdateManyWithWhereWithoutReservationInput_1.OptionMasterUpdateManyWithWhereWithoutReservationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OptionMasterUpdateManyWithoutReservationNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OptionMasterScalarWhereInput_1.OptionMasterScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OptionMasterUpdateManyWithoutReservationNestedInput.prototype, "deleteMany", void 0);
exports.OptionMasterUpdateManyWithoutReservationNestedInput = OptionMasterUpdateManyWithoutReservationNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OptionMasterUpdateManyWithoutReservationNestedInput", {})
], OptionMasterUpdateManyWithoutReservationNestedInput);
