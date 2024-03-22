"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationCreateManyClientInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReservationCreateManyClientInput_1 = require("../inputs/ReservationCreateManyClientInput");
let ReservationCreateManyClientInputEnvelope = exports.ReservationCreateManyClientInputEnvelope = class ReservationCreateManyClientInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReservationCreateManyClientInput_1.ReservationCreateManyClientInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], ReservationCreateManyClientInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ReservationCreateManyClientInputEnvelope.prototype, "skipDuplicates", void 0);
exports.ReservationCreateManyClientInputEnvelope = ReservationCreateManyClientInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("ReservationCreateManyClientInputEnvelope", {})
], ReservationCreateManyClientInputEnvelope);
