"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionMasterUncheckedCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastUncheckedCreateNestedManyWithoutOption_masterInput_1 = require("../inputs/CastUncheckedCreateNestedManyWithoutOption_masterInput");
const ReservationUncheckedCreateNestedManyWithoutOption_idInput_1 = require("../inputs/ReservationUncheckedCreateNestedManyWithoutOption_idInput");
let OptionMasterUncheckedCreateInput = exports.OptionMasterUncheckedCreateInput = class OptionMasterUncheckedCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OptionMasterUncheckedCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], OptionMasterUncheckedCreateInput.prototype, "option_menu", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], OptionMasterUncheckedCreateInput.prototype, "fee", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], OptionMasterUncheckedCreateInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OptionMasterUncheckedCreateInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OptionMasterUncheckedCreateInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUncheckedCreateNestedManyWithoutOption_masterInput_1.CastUncheckedCreateNestedManyWithoutOption_masterInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastUncheckedCreateNestedManyWithoutOption_masterInput_1.CastUncheckedCreateNestedManyWithoutOption_masterInput)
], OptionMasterUncheckedCreateInput.prototype, "cast", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationUncheckedCreateNestedManyWithoutOption_idInput_1.ReservationUncheckedCreateNestedManyWithoutOption_idInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationUncheckedCreateNestedManyWithoutOption_idInput_1.ReservationUncheckedCreateNestedManyWithoutOption_idInput)
], OptionMasterUncheckedCreateInput.prototype, "reservation", void 0);
exports.OptionMasterUncheckedCreateInput = OptionMasterUncheckedCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OptionMasterUncheckedCreateInput", {})
], OptionMasterUncheckedCreateInput);
