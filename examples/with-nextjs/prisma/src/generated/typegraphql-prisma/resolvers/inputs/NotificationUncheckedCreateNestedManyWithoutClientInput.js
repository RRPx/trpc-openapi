"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationUncheckedCreateNestedManyWithoutClientInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NotificationCreateManyClientInputEnvelope_1 = require("../inputs/NotificationCreateManyClientInputEnvelope");
const NotificationCreateOrConnectWithoutClientInput_1 = require("../inputs/NotificationCreateOrConnectWithoutClientInput");
const NotificationCreateWithoutClientInput_1 = require("../inputs/NotificationCreateWithoutClientInput");
const NotificationWhereUniqueInput_1 = require("../inputs/NotificationWhereUniqueInput");
let NotificationUncheckedCreateNestedManyWithoutClientInput = exports.NotificationUncheckedCreateNestedManyWithoutClientInput = class NotificationUncheckedCreateNestedManyWithoutClientInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [NotificationCreateWithoutClientInput_1.NotificationCreateWithoutClientInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NotificationUncheckedCreateNestedManyWithoutClientInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [NotificationCreateOrConnectWithoutClientInput_1.NotificationCreateOrConnectWithoutClientInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NotificationUncheckedCreateNestedManyWithoutClientInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationCreateManyClientInputEnvelope_1.NotificationCreateManyClientInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationCreateManyClientInputEnvelope_1.NotificationCreateManyClientInputEnvelope)
], NotificationUncheckedCreateNestedManyWithoutClientInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [NotificationWhereUniqueInput_1.NotificationWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NotificationUncheckedCreateNestedManyWithoutClientInput.prototype, "connect", void 0);
exports.NotificationUncheckedCreateNestedManyWithoutClientInput = NotificationUncheckedCreateNestedManyWithoutClientInput = tslib_1.__decorate([
    TypeGraphQL.InputType("NotificationUncheckedCreateNestedManyWithoutClientInput", {})
], NotificationUncheckedCreateNestedManyWithoutClientInput);
