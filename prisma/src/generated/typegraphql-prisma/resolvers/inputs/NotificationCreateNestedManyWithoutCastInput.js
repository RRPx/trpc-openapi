"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationCreateNestedManyWithoutCastInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NotificationCreateManyCastInputEnvelope_1 = require("../inputs/NotificationCreateManyCastInputEnvelope");
const NotificationCreateOrConnectWithoutCastInput_1 = require("../inputs/NotificationCreateOrConnectWithoutCastInput");
const NotificationCreateWithoutCastInput_1 = require("../inputs/NotificationCreateWithoutCastInput");
const NotificationWhereUniqueInput_1 = require("../inputs/NotificationWhereUniqueInput");
let NotificationCreateNestedManyWithoutCastInput = class NotificationCreateNestedManyWithoutCastInput {
};
exports.NotificationCreateNestedManyWithoutCastInput = NotificationCreateNestedManyWithoutCastInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [NotificationCreateWithoutCastInput_1.NotificationCreateWithoutCastInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NotificationCreateNestedManyWithoutCastInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [NotificationCreateOrConnectWithoutCastInput_1.NotificationCreateOrConnectWithoutCastInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NotificationCreateNestedManyWithoutCastInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationCreateManyCastInputEnvelope_1.NotificationCreateManyCastInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationCreateManyCastInputEnvelope_1.NotificationCreateManyCastInputEnvelope)
], NotificationCreateNestedManyWithoutCastInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [NotificationWhereUniqueInput_1.NotificationWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NotificationCreateNestedManyWithoutCastInput.prototype, "connect", void 0);
exports.NotificationCreateNestedManyWithoutCastInput = NotificationCreateNestedManyWithoutCastInput = tslib_1.__decorate([
    TypeGraphQL.InputType("NotificationCreateNestedManyWithoutCastInput", {})
], NotificationCreateNestedManyWithoutCastInput);
