"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShiftManagementCreateManyCastInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShiftManagementCreateManyCastInput_1 = require("../inputs/ShiftManagementCreateManyCastInput");
let ShiftManagementCreateManyCastInputEnvelope = class ShiftManagementCreateManyCastInputEnvelope {
};
exports.ShiftManagementCreateManyCastInputEnvelope = ShiftManagementCreateManyCastInputEnvelope;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShiftManagementCreateManyCastInput_1.ShiftManagementCreateManyCastInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], ShiftManagementCreateManyCastInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ShiftManagementCreateManyCastInputEnvelope.prototype, "skipDuplicates", void 0);
exports.ShiftManagementCreateManyCastInputEnvelope = ShiftManagementCreateManyCastInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("ShiftManagementCreateManyCastInputEnvelope", {})
], ShiftManagementCreateManyCastInputEnvelope);
