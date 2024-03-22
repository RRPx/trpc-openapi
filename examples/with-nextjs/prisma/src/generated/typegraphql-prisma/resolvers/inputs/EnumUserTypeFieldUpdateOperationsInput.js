"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumUserTypeFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserType_1 = require("../../enums/UserType");
let EnumUserTypeFieldUpdateOperationsInput = exports.EnumUserTypeFieldUpdateOperationsInput = class EnumUserTypeFieldUpdateOperationsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserType_1.UserType, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumUserTypeFieldUpdateOperationsInput.prototype, "set", void 0);
exports.EnumUserTypeFieldUpdateOperationsInput = EnumUserTypeFieldUpdateOperationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumUserTypeFieldUpdateOperationsInput", {})
], EnumUserTypeFieldUpdateOperationsInput);
