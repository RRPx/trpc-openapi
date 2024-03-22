"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolFilter_1 = require("../inputs/BoolFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const ReservationNullableRelationFilter_1 = require("../inputs/ReservationNullableRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let AddressWhereInput = class AddressWhereInput {
};
exports.AddressWhereInput = AddressWhereInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AddressWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AddressWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AddressWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AddressWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AddressWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AddressWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], AddressWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], AddressWhereInput.prototype, "lat", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], AddressWhereInput.prototype, "long", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], AddressWhereInput.prototype, "note", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], AddressWhereInput.prototype, "address", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFilter_1.BoolFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFilter_1.BoolFilter)
], AddressWhereInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], AddressWhereInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationNullableRelationFilter_1.ReservationNullableRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationNullableRelationFilter_1.ReservationNullableRelationFilter)
], AddressWhereInput.prototype, "reservation", void 0);
exports.AddressWhereInput = AddressWhereInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AddressWhereInput", {})
], AddressWhereInput);
