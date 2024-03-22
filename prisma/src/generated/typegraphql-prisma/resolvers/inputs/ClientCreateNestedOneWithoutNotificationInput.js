"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientCreateNestedOneWithoutNotificationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClientCreateOrConnectWithoutNotificationInput_1 = require("../inputs/ClientCreateOrConnectWithoutNotificationInput");
const ClientUncheckedCreateWithoutNotificationInput_1 = require("../inputs/ClientUncheckedCreateWithoutNotificationInput");
const ClientWhereUniqueInput_1 = require("../inputs/ClientWhereUniqueInput");
let ClientCreateNestedOneWithoutNotificationInput = class ClientCreateNestedOneWithoutNotificationInput {
};
exports.ClientCreateNestedOneWithoutNotificationInput = ClientCreateNestedOneWithoutNotificationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientUncheckedCreateWithoutNotificationInput_1.ClientUncheckedCreateWithoutNotificationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientUncheckedCreateWithoutNotificationInput_1.ClientUncheckedCreateWithoutNotificationInput)
], ClientCreateNestedOneWithoutNotificationInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientCreateOrConnectWithoutNotificationInput_1.ClientCreateOrConnectWithoutNotificationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientCreateOrConnectWithoutNotificationInput_1.ClientCreateOrConnectWithoutNotificationInput)
], ClientCreateNestedOneWithoutNotificationInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientWhereUniqueInput_1.ClientWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientWhereUniqueInput_1.ClientWhereUniqueInput)
], ClientCreateNestedOneWithoutNotificationInput.prototype, "connect", void 0);
exports.ClientCreateNestedOneWithoutNotificationInput = ClientCreateNestedOneWithoutNotificationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClientCreateNestedOneWithoutNotificationInput", {})
], ClientCreateNestedOneWithoutNotificationInput);
