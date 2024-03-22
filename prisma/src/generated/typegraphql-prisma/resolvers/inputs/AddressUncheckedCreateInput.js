"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressUncheckedCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReservationUncheckedCreateNestedOneWithoutAddressInput_1 = require("../inputs/ReservationUncheckedCreateNestedOneWithoutAddressInput");
let AddressUncheckedCreateInput = class AddressUncheckedCreateInput {
};
exports.AddressUncheckedCreateInput = AddressUncheckedCreateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AddressUncheckedCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AddressUncheckedCreateInput.prototype, "lat", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AddressUncheckedCreateInput.prototype, "long", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AddressUncheckedCreateInput.prototype, "note", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AddressUncheckedCreateInput.prototype, "address", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], AddressUncheckedCreateInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], AddressUncheckedCreateInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationUncheckedCreateNestedOneWithoutAddressInput_1.ReservationUncheckedCreateNestedOneWithoutAddressInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationUncheckedCreateNestedOneWithoutAddressInput_1.ReservationUncheckedCreateNestedOneWithoutAddressInput)
], AddressUncheckedCreateInput.prototype, "reservation", void 0);
exports.AddressUncheckedCreateInput = AddressUncheckedCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AddressUncheckedCreateInput", {})
], AddressUncheckedCreateInput);
