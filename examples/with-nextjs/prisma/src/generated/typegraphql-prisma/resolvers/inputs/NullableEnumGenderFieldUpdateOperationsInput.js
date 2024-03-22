"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullableEnumGenderFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Gender_1 = require("../../enums/Gender");
let NullableEnumGenderFieldUpdateOperationsInput = exports.NullableEnumGenderFieldUpdateOperationsInput = class NullableEnumGenderFieldUpdateOperationsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Gender_1.Gender, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NullableEnumGenderFieldUpdateOperationsInput.prototype, "set", void 0);
exports.NullableEnumGenderFieldUpdateOperationsInput = NullableEnumGenderFieldUpdateOperationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("NullableEnumGenderFieldUpdateOperationsInput", {})
], NullableEnumGenderFieldUpdateOperationsInput);
