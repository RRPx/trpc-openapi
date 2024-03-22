"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationUncheckedUpdateManyWithoutCastNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NotificationCreateManyCastInputEnvelope_1 = require("../inputs/NotificationCreateManyCastInputEnvelope");
const NotificationCreateOrConnectWithoutCastInput_1 = require("../inputs/NotificationCreateOrConnectWithoutCastInput");
const NotificationCreateWithoutCastInput_1 = require("../inputs/NotificationCreateWithoutCastInput");
const NotificationScalarWhereInput_1 = require("../inputs/NotificationScalarWhereInput");
const NotificationUpdateManyWithWhereWithoutCastInput_1 = require("../inputs/NotificationUpdateManyWithWhereWithoutCastInput");
const NotificationUpdateWithWhereUniqueWithoutCastInput_1 = require("../inputs/NotificationUpdateWithWhereUniqueWithoutCastInput");
const NotificationUpsertWithWhereUniqueWithoutCastInput_1 = require("../inputs/NotificationUpsertWithWhereUniqueWithoutCastInput");
const NotificationWhereUniqueInput_1 = require("../inputs/NotificationWhereUniqueInput");
let NotificationUncheckedUpdateManyWithoutCastNestedInput = exports.NotificationUncheckedUpdateManyWithoutCastNestedInput = class NotificationUncheckedUpdateManyWithoutCastNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [NotificationCreateWithoutCastInput_1.NotificationCreateWithoutCastInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NotificationUncheckedUpdateManyWithoutCastNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [NotificationCreateOrConnectWithoutCastInput_1.NotificationCreateOrConnectWithoutCastInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NotificationUncheckedUpdateManyWithoutCastNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [NotificationUpsertWithWhereUniqueWithoutCastInput_1.NotificationUpsertWithWhereUniqueWithoutCastInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NotificationUncheckedUpdateManyWithoutCastNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationCreateManyCastInputEnvelope_1.NotificationCreateManyCastInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationCreateManyCastInputEnvelope_1.NotificationCreateManyCastInputEnvelope)
], NotificationUncheckedUpdateManyWithoutCastNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [NotificationWhereUniqueInput_1.NotificationWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NotificationUncheckedUpdateManyWithoutCastNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [NotificationWhereUniqueInput_1.NotificationWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NotificationUncheckedUpdateManyWithoutCastNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [NotificationWhereUniqueInput_1.NotificationWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NotificationUncheckedUpdateManyWithoutCastNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [NotificationWhereUniqueInput_1.NotificationWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NotificationUncheckedUpdateManyWithoutCastNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [NotificationUpdateWithWhereUniqueWithoutCastInput_1.NotificationUpdateWithWhereUniqueWithoutCastInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NotificationUncheckedUpdateManyWithoutCastNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [NotificationUpdateManyWithWhereWithoutCastInput_1.NotificationUpdateManyWithWhereWithoutCastInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NotificationUncheckedUpdateManyWithoutCastNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [NotificationScalarWhereInput_1.NotificationScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NotificationUncheckedUpdateManyWithoutCastNestedInput.prototype, "deleteMany", void 0);
exports.NotificationUncheckedUpdateManyWithoutCastNestedInput = NotificationUncheckedUpdateManyWithoutCastNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("NotificationUncheckedUpdateManyWithoutCastNestedInput", {})
], NotificationUncheckedUpdateManyWithoutCastNestedInput);
