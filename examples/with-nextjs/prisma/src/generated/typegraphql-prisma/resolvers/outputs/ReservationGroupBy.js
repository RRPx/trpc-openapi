"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReservationAvgAggregate_1 = require("../outputs/ReservationAvgAggregate");
const ReservationCountAggregate_1 = require("../outputs/ReservationCountAggregate");
const ReservationMaxAggregate_1 = require("../outputs/ReservationMaxAggregate");
const ReservationMinAggregate_1 = require("../outputs/ReservationMinAggregate");
const ReservationSumAggregate_1 = require("../outputs/ReservationSumAggregate");
const Approval_1 = require("../../enums/Approval");
let ReservationGroupBy = exports.ReservationGroupBy = class ReservationGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReservationGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReservationGroupBy.prototype, "cast_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReservationGroupBy.prototype, "client_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ReservationGroupBy.prototype, "start_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ReservationGroupBy.prototype, "end_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], ReservationGroupBy.prototype, "guide_flg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Approval_1.Approval, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReservationGroupBy.prototype, "approval", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Approval_1.Approval, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReservationGroupBy.prototype, "admin_approval", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ReservationGroupBy.prototype, "payment_amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReservationGroupBy.prototype, "payment_select", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReservationGroupBy.prototype, "payment_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], ReservationGroupBy.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ReservationGroupBy.prototype, "reservation_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReservationGroupBy.prototype, "address_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ReservationGroupBy.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ReservationGroupBy.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationCountAggregate_1.ReservationCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationCountAggregate_1.ReservationCountAggregate)
], ReservationGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationAvgAggregate_1.ReservationAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationAvgAggregate_1.ReservationAvgAggregate)
], ReservationGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationSumAggregate_1.ReservationSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationSumAggregate_1.ReservationSumAggregate)
], ReservationGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationMinAggregate_1.ReservationMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationMinAggregate_1.ReservationMinAggregate)
], ReservationGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationMaxAggregate_1.ReservationMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationMaxAggregate_1.ReservationMaxAggregate)
], ReservationGroupBy.prototype, "_max", void 0);
exports.ReservationGroupBy = ReservationGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ReservationGroupBy", {})
], ReservationGroupBy);
