"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationCreateManyCastInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReservationCreateManyCastInput_1 = require("../inputs/ReservationCreateManyCastInput");
let ReservationCreateManyCastInputEnvelope = exports.ReservationCreateManyCastInputEnvelope = class ReservationCreateManyCastInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReservationCreateManyCastInput_1.ReservationCreateManyCastInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], ReservationCreateManyCastInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ReservationCreateManyCastInputEnvelope.prototype, "skipDuplicates", void 0);
exports.ReservationCreateManyCastInputEnvelope = ReservationCreateManyCastInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("ReservationCreateManyCastInputEnvelope", {})
], ReservationCreateManyCastInputEnvelope);
