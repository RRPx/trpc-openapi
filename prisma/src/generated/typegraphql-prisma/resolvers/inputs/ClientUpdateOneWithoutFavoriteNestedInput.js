"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientUpdateOneWithoutFavoriteNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClientCreateOrConnectWithoutFavoriteInput_1 = require("../inputs/ClientCreateOrConnectWithoutFavoriteInput");
const ClientUncheckedCreateWithoutFavoriteInput_1 = require("../inputs/ClientUncheckedCreateWithoutFavoriteInput");
const ClientUncheckedUpdateWithoutFavoriteInput_1 = require("../inputs/ClientUncheckedUpdateWithoutFavoriteInput");
const ClientUpsertWithoutFavoriteInput_1 = require("../inputs/ClientUpsertWithoutFavoriteInput");
const ClientWhereInput_1 = require("../inputs/ClientWhereInput");
const ClientWhereUniqueInput_1 = require("../inputs/ClientWhereUniqueInput");
let ClientUpdateOneWithoutFavoriteNestedInput = class ClientUpdateOneWithoutFavoriteNestedInput {
};
exports.ClientUpdateOneWithoutFavoriteNestedInput = ClientUpdateOneWithoutFavoriteNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientUncheckedCreateWithoutFavoriteInput_1.ClientUncheckedCreateWithoutFavoriteInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientUncheckedCreateWithoutFavoriteInput_1.ClientUncheckedCreateWithoutFavoriteInput)
], ClientUpdateOneWithoutFavoriteNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientCreateOrConnectWithoutFavoriteInput_1.ClientCreateOrConnectWithoutFavoriteInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientCreateOrConnectWithoutFavoriteInput_1.ClientCreateOrConnectWithoutFavoriteInput)
], ClientUpdateOneWithoutFavoriteNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientUpsertWithoutFavoriteInput_1.ClientUpsertWithoutFavoriteInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientUpsertWithoutFavoriteInput_1.ClientUpsertWithoutFavoriteInput)
], ClientUpdateOneWithoutFavoriteNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientWhereInput_1.ClientWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientWhereInput_1.ClientWhereInput)
], ClientUpdateOneWithoutFavoriteNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientWhereInput_1.ClientWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientWhereInput_1.ClientWhereInput)
], ClientUpdateOneWithoutFavoriteNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientWhereUniqueInput_1.ClientWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientWhereUniqueInput_1.ClientWhereUniqueInput)
], ClientUpdateOneWithoutFavoriteNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientUncheckedUpdateWithoutFavoriteInput_1.ClientUncheckedUpdateWithoutFavoriteInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientUncheckedUpdateWithoutFavoriteInput_1.ClientUncheckedUpdateWithoutFavoriteInput)
], ClientUpdateOneWithoutFavoriteNestedInput.prototype, "update", void 0);
exports.ClientUpdateOneWithoutFavoriteNestedInput = ClientUpdateOneWithoutFavoriteNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClientUpdateOneWithoutFavoriteNestedInput", {})
], ClientUpdateOneWithoutFavoriteNestedInput);
