"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByReservationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReservationOrderByWithAggregationInput_1 = require("../../../inputs/ReservationOrderByWithAggregationInput");
const ReservationScalarWhereWithAggregatesInput_1 = require("../../../inputs/ReservationScalarWhereWithAggregatesInput");
const ReservationWhereInput_1 = require("../../../inputs/ReservationWhereInput");
const ReservationScalarFieldEnum_1 = require("../../../../enums/ReservationScalarFieldEnum");
let GroupByReservationArgs = class GroupByReservationArgs {
};
exports.GroupByReservationArgs = GroupByReservationArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationWhereInput_1.ReservationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationWhereInput_1.ReservationWhereInput)
], GroupByReservationArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReservationOrderByWithAggregationInput_1.ReservationOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByReservationArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReservationScalarFieldEnum_1.ReservationScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByReservationArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationScalarWhereWithAggregatesInput_1.ReservationScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationScalarWhereWithAggregatesInput_1.ReservationScalarWhereWithAggregatesInput)
], GroupByReservationArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByReservationArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByReservationArgs.prototype, "skip", void 0);
exports.GroupByReservationArgs = GroupByReservationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByReservationArgs);
