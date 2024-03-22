"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstReservationOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReservationOrderByWithRelationInput_1 = require("../../../inputs/ReservationOrderByWithRelationInput");
const ReservationWhereInput_1 = require("../../../inputs/ReservationWhereInput");
const ReservationWhereUniqueInput_1 = require("../../../inputs/ReservationWhereUniqueInput");
const ReservationScalarFieldEnum_1 = require("../../../../enums/ReservationScalarFieldEnum");
let FindFirstReservationOrThrowArgs = exports.FindFirstReservationOrThrowArgs = class FindFirstReservationOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationWhereInput_1.ReservationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationWhereInput_1.ReservationWhereInput)
], FindFirstReservationOrThrowArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReservationOrderByWithRelationInput_1.ReservationOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstReservationOrThrowArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationWhereUniqueInput_1.ReservationWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationWhereUniqueInput_1.ReservationWhereUniqueInput)
], FindFirstReservationOrThrowArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstReservationOrThrowArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstReservationOrThrowArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReservationScalarFieldEnum_1.ReservationScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstReservationOrThrowArgs.prototype, "distinct", void 0);
exports.FindFirstReservationOrThrowArgs = FindFirstReservationOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstReservationOrThrowArgs);
