"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationCreateManyCastInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NotificationCreateManyCastInput_1 = require("../inputs/NotificationCreateManyCastInput");
let NotificationCreateManyCastInputEnvelope = exports.NotificationCreateManyCastInputEnvelope = class NotificationCreateManyCastInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [NotificationCreateManyCastInput_1.NotificationCreateManyCastInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], NotificationCreateManyCastInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], NotificationCreateManyCastInputEnvelope.prototype, "skipDuplicates", void 0);
exports.NotificationCreateManyCastInputEnvelope = NotificationCreateManyCastInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("NotificationCreateManyCastInputEnvelope", {})
], NotificationCreateManyCastInputEnvelope);
