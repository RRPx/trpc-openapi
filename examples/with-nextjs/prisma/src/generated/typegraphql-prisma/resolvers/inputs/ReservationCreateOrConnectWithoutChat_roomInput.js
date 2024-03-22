"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationCreateOrConnectWithoutChat_roomInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReservationUncheckedCreateWithoutChat_roomInput_1 = require("../inputs/ReservationUncheckedCreateWithoutChat_roomInput");
const ReservationWhereUniqueInput_1 = require("../inputs/ReservationWhereUniqueInput");
let ReservationCreateOrConnectWithoutChat_roomInput = exports.ReservationCreateOrConnectWithoutChat_roomInput = class ReservationCreateOrConnectWithoutChat_roomInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationWhereUniqueInput_1.ReservationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReservationWhereUniqueInput_1.ReservationWhereUniqueInput)
], ReservationCreateOrConnectWithoutChat_roomInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationUncheckedCreateWithoutChat_roomInput_1.ReservationUncheckedCreateWithoutChat_roomInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReservationUncheckedCreateWithoutChat_roomInput_1.ReservationUncheckedCreateWithoutChat_roomInput)
], ReservationCreateOrConnectWithoutChat_roomInput.prototype, "create", void 0);
exports.ReservationCreateOrConnectWithoutChat_roomInput = ReservationCreateOrConnectWithoutChat_roomInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReservationCreateOrConnectWithoutChat_roomInput", {})
], ReservationCreateOrConnectWithoutChat_roomInput);
