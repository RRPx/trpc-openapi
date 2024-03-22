"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationCreateOrConnectWithoutClientInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NotificationUncheckedCreateWithoutClientInput_1 = require("../inputs/NotificationUncheckedCreateWithoutClientInput");
const NotificationWhereUniqueInput_1 = require("../inputs/NotificationWhereUniqueInput");
let NotificationCreateOrConnectWithoutClientInput = class NotificationCreateOrConnectWithoutClientInput {
};
exports.NotificationCreateOrConnectWithoutClientInput = NotificationCreateOrConnectWithoutClientInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationWhereUniqueInput_1.NotificationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", NotificationWhereUniqueInput_1.NotificationWhereUniqueInput)
], NotificationCreateOrConnectWithoutClientInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationUncheckedCreateWithoutClientInput_1.NotificationUncheckedCreateWithoutClientInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", NotificationUncheckedCreateWithoutClientInput_1.NotificationUncheckedCreateWithoutClientInput)
], NotificationCreateOrConnectWithoutClientInput.prototype, "create", void 0);
exports.NotificationCreateOrConnectWithoutClientInput = NotificationCreateOrConnectWithoutClientInput = tslib_1.__decorate([
    TypeGraphQL.InputType("NotificationCreateOrConnectWithoutClientInput", {})
], NotificationCreateOrConnectWithoutClientInput);
