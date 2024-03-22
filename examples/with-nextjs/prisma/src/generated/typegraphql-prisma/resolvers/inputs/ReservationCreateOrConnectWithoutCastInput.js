"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationCreateOrConnectWithoutCastInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReservationUncheckedCreateWithoutCastInput_1 = require("../inputs/ReservationUncheckedCreateWithoutCastInput");
const ReservationWhereUniqueInput_1 = require("../inputs/ReservationWhereUniqueInput");
let ReservationCreateOrConnectWithoutCastInput = exports.ReservationCreateOrConnectWithoutCastInput = class ReservationCreateOrConnectWithoutCastInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationWhereUniqueInput_1.ReservationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReservationWhereUniqueInput_1.ReservationWhereUniqueInput)
], ReservationCreateOrConnectWithoutCastInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationUncheckedCreateWithoutCastInput_1.ReservationUncheckedCreateWithoutCastInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReservationUncheckedCreateWithoutCastInput_1.ReservationUncheckedCreateWithoutCastInput)
], ReservationCreateOrConnectWithoutCastInput.prototype, "create", void 0);
exports.ReservationCreateOrConnectWithoutCastInput = ReservationCreateOrConnectWithoutCastInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReservationCreateOrConnectWithoutCastInput", {})
], ReservationCreateOrConnectWithoutCastInput);
