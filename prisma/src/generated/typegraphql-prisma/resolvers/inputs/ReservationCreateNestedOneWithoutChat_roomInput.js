"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationCreateNestedOneWithoutChat_roomInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReservationCreateOrConnectWithoutChat_roomInput_1 = require("../inputs/ReservationCreateOrConnectWithoutChat_roomInput");
const ReservationUncheckedCreateWithoutChat_roomInput_1 = require("../inputs/ReservationUncheckedCreateWithoutChat_roomInput");
const ReservationWhereUniqueInput_1 = require("../inputs/ReservationWhereUniqueInput");
let ReservationCreateNestedOneWithoutChat_roomInput = class ReservationCreateNestedOneWithoutChat_roomInput {
};
exports.ReservationCreateNestedOneWithoutChat_roomInput = ReservationCreateNestedOneWithoutChat_roomInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationUncheckedCreateWithoutChat_roomInput_1.ReservationUncheckedCreateWithoutChat_roomInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationUncheckedCreateWithoutChat_roomInput_1.ReservationUncheckedCreateWithoutChat_roomInput)
], ReservationCreateNestedOneWithoutChat_roomInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationCreateOrConnectWithoutChat_roomInput_1.ReservationCreateOrConnectWithoutChat_roomInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationCreateOrConnectWithoutChat_roomInput_1.ReservationCreateOrConnectWithoutChat_roomInput)
], ReservationCreateNestedOneWithoutChat_roomInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationWhereUniqueInput_1.ReservationWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationWhereUniqueInput_1.ReservationWhereUniqueInput)
], ReservationCreateNestedOneWithoutChat_roomInput.prototype, "connect", void 0);
exports.ReservationCreateNestedOneWithoutChat_roomInput = ReservationCreateNestedOneWithoutChat_roomInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReservationCreateNestedOneWithoutChat_roomInput", {})
], ReservationCreateNestedOneWithoutChat_roomInput);
