"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationCreateNestedManyWithoutCastInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReservationCreateManyCastInputEnvelope_1 = require("../inputs/ReservationCreateManyCastInputEnvelope");
const ReservationCreateOrConnectWithoutCastInput_1 = require("../inputs/ReservationCreateOrConnectWithoutCastInput");
const ReservationCreateWithoutCastInput_1 = require("../inputs/ReservationCreateWithoutCastInput");
const ReservationWhereUniqueInput_1 = require("../inputs/ReservationWhereUniqueInput");
let ReservationCreateNestedManyWithoutCastInput = exports.ReservationCreateNestedManyWithoutCastInput = class ReservationCreateNestedManyWithoutCastInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReservationCreateWithoutCastInput_1.ReservationCreateWithoutCastInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReservationCreateNestedManyWithoutCastInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReservationCreateOrConnectWithoutCastInput_1.ReservationCreateOrConnectWithoutCastInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReservationCreateNestedManyWithoutCastInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationCreateManyCastInputEnvelope_1.ReservationCreateManyCastInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationCreateManyCastInputEnvelope_1.ReservationCreateManyCastInputEnvelope)
], ReservationCreateNestedManyWithoutCastInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReservationWhereUniqueInput_1.ReservationWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReservationCreateNestedManyWithoutCastInput.prototype, "connect", void 0);
exports.ReservationCreateNestedManyWithoutCastInput = ReservationCreateNestedManyWithoutCastInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReservationCreateNestedManyWithoutCastInput", {})
], ReservationCreateNestedManyWithoutCastInput);
