"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateReservationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReservationOrderByWithRelationInput_1 = require("../../../inputs/ReservationOrderByWithRelationInput");
const ReservationWhereInput_1 = require("../../../inputs/ReservationWhereInput");
const ReservationWhereUniqueInput_1 = require("../../../inputs/ReservationWhereUniqueInput");
let AggregateReservationArgs = exports.AggregateReservationArgs = class AggregateReservationArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationWhereInput_1.ReservationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationWhereInput_1.ReservationWhereInput)
], AggregateReservationArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReservationOrderByWithRelationInput_1.ReservationOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateReservationArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationWhereUniqueInput_1.ReservationWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationWhereUniqueInput_1.ReservationWhereUniqueInput)
], AggregateReservationArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateReservationArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateReservationArgs.prototype, "skip", void 0);
exports.AggregateReservationArgs = AggregateReservationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateReservationArgs);
