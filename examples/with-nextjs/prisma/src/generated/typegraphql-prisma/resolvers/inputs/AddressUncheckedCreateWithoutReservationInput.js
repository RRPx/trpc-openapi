"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressUncheckedCreateWithoutReservationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let AddressUncheckedCreateWithoutReservationInput = exports.AddressUncheckedCreateWithoutReservationInput = class AddressUncheckedCreateWithoutReservationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AddressUncheckedCreateWithoutReservationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AddressUncheckedCreateWithoutReservationInput.prototype, "lat", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AddressUncheckedCreateWithoutReservationInput.prototype, "long", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AddressUncheckedCreateWithoutReservationInput.prototype, "note", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AddressUncheckedCreateWithoutReservationInput.prototype, "address", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], AddressUncheckedCreateWithoutReservationInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], AddressUncheckedCreateWithoutReservationInput.prototype, "created_at", void 0);
exports.AddressUncheckedCreateWithoutReservationInput = AddressUncheckedCreateWithoutReservationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AddressUncheckedCreateWithoutReservationInput", {})
], AddressUncheckedCreateWithoutReservationInput);
