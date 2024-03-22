"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientCreateNestedOneWithoutUsersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClientCreateOrConnectWithoutUsersInput_1 = require("../inputs/ClientCreateOrConnectWithoutUsersInput");
const ClientUncheckedCreateWithoutUsersInput_1 = require("../inputs/ClientUncheckedCreateWithoutUsersInput");
const ClientWhereUniqueInput_1 = require("../inputs/ClientWhereUniqueInput");
let ClientCreateNestedOneWithoutUsersInput = class ClientCreateNestedOneWithoutUsersInput {
};
exports.ClientCreateNestedOneWithoutUsersInput = ClientCreateNestedOneWithoutUsersInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientUncheckedCreateWithoutUsersInput_1.ClientUncheckedCreateWithoutUsersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientUncheckedCreateWithoutUsersInput_1.ClientUncheckedCreateWithoutUsersInput)
], ClientCreateNestedOneWithoutUsersInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientCreateOrConnectWithoutUsersInput_1.ClientCreateOrConnectWithoutUsersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientCreateOrConnectWithoutUsersInput_1.ClientCreateOrConnectWithoutUsersInput)
], ClientCreateNestedOneWithoutUsersInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientWhereUniqueInput_1.ClientWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientWhereUniqueInput_1.ClientWhereUniqueInput)
], ClientCreateNestedOneWithoutUsersInput.prototype, "connect", void 0);
exports.ClientCreateNestedOneWithoutUsersInput = ClientCreateNestedOneWithoutUsersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClientCreateNestedOneWithoutUsersInput", {})
], ClientCreateNestedOneWithoutUsersInput);
