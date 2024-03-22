"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoriteUpdateWithoutClientInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolFieldUpdateOperationsInput_1 = require("../inputs/BoolFieldUpdateOperationsInput");
const CastUpdateOneWithoutFavoriteNestedInput_1 = require("../inputs/CastUpdateOneWithoutFavoriteNestedInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let FavoriteUpdateWithoutClientInput = class FavoriteUpdateWithoutClientInput {
};
exports.FavoriteUpdateWithoutClientInput = FavoriteUpdateWithoutClientInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], FavoriteUpdateWithoutClientInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], FavoriteUpdateWithoutClientInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], FavoriteUpdateWithoutClientInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], FavoriteUpdateWithoutClientInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUpdateOneWithoutFavoriteNestedInput_1.CastUpdateOneWithoutFavoriteNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastUpdateOneWithoutFavoriteNestedInput_1.CastUpdateOneWithoutFavoriteNestedInput)
], FavoriteUpdateWithoutClientInput.prototype, "cast", void 0);
exports.FavoriteUpdateWithoutClientInput = FavoriteUpdateWithoutClientInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FavoriteUpdateWithoutClientInput", {})
], FavoriteUpdateWithoutClientInput);
