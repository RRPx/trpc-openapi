"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullableEnumPriorityOrderFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PriorityOrder_1 = require("../../enums/PriorityOrder");
let NullableEnumPriorityOrderFieldUpdateOperationsInput = exports.NullableEnumPriorityOrderFieldUpdateOperationsInput = class NullableEnumPriorityOrderFieldUpdateOperationsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriorityOrder_1.PriorityOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NullableEnumPriorityOrderFieldUpdateOperationsInput.prototype, "set", void 0);
exports.NullableEnumPriorityOrderFieldUpdateOperationsInput = NullableEnumPriorityOrderFieldUpdateOperationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("NullableEnumPriorityOrderFieldUpdateOperationsInput", {})
], NullableEnumPriorityOrderFieldUpdateOperationsInput);
