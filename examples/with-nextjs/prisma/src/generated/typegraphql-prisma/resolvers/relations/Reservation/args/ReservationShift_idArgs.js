"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationShift_idArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShiftManagementOrderByWithRelationInput_1 = require("../../../inputs/ShiftManagementOrderByWithRelationInput");
const ShiftManagementWhereInput_1 = require("../../../inputs/ShiftManagementWhereInput");
const ShiftManagementWhereUniqueInput_1 = require("../../../inputs/ShiftManagementWhereUniqueInput");
const ShiftManagementScalarFieldEnum_1 = require("../../../../enums/ShiftManagementScalarFieldEnum");
let ReservationShift_idArgs = exports.ReservationShift_idArgs = class ReservationShift_idArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShiftManagementWhereInput_1.ShiftManagementWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShiftManagementWhereInput_1.ShiftManagementWhereInput)
], ReservationShift_idArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShiftManagementOrderByWithRelationInput_1.ShiftManagementOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReservationShift_idArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShiftManagementWhereUniqueInput_1.ShiftManagementWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShiftManagementWhereUniqueInput_1.ShiftManagementWhereUniqueInput)
], ReservationShift_idArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ReservationShift_idArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ReservationShift_idArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShiftManagementScalarFieldEnum_1.ShiftManagementScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReservationShift_idArgs.prototype, "distinct", void 0);
exports.ReservationShift_idArgs = ReservationShift_idArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], ReservationShift_idArgs);
