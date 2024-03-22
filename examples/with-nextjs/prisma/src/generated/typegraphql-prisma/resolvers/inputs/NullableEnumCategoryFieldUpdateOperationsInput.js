"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullableEnumCategoryFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Category_1 = require("../../enums/Category");
let NullableEnumCategoryFieldUpdateOperationsInput = exports.NullableEnumCategoryFieldUpdateOperationsInput = class NullableEnumCategoryFieldUpdateOperationsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Category_1.Category, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NullableEnumCategoryFieldUpdateOperationsInput.prototype, "set", void 0);
exports.NullableEnumCategoryFieldUpdateOperationsInput = NullableEnumCategoryFieldUpdateOperationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("NullableEnumCategoryFieldUpdateOperationsInput", {})
], NullableEnumCategoryFieldUpdateOperationsInput);
