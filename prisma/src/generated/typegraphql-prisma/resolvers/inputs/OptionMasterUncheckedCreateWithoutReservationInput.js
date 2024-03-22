"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionMasterUncheckedCreateWithoutReservationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastUncheckedCreateNestedManyWithoutOption_masterInput_1 = require("../inputs/CastUncheckedCreateNestedManyWithoutOption_masterInput");
let OptionMasterUncheckedCreateWithoutReservationInput = class OptionMasterUncheckedCreateWithoutReservationInput {
};
exports.OptionMasterUncheckedCreateWithoutReservationInput = OptionMasterUncheckedCreateWithoutReservationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OptionMasterUncheckedCreateWithoutReservationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], OptionMasterUncheckedCreateWithoutReservationInput.prototype, "option_menu", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], OptionMasterUncheckedCreateWithoutReservationInput.prototype, "fee", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], OptionMasterUncheckedCreateWithoutReservationInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OptionMasterUncheckedCreateWithoutReservationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OptionMasterUncheckedCreateWithoutReservationInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUncheckedCreateNestedManyWithoutOption_masterInput_1.CastUncheckedCreateNestedManyWithoutOption_masterInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastUncheckedCreateNestedManyWithoutOption_masterInput_1.CastUncheckedCreateNestedManyWithoutOption_masterInput)
], OptionMasterUncheckedCreateWithoutReservationInput.prototype, "cast", void 0);
exports.OptionMasterUncheckedCreateWithoutReservationInput = OptionMasterUncheckedCreateWithoutReservationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OptionMasterUncheckedCreateWithoutReservationInput", {})
], OptionMasterUncheckedCreateWithoutReservationInput);
