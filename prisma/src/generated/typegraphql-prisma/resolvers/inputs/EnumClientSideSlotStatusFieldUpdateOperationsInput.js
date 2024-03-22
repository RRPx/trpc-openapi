"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumClientSideSlotStatusFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClientSideSlotStatus_1 = require("../../enums/ClientSideSlotStatus");
let EnumClientSideSlotStatusFieldUpdateOperationsInput = class EnumClientSideSlotStatusFieldUpdateOperationsInput {
};
exports.EnumClientSideSlotStatusFieldUpdateOperationsInput = EnumClientSideSlotStatusFieldUpdateOperationsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientSideSlotStatus_1.ClientSideSlotStatus, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumClientSideSlotStatusFieldUpdateOperationsInput.prototype, "set", void 0);
exports.EnumClientSideSlotStatusFieldUpdateOperationsInput = EnumClientSideSlotStatusFieldUpdateOperationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumClientSideSlotStatusFieldUpdateOperationsInput", {})
], EnumClientSideSlotStatusFieldUpdateOperationsInput);
