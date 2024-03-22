"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueReservationOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReservationWhereUniqueInput_1 = require("../../../inputs/ReservationWhereUniqueInput");
let FindUniqueReservationOrThrowArgs = class FindUniqueReservationOrThrowArgs {
};
exports.FindUniqueReservationOrThrowArgs = FindUniqueReservationOrThrowArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationWhereUniqueInput_1.ReservationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReservationWhereUniqueInput_1.ReservationWhereUniqueInput)
], FindUniqueReservationOrThrowArgs.prototype, "where", void 0);
exports.FindUniqueReservationOrThrowArgs = FindUniqueReservationOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueReservationOrThrowArgs);
