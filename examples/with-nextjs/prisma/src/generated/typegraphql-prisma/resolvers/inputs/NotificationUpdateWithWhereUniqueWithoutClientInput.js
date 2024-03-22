"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationUpdateWithWhereUniqueWithoutClientInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NotificationUncheckedUpdateWithoutClientInput_1 = require("../inputs/NotificationUncheckedUpdateWithoutClientInput");
const NotificationWhereUniqueInput_1 = require("../inputs/NotificationWhereUniqueInput");
let NotificationUpdateWithWhereUniqueWithoutClientInput = exports.NotificationUpdateWithWhereUniqueWithoutClientInput = class NotificationUpdateWithWhereUniqueWithoutClientInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationWhereUniqueInput_1.NotificationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", NotificationWhereUniqueInput_1.NotificationWhereUniqueInput)
], NotificationUpdateWithWhereUniqueWithoutClientInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationUncheckedUpdateWithoutClientInput_1.NotificationUncheckedUpdateWithoutClientInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", NotificationUncheckedUpdateWithoutClientInput_1.NotificationUncheckedUpdateWithoutClientInput)
], NotificationUpdateWithWhereUniqueWithoutClientInput.prototype, "data", void 0);
exports.NotificationUpdateWithWhereUniqueWithoutClientInput = NotificationUpdateWithWhereUniqueWithoutClientInput = tslib_1.__decorate([
    TypeGraphQL.InputType("NotificationUpdateWithWhereUniqueWithoutClientInput", {})
], NotificationUpdateWithWhereUniqueWithoutClientInput);
