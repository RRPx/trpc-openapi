"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumAdminRoleFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AdminRole_1 = require("../../enums/AdminRole");
let EnumAdminRoleFieldUpdateOperationsInput = class EnumAdminRoleFieldUpdateOperationsInput {
};
exports.EnumAdminRoleFieldUpdateOperationsInput = EnumAdminRoleFieldUpdateOperationsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AdminRole_1.AdminRole, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumAdminRoleFieldUpdateOperationsInput.prototype, "set", void 0);
exports.EnumAdminRoleFieldUpdateOperationsInput = EnumAdminRoleFieldUpdateOperationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumAdminRoleFieldUpdateOperationsInput", {})
], EnumAdminRoleFieldUpdateOperationsInput);
