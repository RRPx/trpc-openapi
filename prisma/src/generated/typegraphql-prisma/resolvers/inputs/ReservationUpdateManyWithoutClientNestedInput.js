"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationUpdateManyWithoutClientNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReservationCreateManyClientInputEnvelope_1 = require("../inputs/ReservationCreateManyClientInputEnvelope");
const ReservationCreateOrConnectWithoutClientInput_1 = require("../inputs/ReservationCreateOrConnectWithoutClientInput");
const ReservationCreateWithoutClientInput_1 = require("../inputs/ReservationCreateWithoutClientInput");
const ReservationScalarWhereInput_1 = require("../inputs/ReservationScalarWhereInput");
const ReservationUpdateManyWithWhereWithoutClientInput_1 = require("../inputs/ReservationUpdateManyWithWhereWithoutClientInput");
const ReservationUpdateWithWhereUniqueWithoutClientInput_1 = require("../inputs/ReservationUpdateWithWhereUniqueWithoutClientInput");
const ReservationUpsertWithWhereUniqueWithoutClientInput_1 = require("../inputs/ReservationUpsertWithWhereUniqueWithoutClientInput");
const ReservationWhereUniqueInput_1 = require("../inputs/ReservationWhereUniqueInput");
let ReservationUpdateManyWithoutClientNestedInput = class ReservationUpdateManyWithoutClientNestedInput {
};
exports.ReservationUpdateManyWithoutClientNestedInput = ReservationUpdateManyWithoutClientNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReservationCreateWithoutClientInput_1.ReservationCreateWithoutClientInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReservationUpdateManyWithoutClientNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReservationCreateOrConnectWithoutClientInput_1.ReservationCreateOrConnectWithoutClientInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReservationUpdateManyWithoutClientNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReservationUpsertWithWhereUniqueWithoutClientInput_1.ReservationUpsertWithWhereUniqueWithoutClientInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReservationUpdateManyWithoutClientNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationCreateManyClientInputEnvelope_1.ReservationCreateManyClientInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationCreateManyClientInputEnvelope_1.ReservationCreateManyClientInputEnvelope)
], ReservationUpdateManyWithoutClientNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReservationWhereUniqueInput_1.ReservationWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReservationUpdateManyWithoutClientNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReservationWhereUniqueInput_1.ReservationWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReservationUpdateManyWithoutClientNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReservationWhereUniqueInput_1.ReservationWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReservationUpdateManyWithoutClientNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReservationWhereUniqueInput_1.ReservationWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReservationUpdateManyWithoutClientNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReservationUpdateWithWhereUniqueWithoutClientInput_1.ReservationUpdateWithWhereUniqueWithoutClientInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReservationUpdateManyWithoutClientNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReservationUpdateManyWithWhereWithoutClientInput_1.ReservationUpdateManyWithWhereWithoutClientInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReservationUpdateManyWithoutClientNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReservationScalarWhereInput_1.ReservationScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReservationUpdateManyWithoutClientNestedInput.prototype, "deleteMany", void 0);
exports.ReservationUpdateManyWithoutClientNestedInput = ReservationUpdateManyWithoutClientNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReservationUpdateManyWithoutClientNestedInput", {})
], ReservationUpdateManyWithoutClientNestedInput);
