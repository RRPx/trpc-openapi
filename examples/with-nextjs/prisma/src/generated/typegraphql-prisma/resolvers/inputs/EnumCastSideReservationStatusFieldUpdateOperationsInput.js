"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumCastSideReservationStatusFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastSideReservationStatus_1 = require("../../enums/CastSideReservationStatus");
let EnumCastSideReservationStatusFieldUpdateOperationsInput = exports.EnumCastSideReservationStatusFieldUpdateOperationsInput = class EnumCastSideReservationStatusFieldUpdateOperationsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastSideReservationStatus_1.CastSideReservationStatus, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumCastSideReservationStatusFieldUpdateOperationsInput.prototype, "set", void 0);
exports.EnumCastSideReservationStatusFieldUpdateOperationsInput = EnumCastSideReservationStatusFieldUpdateOperationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumCastSideReservationStatusFieldUpdateOperationsInput", {})
], EnumCastSideReservationStatusFieldUpdateOperationsInput);
