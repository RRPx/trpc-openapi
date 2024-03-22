"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoriteUpdateWithoutCastInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolFieldUpdateOperationsInput_1 = require("../inputs/BoolFieldUpdateOperationsInput");
const ClientUpdateOneWithoutFavoriteNestedInput_1 = require("../inputs/ClientUpdateOneWithoutFavoriteNestedInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let FavoriteUpdateWithoutCastInput = exports.FavoriteUpdateWithoutCastInput = class FavoriteUpdateWithoutCastInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], FavoriteUpdateWithoutCastInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], FavoriteUpdateWithoutCastInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], FavoriteUpdateWithoutCastInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], FavoriteUpdateWithoutCastInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientUpdateOneWithoutFavoriteNestedInput_1.ClientUpdateOneWithoutFavoriteNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientUpdateOneWithoutFavoriteNestedInput_1.ClientUpdateOneWithoutFavoriteNestedInput)
], FavoriteUpdateWithoutCastInput.prototype, "client", void 0);
exports.FavoriteUpdateWithoutCastInput = FavoriteUpdateWithoutCastInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FavoriteUpdateWithoutCastInput", {})
], FavoriteUpdateWithoutCastInput);
