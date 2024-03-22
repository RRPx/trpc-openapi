"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumTargetedUserFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TargetedUser_1 = require("../../enums/TargetedUser");
let EnumTargetedUserFieldUpdateOperationsInput = class EnumTargetedUserFieldUpdateOperationsInput {
};
exports.EnumTargetedUserFieldUpdateOperationsInput = EnumTargetedUserFieldUpdateOperationsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TargetedUser_1.TargetedUser, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumTargetedUserFieldUpdateOperationsInput.prototype, "set", void 0);
exports.EnumTargetedUserFieldUpdateOperationsInput = EnumTargetedUserFieldUpdateOperationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumTargetedUserFieldUpdateOperationsInput", {})
], EnumTargetedUserFieldUpdateOperationsInput);
