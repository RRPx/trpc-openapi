"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationUpdateWithWhereUniqueWithoutCastInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NotificationUncheckedUpdateWithoutCastInput_1 = require("../inputs/NotificationUncheckedUpdateWithoutCastInput");
const NotificationWhereUniqueInput_1 = require("../inputs/NotificationWhereUniqueInput");
let NotificationUpdateWithWhereUniqueWithoutCastInput = exports.NotificationUpdateWithWhereUniqueWithoutCastInput = class NotificationUpdateWithWhereUniqueWithoutCastInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationWhereUniqueInput_1.NotificationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", NotificationWhereUniqueInput_1.NotificationWhereUniqueInput)
], NotificationUpdateWithWhereUniqueWithoutCastInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationUncheckedUpdateWithoutCastInput_1.NotificationUncheckedUpdateWithoutCastInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", NotificationUncheckedUpdateWithoutCastInput_1.NotificationUncheckedUpdateWithoutCastInput)
], NotificationUpdateWithWhereUniqueWithoutCastInput.prototype, "data", void 0);
exports.NotificationUpdateWithWhereUniqueWithoutCastInput = NotificationUpdateWithWhereUniqueWithoutCastInput = tslib_1.__decorate([
    TypeGraphQL.InputType("NotificationUpdateWithWhereUniqueWithoutCastInput", {})
], NotificationUpdateWithWhereUniqueWithoutCastInput);
