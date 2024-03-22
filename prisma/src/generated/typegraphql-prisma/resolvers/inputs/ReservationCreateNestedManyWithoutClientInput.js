"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationCreateNestedManyWithoutClientInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReservationCreateManyClientInputEnvelope_1 = require("../inputs/ReservationCreateManyClientInputEnvelope");
const ReservationCreateOrConnectWithoutClientInput_1 = require("../inputs/ReservationCreateOrConnectWithoutClientInput");
const ReservationCreateWithoutClientInput_1 = require("../inputs/ReservationCreateWithoutClientInput");
const ReservationWhereUniqueInput_1 = require("../inputs/ReservationWhereUniqueInput");
let ReservationCreateNestedManyWithoutClientInput = class ReservationCreateNestedManyWithoutClientInput {
};
exports.ReservationCreateNestedManyWithoutClientInput = ReservationCreateNestedManyWithoutClientInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReservationCreateWithoutClientInput_1.ReservationCreateWithoutClientInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReservationCreateNestedManyWithoutClientInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReservationCreateOrConnectWithoutClientInput_1.ReservationCreateOrConnectWithoutClientInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReservationCreateNestedManyWithoutClientInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationCreateManyClientInputEnvelope_1.ReservationCreateManyClientInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationCreateManyClientInputEnvelope_1.ReservationCreateManyClientInputEnvelope)
], ReservationCreateNestedManyWithoutClientInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReservationWhereUniqueInput_1.ReservationWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReservationCreateNestedManyWithoutClientInput.prototype, "connect", void 0);
exports.ReservationCreateNestedManyWithoutClientInput = ReservationCreateNestedManyWithoutClientInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReservationCreateNestedManyWithoutClientInput", {})
], ReservationCreateNestedManyWithoutClientInput);
