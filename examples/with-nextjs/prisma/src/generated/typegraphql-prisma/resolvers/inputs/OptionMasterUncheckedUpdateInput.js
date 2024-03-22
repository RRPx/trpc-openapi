"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionMasterUncheckedUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolFieldUpdateOperationsInput_1 = require("../inputs/BoolFieldUpdateOperationsInput");
const CastUncheckedUpdateManyWithoutOption_masterNestedInput_1 = require("../inputs/CastUncheckedUpdateManyWithoutOption_masterNestedInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const ReservationUncheckedUpdateManyWithoutOption_idNestedInput_1 = require("../inputs/ReservationUncheckedUpdateManyWithoutOption_idNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let OptionMasterUncheckedUpdateInput = exports.OptionMasterUncheckedUpdateInput = class OptionMasterUncheckedUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], OptionMasterUncheckedUpdateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], OptionMasterUncheckedUpdateInput.prototype, "option_menu", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], OptionMasterUncheckedUpdateInput.prototype, "fee", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], OptionMasterUncheckedUpdateInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], OptionMasterUncheckedUpdateInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], OptionMasterUncheckedUpdateInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUncheckedUpdateManyWithoutOption_masterNestedInput_1.CastUncheckedUpdateManyWithoutOption_masterNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastUncheckedUpdateManyWithoutOption_masterNestedInput_1.CastUncheckedUpdateManyWithoutOption_masterNestedInput)
], OptionMasterUncheckedUpdateInput.prototype, "cast", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationUncheckedUpdateManyWithoutOption_idNestedInput_1.ReservationUncheckedUpdateManyWithoutOption_idNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationUncheckedUpdateManyWithoutOption_idNestedInput_1.ReservationUncheckedUpdateManyWithoutOption_idNestedInput)
], OptionMasterUncheckedUpdateInput.prototype, "reservation", void 0);
exports.OptionMasterUncheckedUpdateInput = OptionMasterUncheckedUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OptionMasterUncheckedUpdateInput", {})
], OptionMasterUncheckedUpdateInput);
