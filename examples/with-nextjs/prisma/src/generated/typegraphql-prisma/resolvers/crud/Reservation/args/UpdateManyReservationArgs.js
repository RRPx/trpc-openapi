"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyReservationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReservationUncheckedUpdateManyInput_1 = require("../../../inputs/ReservationUncheckedUpdateManyInput");
const ReservationWhereInput_1 = require("../../../inputs/ReservationWhereInput");
let UpdateManyReservationArgs = exports.UpdateManyReservationArgs = class UpdateManyReservationArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationUncheckedUpdateManyInput_1.ReservationUncheckedUpdateManyInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReservationUncheckedUpdateManyInput_1.ReservationUncheckedUpdateManyInput)
], UpdateManyReservationArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationWhereInput_1.ReservationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationWhereInput_1.ReservationWhereInput)
], UpdateManyReservationArgs.prototype, "where", void 0);
exports.UpdateManyReservationArgs = UpdateManyReservationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyReservationArgs);
