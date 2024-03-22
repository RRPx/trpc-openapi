"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumInquirerRoleFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InquirerRole_1 = require("../../enums/InquirerRole");
let EnumInquirerRoleFieldUpdateOperationsInput = class EnumInquirerRoleFieldUpdateOperationsInput {
};
exports.EnumInquirerRoleFieldUpdateOperationsInput = EnumInquirerRoleFieldUpdateOperationsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InquirerRole_1.InquirerRole, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumInquirerRoleFieldUpdateOperationsInput.prototype, "set", void 0);
exports.EnumInquirerRoleFieldUpdateOperationsInput = EnumInquirerRoleFieldUpdateOperationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumInquirerRoleFieldUpdateOperationsInput", {})
], EnumInquirerRoleFieldUpdateOperationsInput);
