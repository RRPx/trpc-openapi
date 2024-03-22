"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ReservationSumAggregate = class ReservationSumAggregate {
};
exports.ReservationSumAggregate = ReservationSumAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ReservationSumAggregate.prototype, "payment_amount", void 0);
exports.ReservationSumAggregate = ReservationSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ReservationSumAggregate", {})
], ReservationSumAggregate);
