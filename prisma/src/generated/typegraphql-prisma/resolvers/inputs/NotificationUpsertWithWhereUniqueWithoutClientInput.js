"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationUpsertWithWhereUniqueWithoutClientInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NotificationUncheckedCreateWithoutClientInput_1 = require("../inputs/NotificationUncheckedCreateWithoutClientInput");
const NotificationUncheckedUpdateWithoutClientInput_1 = require("../inputs/NotificationUncheckedUpdateWithoutClientInput");
const NotificationWhereUniqueInput_1 = require("../inputs/NotificationWhereUniqueInput");
let NotificationUpsertWithWhereUniqueWithoutClientInput = class NotificationUpsertWithWhereUniqueWithoutClientInput {
};
exports.NotificationUpsertWithWhereUniqueWithoutClientInput = NotificationUpsertWithWhereUniqueWithoutClientInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationWhereUniqueInput_1.NotificationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", NotificationWhereUniqueInput_1.NotificationWhereUniqueInput)
], NotificationUpsertWithWhereUniqueWithoutClientInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationUncheckedUpdateWithoutClientInput_1.NotificationUncheckedUpdateWithoutClientInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", NotificationUncheckedUpdateWithoutClientInput_1.NotificationUncheckedUpdateWithoutClientInput)
], NotificationUpsertWithWhereUniqueWithoutClientInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationUncheckedCreateWithoutClientInput_1.NotificationUncheckedCreateWithoutClientInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", NotificationUncheckedCreateWithoutClientInput_1.NotificationUncheckedCreateWithoutClientInput)
], NotificationUpsertWithWhereUniqueWithoutClientInput.prototype, "create", void 0);
exports.NotificationUpsertWithWhereUniqueWithoutClientInput = NotificationUpsertWithWhereUniqueWithoutClientInput = tslib_1.__decorate([
    TypeGraphQL.InputType("NotificationUpsertWithWhereUniqueWithoutClientInput", {})
], NotificationUpsertWithWhereUniqueWithoutClientInput);
