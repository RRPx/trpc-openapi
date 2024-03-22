"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationUpdateManyWithoutClientNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NotificationCreateManyClientInputEnvelope_1 = require("../inputs/NotificationCreateManyClientInputEnvelope");
const NotificationCreateOrConnectWithoutClientInput_1 = require("../inputs/NotificationCreateOrConnectWithoutClientInput");
const NotificationCreateWithoutClientInput_1 = require("../inputs/NotificationCreateWithoutClientInput");
const NotificationScalarWhereInput_1 = require("../inputs/NotificationScalarWhereInput");
const NotificationUpdateManyWithWhereWithoutClientInput_1 = require("../inputs/NotificationUpdateManyWithWhereWithoutClientInput");
const NotificationUpdateWithWhereUniqueWithoutClientInput_1 = require("../inputs/NotificationUpdateWithWhereUniqueWithoutClientInput");
const NotificationUpsertWithWhereUniqueWithoutClientInput_1 = require("../inputs/NotificationUpsertWithWhereUniqueWithoutClientInput");
const NotificationWhereUniqueInput_1 = require("../inputs/NotificationWhereUniqueInput");
let NotificationUpdateManyWithoutClientNestedInput = exports.NotificationUpdateManyWithoutClientNestedInput = class NotificationUpdateManyWithoutClientNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [NotificationCreateWithoutClientInput_1.NotificationCreateWithoutClientInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NotificationUpdateManyWithoutClientNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [NotificationCreateOrConnectWithoutClientInput_1.NotificationCreateOrConnectWithoutClientInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NotificationUpdateManyWithoutClientNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [NotificationUpsertWithWhereUniqueWithoutClientInput_1.NotificationUpsertWithWhereUniqueWithoutClientInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NotificationUpdateManyWithoutClientNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationCreateManyClientInputEnvelope_1.NotificationCreateManyClientInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationCreateManyClientInputEnvelope_1.NotificationCreateManyClientInputEnvelope)
], NotificationUpdateManyWithoutClientNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [NotificationWhereUniqueInput_1.NotificationWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NotificationUpdateManyWithoutClientNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [NotificationWhereUniqueInput_1.NotificationWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NotificationUpdateManyWithoutClientNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [NotificationWhereUniqueInput_1.NotificationWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NotificationUpdateManyWithoutClientNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [NotificationWhereUniqueInput_1.NotificationWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NotificationUpdateManyWithoutClientNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [NotificationUpdateWithWhereUniqueWithoutClientInput_1.NotificationUpdateWithWhereUniqueWithoutClientInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NotificationUpdateManyWithoutClientNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [NotificationUpdateManyWithWhereWithoutClientInput_1.NotificationUpdateManyWithWhereWithoutClientInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NotificationUpdateManyWithoutClientNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [NotificationScalarWhereInput_1.NotificationScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NotificationUpdateManyWithoutClientNestedInput.prototype, "deleteMany", void 0);
exports.NotificationUpdateManyWithoutClientNestedInput = NotificationUpdateManyWithoutClientNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("NotificationUpdateManyWithoutClientNestedInput", {})
], NotificationUpdateManyWithoutClientNestedInput);
