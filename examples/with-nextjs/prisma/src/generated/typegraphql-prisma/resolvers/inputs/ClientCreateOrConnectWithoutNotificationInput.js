"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientCreateOrConnectWithoutNotificationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClientUncheckedCreateWithoutNotificationInput_1 = require("../inputs/ClientUncheckedCreateWithoutNotificationInput");
const ClientWhereUniqueInput_1 = require("../inputs/ClientWhereUniqueInput");
let ClientCreateOrConnectWithoutNotificationInput = exports.ClientCreateOrConnectWithoutNotificationInput = class ClientCreateOrConnectWithoutNotificationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientWhereUniqueInput_1.ClientWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClientWhereUniqueInput_1.ClientWhereUniqueInput)
], ClientCreateOrConnectWithoutNotificationInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientUncheckedCreateWithoutNotificationInput_1.ClientUncheckedCreateWithoutNotificationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClientUncheckedCreateWithoutNotificationInput_1.ClientUncheckedCreateWithoutNotificationInput)
], ClientCreateOrConnectWithoutNotificationInput.prototype, "create", void 0);
exports.ClientCreateOrConnectWithoutNotificationInput = ClientCreateOrConnectWithoutNotificationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClientCreateOrConnectWithoutNotificationInput", {})
], ClientCreateOrConnectWithoutNotificationInput);
