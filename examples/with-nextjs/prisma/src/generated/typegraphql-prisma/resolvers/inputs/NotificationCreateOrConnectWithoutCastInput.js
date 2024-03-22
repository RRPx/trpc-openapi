"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationCreateOrConnectWithoutCastInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NotificationUncheckedCreateWithoutCastInput_1 = require("../inputs/NotificationUncheckedCreateWithoutCastInput");
const NotificationWhereUniqueInput_1 = require("../inputs/NotificationWhereUniqueInput");
let NotificationCreateOrConnectWithoutCastInput = exports.NotificationCreateOrConnectWithoutCastInput = class NotificationCreateOrConnectWithoutCastInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationWhereUniqueInput_1.NotificationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", NotificationWhereUniqueInput_1.NotificationWhereUniqueInput)
], NotificationCreateOrConnectWithoutCastInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationUncheckedCreateWithoutCastInput_1.NotificationUncheckedCreateWithoutCastInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", NotificationUncheckedCreateWithoutCastInput_1.NotificationUncheckedCreateWithoutCastInput)
], NotificationCreateOrConnectWithoutCastInput.prototype, "create", void 0);
exports.NotificationCreateOrConnectWithoutCastInput = NotificationCreateOrConnectWithoutCastInput = tslib_1.__decorate([
    TypeGraphQL.InputType("NotificationCreateOrConnectWithoutCastInput", {})
], NotificationCreateOrConnectWithoutCastInput);
