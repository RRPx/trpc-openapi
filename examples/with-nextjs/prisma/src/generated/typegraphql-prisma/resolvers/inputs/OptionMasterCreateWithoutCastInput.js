"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionMasterCreateWithoutCastInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReservationCreateNestedManyWithoutOption_idInput_1 = require("../inputs/ReservationCreateNestedManyWithoutOption_idInput");
let OptionMasterCreateWithoutCastInput = exports.OptionMasterCreateWithoutCastInput = class OptionMasterCreateWithoutCastInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OptionMasterCreateWithoutCastInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], OptionMasterCreateWithoutCastInput.prototype, "option_menu", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], OptionMasterCreateWithoutCastInput.prototype, "fee", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], OptionMasterCreateWithoutCastInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OptionMasterCreateWithoutCastInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OptionMasterCreateWithoutCastInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationCreateNestedManyWithoutOption_idInput_1.ReservationCreateNestedManyWithoutOption_idInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationCreateNestedManyWithoutOption_idInput_1.ReservationCreateNestedManyWithoutOption_idInput)
], OptionMasterCreateWithoutCastInput.prototype, "reservation", void 0);
exports.OptionMasterCreateWithoutCastInput = OptionMasterCreateWithoutCastInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OptionMasterCreateWithoutCastInput", {})
], OptionMasterCreateWithoutCastInput);
