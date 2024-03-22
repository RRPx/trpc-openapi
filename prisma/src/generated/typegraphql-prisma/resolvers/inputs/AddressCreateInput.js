"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReservationCreateNestedOneWithoutAddressInput_1 = require("../inputs/ReservationCreateNestedOneWithoutAddressInput");
let AddressCreateInput = class AddressCreateInput {
};
exports.AddressCreateInput = AddressCreateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AddressCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AddressCreateInput.prototype, "lat", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AddressCreateInput.prototype, "long", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AddressCreateInput.prototype, "note", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AddressCreateInput.prototype, "address", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], AddressCreateInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], AddressCreateInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationCreateNestedOneWithoutAddressInput_1.ReservationCreateNestedOneWithoutAddressInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationCreateNestedOneWithoutAddressInput_1.ReservationCreateNestedOneWithoutAddressInput)
], AddressCreateInput.prototype, "reservation", void 0);
exports.AddressCreateInput = AddressCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AddressCreateInput", {})
], AddressCreateInput);
