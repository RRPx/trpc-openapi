"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReservationWhereInput_1 = require("../inputs/ReservationWhereInput");
let ReservationRelationFilter = class ReservationRelationFilter {
};
exports.ReservationRelationFilter = ReservationRelationFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationWhereInput_1.ReservationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationWhereInput_1.ReservationWhereInput)
], ReservationRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationWhereInput_1.ReservationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationWhereInput_1.ReservationWhereInput)
], ReservationRelationFilter.prototype, "isNot", void 0);
exports.ReservationRelationFilter = ReservationRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("ReservationRelationFilter", {})
], ReservationRelationFilter);
