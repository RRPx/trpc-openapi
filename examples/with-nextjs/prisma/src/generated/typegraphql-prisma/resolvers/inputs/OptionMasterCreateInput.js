"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionMasterCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastCreateNestedManyWithoutOption_masterInput_1 = require("../inputs/CastCreateNestedManyWithoutOption_masterInput");
const ReservationCreateNestedManyWithoutOption_idInput_1 = require("../inputs/ReservationCreateNestedManyWithoutOption_idInput");
let OptionMasterCreateInput = exports.OptionMasterCreateInput = class OptionMasterCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OptionMasterCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], OptionMasterCreateInput.prototype, "option_menu", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], OptionMasterCreateInput.prototype, "fee", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], OptionMasterCreateInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OptionMasterCreateInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OptionMasterCreateInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastCreateNestedManyWithoutOption_masterInput_1.CastCreateNestedManyWithoutOption_masterInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastCreateNestedManyWithoutOption_masterInput_1.CastCreateNestedManyWithoutOption_masterInput)
], OptionMasterCreateInput.prototype, "cast", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationCreateNestedManyWithoutOption_idInput_1.ReservationCreateNestedManyWithoutOption_idInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationCreateNestedManyWithoutOption_idInput_1.ReservationCreateNestedManyWithoutOption_idInput)
], OptionMasterCreateInput.prototype, "reservation", void 0);
exports.OptionMasterCreateInput = OptionMasterCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OptionMasterCreateInput", {})
], OptionMasterCreateInput);
