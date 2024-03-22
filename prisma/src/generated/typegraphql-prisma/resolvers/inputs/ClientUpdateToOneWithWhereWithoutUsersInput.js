"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientUpdateToOneWithWhereWithoutUsersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClientUncheckedUpdateWithoutUsersInput_1 = require("../inputs/ClientUncheckedUpdateWithoutUsersInput");
const ClientWhereInput_1 = require("../inputs/ClientWhereInput");
let ClientUpdateToOneWithWhereWithoutUsersInput = class ClientUpdateToOneWithWhereWithoutUsersInput {
};
exports.ClientUpdateToOneWithWhereWithoutUsersInput = ClientUpdateToOneWithWhereWithoutUsersInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientWhereInput_1.ClientWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientWhereInput_1.ClientWhereInput)
], ClientUpdateToOneWithWhereWithoutUsersInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientUncheckedUpdateWithoutUsersInput_1.ClientUncheckedUpdateWithoutUsersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClientUncheckedUpdateWithoutUsersInput_1.ClientUncheckedUpdateWithoutUsersInput)
], ClientUpdateToOneWithWhereWithoutUsersInput.prototype, "data", void 0);
exports.ClientUpdateToOneWithWhereWithoutUsersInput = ClientUpdateToOneWithWhereWithoutUsersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClientUpdateToOneWithWhereWithoutUsersInput", {})
], ClientUpdateToOneWithWhereWithoutUsersInput);
