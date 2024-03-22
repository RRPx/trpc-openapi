"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReservationWhereInput_1 = require("../inputs/ReservationWhereInput");
let ReservationListRelationFilter = exports.ReservationListRelationFilter = class ReservationListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationWhereInput_1.ReservationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationWhereInput_1.ReservationWhereInput)
], ReservationListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationWhereInput_1.ReservationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationWhereInput_1.ReservationWhereInput)
], ReservationListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationWhereInput_1.ReservationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationWhereInput_1.ReservationWhereInput)
], ReservationListRelationFilter.prototype, "none", void 0);
exports.ReservationListRelationFilter = ReservationListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("ReservationListRelationFilter", {})
], ReservationListRelationFilter);
