"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientUpdateOneWithoutNotificationNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClientCreateOrConnectWithoutNotificationInput_1 = require("../inputs/ClientCreateOrConnectWithoutNotificationInput");
const ClientUncheckedCreateWithoutNotificationInput_1 = require("../inputs/ClientUncheckedCreateWithoutNotificationInput");
const ClientUncheckedUpdateWithoutNotificationInput_1 = require("../inputs/ClientUncheckedUpdateWithoutNotificationInput");
const ClientUpsertWithoutNotificationInput_1 = require("../inputs/ClientUpsertWithoutNotificationInput");
const ClientWhereInput_1 = require("../inputs/ClientWhereInput");
const ClientWhereUniqueInput_1 = require("../inputs/ClientWhereUniqueInput");
let ClientUpdateOneWithoutNotificationNestedInput = exports.ClientUpdateOneWithoutNotificationNestedInput = class ClientUpdateOneWithoutNotificationNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientUncheckedCreateWithoutNotificationInput_1.ClientUncheckedCreateWithoutNotificationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientUncheckedCreateWithoutNotificationInput_1.ClientUncheckedCreateWithoutNotificationInput)
], ClientUpdateOneWithoutNotificationNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientCreateOrConnectWithoutNotificationInput_1.ClientCreateOrConnectWithoutNotificationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientCreateOrConnectWithoutNotificationInput_1.ClientCreateOrConnectWithoutNotificationInput)
], ClientUpdateOneWithoutNotificationNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientUpsertWithoutNotificationInput_1.ClientUpsertWithoutNotificationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientUpsertWithoutNotificationInput_1.ClientUpsertWithoutNotificationInput)
], ClientUpdateOneWithoutNotificationNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientWhereInput_1.ClientWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientWhereInput_1.ClientWhereInput)
], ClientUpdateOneWithoutNotificationNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientWhereInput_1.ClientWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientWhereInput_1.ClientWhereInput)
], ClientUpdateOneWithoutNotificationNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientWhereUniqueInput_1.ClientWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientWhereUniqueInput_1.ClientWhereUniqueInput)
], ClientUpdateOneWithoutNotificationNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientUncheckedUpdateWithoutNotificationInput_1.ClientUncheckedUpdateWithoutNotificationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientUncheckedUpdateWithoutNotificationInput_1.ClientUncheckedUpdateWithoutNotificationInput)
], ClientUpdateOneWithoutNotificationNestedInput.prototype, "update", void 0);
exports.ClientUpdateOneWithoutNotificationNestedInput = ClientUpdateOneWithoutNotificationNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClientUpdateOneWithoutNotificationNestedInput", {})
], ClientUpdateOneWithoutNotificationNestedInput);
