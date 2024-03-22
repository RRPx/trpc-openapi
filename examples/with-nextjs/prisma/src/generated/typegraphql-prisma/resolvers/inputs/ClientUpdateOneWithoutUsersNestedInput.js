"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientUpdateOneWithoutUsersNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClientCreateOrConnectWithoutUsersInput_1 = require("../inputs/ClientCreateOrConnectWithoutUsersInput");
const ClientUncheckedCreateWithoutUsersInput_1 = require("../inputs/ClientUncheckedCreateWithoutUsersInput");
const ClientUncheckedUpdateWithoutUsersInput_1 = require("../inputs/ClientUncheckedUpdateWithoutUsersInput");
const ClientUpsertWithoutUsersInput_1 = require("../inputs/ClientUpsertWithoutUsersInput");
const ClientWhereInput_1 = require("../inputs/ClientWhereInput");
const ClientWhereUniqueInput_1 = require("../inputs/ClientWhereUniqueInput");
let ClientUpdateOneWithoutUsersNestedInput = exports.ClientUpdateOneWithoutUsersNestedInput = class ClientUpdateOneWithoutUsersNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientUncheckedCreateWithoutUsersInput_1.ClientUncheckedCreateWithoutUsersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientUncheckedCreateWithoutUsersInput_1.ClientUncheckedCreateWithoutUsersInput)
], ClientUpdateOneWithoutUsersNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientCreateOrConnectWithoutUsersInput_1.ClientCreateOrConnectWithoutUsersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientCreateOrConnectWithoutUsersInput_1.ClientCreateOrConnectWithoutUsersInput)
], ClientUpdateOneWithoutUsersNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientUpsertWithoutUsersInput_1.ClientUpsertWithoutUsersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientUpsertWithoutUsersInput_1.ClientUpsertWithoutUsersInput)
], ClientUpdateOneWithoutUsersNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientWhereInput_1.ClientWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientWhereInput_1.ClientWhereInput)
], ClientUpdateOneWithoutUsersNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientWhereInput_1.ClientWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientWhereInput_1.ClientWhereInput)
], ClientUpdateOneWithoutUsersNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientWhereUniqueInput_1.ClientWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientWhereUniqueInput_1.ClientWhereUniqueInput)
], ClientUpdateOneWithoutUsersNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientUncheckedUpdateWithoutUsersInput_1.ClientUncheckedUpdateWithoutUsersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientUncheckedUpdateWithoutUsersInput_1.ClientUncheckedUpdateWithoutUsersInput)
], ClientUpdateOneWithoutUsersNestedInput.prototype, "update", void 0);
exports.ClientUpdateOneWithoutUsersNestedInput = ClientUpdateOneWithoutUsersNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClientUpdateOneWithoutUsersNestedInput", {})
], ClientUpdateOneWithoutUsersNestedInput);
