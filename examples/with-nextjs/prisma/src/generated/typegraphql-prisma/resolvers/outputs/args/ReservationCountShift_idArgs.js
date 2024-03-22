"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationCountShift_idArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShiftManagementWhereInput_1 = require("../../inputs/ShiftManagementWhereInput");
let ReservationCountShift_idArgs = exports.ReservationCountShift_idArgs = class ReservationCountShift_idArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShiftManagementWhereInput_1.ShiftManagementWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShiftManagementWhereInput_1.ShiftManagementWhereInput)
], ReservationCountShift_idArgs.prototype, "where", void 0);
exports.ReservationCountShift_idArgs = ReservationCountShift_idArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], ReservationCountShift_idArgs);
