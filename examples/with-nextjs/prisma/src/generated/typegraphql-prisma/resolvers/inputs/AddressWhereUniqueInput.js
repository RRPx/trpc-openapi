"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AddressWhereInput_1 = require("../inputs/AddressWhereInput");
const BoolFilter_1 = require("../inputs/BoolFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const ReservationNullableRelationFilter_1 = require("../inputs/ReservationNullableRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let AddressWhereUniqueInput = exports.AddressWhereUniqueInput = class AddressWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AddressWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AddressWhereInput_1.AddressWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AddressWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AddressWhereInput_1.AddressWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AddressWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AddressWhereInput_1.AddressWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AddressWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], AddressWhereUniqueInput.prototype, "lat", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], AddressWhereUniqueInput.prototype, "long", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], AddressWhereUniqueInput.prototype, "note", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], AddressWhereUniqueInput.prototype, "address", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFilter_1.BoolFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFilter_1.BoolFilter)
], AddressWhereUniqueInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], AddressWhereUniqueInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationNullableRelationFilter_1.ReservationNullableRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationNullableRelationFilter_1.ReservationNullableRelationFilter)
], AddressWhereUniqueInput.prototype, "reservation", void 0);
exports.AddressWhereUniqueInput = AddressWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AddressWhereUniqueInput", {})
], AddressWhereUniqueInput);
