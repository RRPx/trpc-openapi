"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionMasterUncheckedCreateWithoutCastInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReservationUncheckedCreateNestedManyWithoutOption_idInput_1 = require("../inputs/ReservationUncheckedCreateNestedManyWithoutOption_idInput");
let OptionMasterUncheckedCreateWithoutCastInput = exports.OptionMasterUncheckedCreateWithoutCastInput = class OptionMasterUncheckedCreateWithoutCastInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OptionMasterUncheckedCreateWithoutCastInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], OptionMasterUncheckedCreateWithoutCastInput.prototype, "option_menu", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], OptionMasterUncheckedCreateWithoutCastInput.prototype, "fee", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], OptionMasterUncheckedCreateWithoutCastInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OptionMasterUncheckedCreateWithoutCastInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OptionMasterUncheckedCreateWithoutCastInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationUncheckedCreateNestedManyWithoutOption_idInput_1.ReservationUncheckedCreateNestedManyWithoutOption_idInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationUncheckedCreateNestedManyWithoutOption_idInput_1.ReservationUncheckedCreateNestedManyWithoutOption_idInput)
], OptionMasterUncheckedCreateWithoutCastInput.prototype, "reservation", void 0);
exports.OptionMasterUncheckedCreateWithoutCastInput = OptionMasterUncheckedCreateWithoutCastInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OptionMasterUncheckedCreateWithoutCastInput", {})
], OptionMasterUncheckedCreateWithoutCastInput);
