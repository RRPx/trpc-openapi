"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateReservation = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReservationAvgAggregate_1 = require("../outputs/ReservationAvgAggregate");
const ReservationCountAggregate_1 = require("../outputs/ReservationCountAggregate");
const ReservationMaxAggregate_1 = require("../outputs/ReservationMaxAggregate");
const ReservationMinAggregate_1 = require("../outputs/ReservationMinAggregate");
const ReservationSumAggregate_1 = require("../outputs/ReservationSumAggregate");
let AggregateReservation = exports.AggregateReservation = class AggregateReservation {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationCountAggregate_1.ReservationCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationCountAggregate_1.ReservationCountAggregate)
], AggregateReservation.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationAvgAggregate_1.ReservationAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationAvgAggregate_1.ReservationAvgAggregate)
], AggregateReservation.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationSumAggregate_1.ReservationSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationSumAggregate_1.ReservationSumAggregate)
], AggregateReservation.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationMinAggregate_1.ReservationMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationMinAggregate_1.ReservationMinAggregate)
], AggregateReservation.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationMaxAggregate_1.ReservationMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationMaxAggregate_1.ReservationMaxAggregate)
], AggregateReservation.prototype, "_max", void 0);
exports.AggregateReservation = AggregateReservation = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateReservation", {})
], AggregateReservation);
