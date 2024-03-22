"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationUpdateManyWithoutCastNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReservationCreateManyCastInputEnvelope_1 = require("../inputs/ReservationCreateManyCastInputEnvelope");
const ReservationCreateOrConnectWithoutCastInput_1 = require("../inputs/ReservationCreateOrConnectWithoutCastInput");
const ReservationCreateWithoutCastInput_1 = require("../inputs/ReservationCreateWithoutCastInput");
const ReservationScalarWhereInput_1 = require("../inputs/ReservationScalarWhereInput");
const ReservationUpdateManyWithWhereWithoutCastInput_1 = require("../inputs/ReservationUpdateManyWithWhereWithoutCastInput");
const ReservationUpdateWithWhereUniqueWithoutCastInput_1 = require("../inputs/ReservationUpdateWithWhereUniqueWithoutCastInput");
const ReservationUpsertWithWhereUniqueWithoutCastInput_1 = require("../inputs/ReservationUpsertWithWhereUniqueWithoutCastInput");
const ReservationWhereUniqueInput_1 = require("../inputs/ReservationWhereUniqueInput");
let ReservationUpdateManyWithoutCastNestedInput = class ReservationUpdateManyWithoutCastNestedInput {
};
exports.ReservationUpdateManyWithoutCastNestedInput = ReservationUpdateManyWithoutCastNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReservationCreateWithoutCastInput_1.ReservationCreateWithoutCastInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReservationUpdateManyWithoutCastNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReservationCreateOrConnectWithoutCastInput_1.ReservationCreateOrConnectWithoutCastInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReservationUpdateManyWithoutCastNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReservationUpsertWithWhereUniqueWithoutCastInput_1.ReservationUpsertWithWhereUniqueWithoutCastInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReservationUpdateManyWithoutCastNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationCreateManyCastInputEnvelope_1.ReservationCreateManyCastInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationCreateManyCastInputEnvelope_1.ReservationCreateManyCastInputEnvelope)
], ReservationUpdateManyWithoutCastNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReservationWhereUniqueInput_1.ReservationWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReservationUpdateManyWithoutCastNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReservationWhereUniqueInput_1.ReservationWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReservationUpdateManyWithoutCastNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReservationWhereUniqueInput_1.ReservationWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReservationUpdateManyWithoutCastNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReservationWhereUniqueInput_1.ReservationWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReservationUpdateManyWithoutCastNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReservationUpdateWithWhereUniqueWithoutCastInput_1.ReservationUpdateWithWhereUniqueWithoutCastInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReservationUpdateManyWithoutCastNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReservationUpdateManyWithWhereWithoutCastInput_1.ReservationUpdateManyWithWhereWithoutCastInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReservationUpdateManyWithoutCastNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReservationScalarWhereInput_1.ReservationScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReservationUpdateManyWithoutCastNestedInput.prototype, "deleteMany", void 0);
exports.ReservationUpdateManyWithoutCastNestedInput = ReservationUpdateManyWithoutCastNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReservationUpdateManyWithoutCastNestedInput", {})
], ReservationUpdateManyWithoutCastNestedInput);
