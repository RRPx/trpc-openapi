"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationCreateManyClientInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NotificationCreateManyClientInput_1 = require("../inputs/NotificationCreateManyClientInput");
let NotificationCreateManyClientInputEnvelope = exports.NotificationCreateManyClientInputEnvelope = class NotificationCreateManyClientInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [NotificationCreateManyClientInput_1.NotificationCreateManyClientInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], NotificationCreateManyClientInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], NotificationCreateManyClientInputEnvelope.prototype, "skipDuplicates", void 0);
exports.NotificationCreateManyClientInputEnvelope = NotificationCreateManyClientInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("NotificationCreateManyClientInputEnvelope", {})
], NotificationCreateManyClientInputEnvelope);
