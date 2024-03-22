"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyReservationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReservationWhereInput_1 = require("../../../inputs/ReservationWhereInput");
let DeleteManyReservationArgs = exports.DeleteManyReservationArgs = class DeleteManyReservationArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationWhereInput_1.ReservationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationWhereInput_1.ReservationWhereInput)
], DeleteManyReservationArgs.prototype, "where", void 0);
exports.DeleteManyReservationArgs = DeleteManyReservationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyReservationArgs);
