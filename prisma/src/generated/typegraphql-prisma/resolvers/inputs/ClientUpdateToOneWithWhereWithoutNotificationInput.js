"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientUpdateToOneWithWhereWithoutNotificationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClientUncheckedUpdateWithoutNotificationInput_1 = require("../inputs/ClientUncheckedUpdateWithoutNotificationInput");
const ClientWhereInput_1 = require("../inputs/ClientWhereInput");
let ClientUpdateToOneWithWhereWithoutNotificationInput = class ClientUpdateToOneWithWhereWithoutNotificationInput {
};
exports.ClientUpdateToOneWithWhereWithoutNotificationInput = ClientUpdateToOneWithWhereWithoutNotificationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientWhereInput_1.ClientWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientWhereInput_1.ClientWhereInput)
], ClientUpdateToOneWithWhereWithoutNotificationInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientUncheckedUpdateWithoutNotificationInput_1.ClientUncheckedUpdateWithoutNotificationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClientUncheckedUpdateWithoutNotificationInput_1.ClientUncheckedUpdateWithoutNotificationInput)
], ClientUpdateToOneWithWhereWithoutNotificationInput.prototype, "data", void 0);
exports.ClientUpdateToOneWithWhereWithoutNotificationInput = ClientUpdateToOneWithWhereWithoutNotificationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClientUpdateToOneWithWhereWithoutNotificationInput", {})
], ClientUpdateToOneWithWhereWithoutNotificationInput);
