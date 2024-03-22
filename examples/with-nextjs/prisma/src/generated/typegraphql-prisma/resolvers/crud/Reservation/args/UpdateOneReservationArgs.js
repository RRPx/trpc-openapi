"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneReservationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReservationUncheckedUpdateInput_1 = require("../../../inputs/ReservationUncheckedUpdateInput");
const ReservationWhereUniqueInput_1 = require("../../../inputs/ReservationWhereUniqueInput");
let UpdateOneReservationArgs = exports.UpdateOneReservationArgs = class UpdateOneReservationArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationUncheckedUpdateInput_1.ReservationUncheckedUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReservationUncheckedUpdateInput_1.ReservationUncheckedUpdateInput)
], UpdateOneReservationArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationWhereUniqueInput_1.ReservationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReservationWhereUniqueInput_1.ReservationWhereUniqueInput)
], UpdateOneReservationArgs.prototype, "where", void 0);
exports.UpdateOneReservationArgs = UpdateOneReservationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneReservationArgs);
