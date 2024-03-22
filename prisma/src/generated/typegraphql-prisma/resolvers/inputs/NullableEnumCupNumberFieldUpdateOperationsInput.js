"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullableEnumCupNumberFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CupNumber_1 = require("../../enums/CupNumber");
let NullableEnumCupNumberFieldUpdateOperationsInput = class NullableEnumCupNumberFieldUpdateOperationsInput {
};
exports.NullableEnumCupNumberFieldUpdateOperationsInput = NullableEnumCupNumberFieldUpdateOperationsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CupNumber_1.CupNumber, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NullableEnumCupNumberFieldUpdateOperationsInput.prototype, "set", void 0);
exports.NullableEnumCupNumberFieldUpdateOperationsInput = NullableEnumCupNumberFieldUpdateOperationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("NullableEnumCupNumberFieldUpdateOperationsInput", {})
], NullableEnumCupNumberFieldUpdateOperationsInput);
