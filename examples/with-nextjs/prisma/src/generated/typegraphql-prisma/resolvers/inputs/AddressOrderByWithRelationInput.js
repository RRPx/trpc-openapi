"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReservationOrderByWithRelationInput_1 = require("../inputs/ReservationOrderByWithRelationInput");
const SortOrderInput_1 = require("../inputs/SortOrderInput");
const SortOrder_1 = require("../../enums/SortOrder");
let AddressOrderByWithRelationInput = exports.AddressOrderByWithRelationInput = class AddressOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AddressOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AddressOrderByWithRelationInput.prototype, "lat", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AddressOrderByWithRelationInput.prototype, "long", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], AddressOrderByWithRelationInput.prototype, "note", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], AddressOrderByWithRelationInput.prototype, "address", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AddressOrderByWithRelationInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AddressOrderByWithRelationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationOrderByWithRelationInput_1.ReservationOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationOrderByWithRelationInput_1.ReservationOrderByWithRelationInput)
], AddressOrderByWithRelationInput.prototype, "reservation", void 0);
exports.AddressOrderByWithRelationInput = AddressOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AddressOrderByWithRelationInput", {})
], AddressOrderByWithRelationInput);
