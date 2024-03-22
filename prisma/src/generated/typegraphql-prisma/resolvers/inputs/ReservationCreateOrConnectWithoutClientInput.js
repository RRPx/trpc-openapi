"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationCreateOrConnectWithoutClientInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReservationUncheckedCreateWithoutClientInput_1 = require("../inputs/ReservationUncheckedCreateWithoutClientInput");
const ReservationWhereUniqueInput_1 = require("../inputs/ReservationWhereUniqueInput");
let ReservationCreateOrConnectWithoutClientInput = class ReservationCreateOrConnectWithoutClientInput {
};
exports.ReservationCreateOrConnectWithoutClientInput = ReservationCreateOrConnectWithoutClientInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationWhereUniqueInput_1.ReservationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReservationWhereUniqueInput_1.ReservationWhereUniqueInput)
], ReservationCreateOrConnectWithoutClientInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationUncheckedCreateWithoutClientInput_1.ReservationUncheckedCreateWithoutClientInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReservationUncheckedCreateWithoutClientInput_1.ReservationUncheckedCreateWithoutClientInput)
], ReservationCreateOrConnectWithoutClientInput.prototype, "create", void 0);
exports.ReservationCreateOrConnectWithoutClientInput = ReservationCreateOrConnectWithoutClientInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReservationCreateOrConnectWithoutClientInput", {})
], ReservationCreateOrConnectWithoutClientInput);
