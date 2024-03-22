"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumApprovalFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Approval_1 = require("../../enums/Approval");
let EnumApprovalFieldUpdateOperationsInput = exports.EnumApprovalFieldUpdateOperationsInput = class EnumApprovalFieldUpdateOperationsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Approval_1.Approval, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumApprovalFieldUpdateOperationsInput.prototype, "set", void 0);
exports.EnumApprovalFieldUpdateOperationsInput = EnumApprovalFieldUpdateOperationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumApprovalFieldUpdateOperationsInput", {})
], EnumApprovalFieldUpdateOperationsInput);
