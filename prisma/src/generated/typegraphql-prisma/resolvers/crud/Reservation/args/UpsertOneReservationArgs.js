"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneReservationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReservationUncheckedCreateInput_1 = require("../../../inputs/ReservationUncheckedCreateInput");
const ReservationUncheckedUpdateInput_1 = require("../../../inputs/ReservationUncheckedUpdateInput");
const ReservationWhereUniqueInput_1 = require("../../../inputs/ReservationWhereUniqueInput");
let UpsertOneReservationArgs = class UpsertOneReservationArgs {
};
exports.UpsertOneReservationArgs = UpsertOneReservationArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationWhereUniqueInput_1.ReservationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReservationWhereUniqueInput_1.ReservationWhereUniqueInput)
], UpsertOneReservationArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationUncheckedCreateInput_1.ReservationUncheckedCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReservationUncheckedCreateInput_1.ReservationUncheckedCreateInput)
], UpsertOneReservationArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationUncheckedUpdateInput_1.ReservationUncheckedUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReservationUncheckedUpdateInput_1.ReservationUncheckedUpdateInput)
], UpsertOneReservationArgs.prototype, "update", void 0);
exports.UpsertOneReservationArgs = UpsertOneReservationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneReservationArgs);
