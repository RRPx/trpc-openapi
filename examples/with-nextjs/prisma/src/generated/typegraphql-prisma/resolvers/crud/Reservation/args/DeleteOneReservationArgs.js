"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneReservationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReservationWhereUniqueInput_1 = require("../../../inputs/ReservationWhereUniqueInput");
let DeleteOneReservationArgs = exports.DeleteOneReservationArgs = class DeleteOneReservationArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationWhereUniqueInput_1.ReservationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReservationWhereUniqueInput_1.ReservationWhereUniqueInput)
], DeleteOneReservationArgs.prototype, "where", void 0);
exports.DeleteOneReservationArgs = DeleteOneReservationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneReservationArgs);
