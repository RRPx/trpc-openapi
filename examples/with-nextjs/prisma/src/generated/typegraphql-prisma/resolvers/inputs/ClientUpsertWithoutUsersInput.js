"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientUpsertWithoutUsersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClientUncheckedCreateWithoutUsersInput_1 = require("../inputs/ClientUncheckedCreateWithoutUsersInput");
const ClientUncheckedUpdateWithoutUsersInput_1 = require("../inputs/ClientUncheckedUpdateWithoutUsersInput");
const ClientWhereInput_1 = require("../inputs/ClientWhereInput");
let ClientUpsertWithoutUsersInput = exports.ClientUpsertWithoutUsersInput = class ClientUpsertWithoutUsersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientUncheckedUpdateWithoutUsersInput_1.ClientUncheckedUpdateWithoutUsersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClientUncheckedUpdateWithoutUsersInput_1.ClientUncheckedUpdateWithoutUsersInput)
], ClientUpsertWithoutUsersInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientUncheckedCreateWithoutUsersInput_1.ClientUncheckedCreateWithoutUsersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClientUncheckedCreateWithoutUsersInput_1.ClientUncheckedCreateWithoutUsersInput)
], ClientUpsertWithoutUsersInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientWhereInput_1.ClientWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientWhereInput_1.ClientWhereInput)
], ClientUpsertWithoutUsersInput.prototype, "where", void 0);
exports.ClientUpsertWithoutUsersInput = ClientUpsertWithoutUsersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClientUpsertWithoutUsersInput", {})
], ClientUpsertWithoutUsersInput);
