"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShiftManagementCreateManyReservationInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShiftManagementCreateManyReservationInput_1 = require("../inputs/ShiftManagementCreateManyReservationInput");
let ShiftManagementCreateManyReservationInputEnvelope = class ShiftManagementCreateManyReservationInputEnvelope {
};
exports.ShiftManagementCreateManyReservationInputEnvelope = ShiftManagementCreateManyReservationInputEnvelope;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShiftManagementCreateManyReservationInput_1.ShiftManagementCreateManyReservationInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], ShiftManagementCreateManyReservationInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ShiftManagementCreateManyReservationInputEnvelope.prototype, "skipDuplicates", void 0);
exports.ShiftManagementCreateManyReservationInputEnvelope = ShiftManagementCreateManyReservationInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("ShiftManagementCreateManyReservationInputEnvelope", {})
], ShiftManagementCreateManyReservationInputEnvelope);
