"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationUpsertWithWhereUniqueWithoutCastInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NotificationUncheckedCreateWithoutCastInput_1 = require("../inputs/NotificationUncheckedCreateWithoutCastInput");
const NotificationUncheckedUpdateWithoutCastInput_1 = require("../inputs/NotificationUncheckedUpdateWithoutCastInput");
const NotificationWhereUniqueInput_1 = require("../inputs/NotificationWhereUniqueInput");
let NotificationUpsertWithWhereUniqueWithoutCastInput = exports.NotificationUpsertWithWhereUniqueWithoutCastInput = class NotificationUpsertWithWhereUniqueWithoutCastInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationWhereUniqueInput_1.NotificationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", NotificationWhereUniqueInput_1.NotificationWhereUniqueInput)
], NotificationUpsertWithWhereUniqueWithoutCastInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationUncheckedUpdateWithoutCastInput_1.NotificationUncheckedUpdateWithoutCastInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", NotificationUncheckedUpdateWithoutCastInput_1.NotificationUncheckedUpdateWithoutCastInput)
], NotificationUpsertWithWhereUniqueWithoutCastInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationUncheckedCreateWithoutCastInput_1.NotificationUncheckedCreateWithoutCastInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", NotificationUncheckedCreateWithoutCastInput_1.NotificationUncheckedCreateWithoutCastInput)
], NotificationUpsertWithWhereUniqueWithoutCastInput.prototype, "create", void 0);
exports.NotificationUpsertWithWhereUniqueWithoutCastInput = NotificationUpsertWithWhereUniqueWithoutCastInput = tslib_1.__decorate([
    TypeGraphQL.InputType("NotificationUpsertWithWhereUniqueWithoutCastInput", {})
], NotificationUpsertWithWhereUniqueWithoutCastInput);
