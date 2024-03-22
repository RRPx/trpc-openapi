"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionMasterCreateWithoutReservationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastCreateNestedManyWithoutOption_masterInput_1 = require("../inputs/CastCreateNestedManyWithoutOption_masterInput");
let OptionMasterCreateWithoutReservationInput = class OptionMasterCreateWithoutReservationInput {
};
exports.OptionMasterCreateWithoutReservationInput = OptionMasterCreateWithoutReservationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OptionMasterCreateWithoutReservationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], OptionMasterCreateWithoutReservationInput.prototype, "option_menu", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], OptionMasterCreateWithoutReservationInput.prototype, "fee", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], OptionMasterCreateWithoutReservationInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OptionMasterCreateWithoutReservationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OptionMasterCreateWithoutReservationInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastCreateNestedManyWithoutOption_masterInput_1.CastCreateNestedManyWithoutOption_masterInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastCreateNestedManyWithoutOption_masterInput_1.CastCreateNestedManyWithoutOption_masterInput)
], OptionMasterCreateWithoutReservationInput.prototype, "cast", void 0);
exports.OptionMasterCreateWithoutReservationInput = OptionMasterCreateWithoutReservationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OptionMasterCreateWithoutReservationInput", {})
], OptionMasterCreateWithoutReservationInput);
