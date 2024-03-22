"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientCreateOrConnectWithoutUsersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClientUncheckedCreateWithoutUsersInput_1 = require("../inputs/ClientUncheckedCreateWithoutUsersInput");
const ClientWhereUniqueInput_1 = require("../inputs/ClientWhereUniqueInput");
let ClientCreateOrConnectWithoutUsersInput = class ClientCreateOrConnectWithoutUsersInput {
};
exports.ClientCreateOrConnectWithoutUsersInput = ClientCreateOrConnectWithoutUsersInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientWhereUniqueInput_1.ClientWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClientWhereUniqueInput_1.ClientWhereUniqueInput)
], ClientCreateOrConnectWithoutUsersInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientUncheckedCreateWithoutUsersInput_1.ClientUncheckedCreateWithoutUsersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClientUncheckedCreateWithoutUsersInput_1.ClientUncheckedCreateWithoutUsersInput)
], ClientCreateOrConnectWithoutUsersInput.prototype, "create", void 0);
exports.ClientCreateOrConnectWithoutUsersInput = ClientCreateOrConnectWithoutUsersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClientCreateOrConnectWithoutUsersInput", {})
], ClientCreateOrConnectWithoutUsersInput);
