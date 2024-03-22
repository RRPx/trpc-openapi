"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneReservationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReservationUncheckedCreateInput_1 = require("../../../inputs/ReservationUncheckedCreateInput");
let CreateOneReservationArgs = class CreateOneReservationArgs {
};
exports.CreateOneReservationArgs = CreateOneReservationArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationUncheckedCreateInput_1.ReservationUncheckedCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReservationUncheckedCreateInput_1.ReservationUncheckedCreateInput)
], CreateOneReservationArgs.prototype, "data", void 0);
exports.CreateOneReservationArgs = CreateOneReservationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneReservationArgs);
