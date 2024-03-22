"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationNullableRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReservationWhereInput_1 = require("../inputs/ReservationWhereInput");
let ReservationNullableRelationFilter = class ReservationNullableRelationFilter {
};
exports.ReservationNullableRelationFilter = ReservationNullableRelationFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationWhereInput_1.ReservationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationWhereInput_1.ReservationWhereInput)
], ReservationNullableRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationWhereInput_1.ReservationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationWhereInput_1.ReservationWhereInput)
], ReservationNullableRelationFilter.prototype, "isNot", void 0);
exports.ReservationNullableRelationFilter = ReservationNullableRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("ReservationNullableRelationFilter", {})
], ReservationNullableRelationFilter);
