"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientUpsertWithoutFavoriteInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClientUncheckedCreateWithoutFavoriteInput_1 = require("../inputs/ClientUncheckedCreateWithoutFavoriteInput");
const ClientUncheckedUpdateWithoutFavoriteInput_1 = require("../inputs/ClientUncheckedUpdateWithoutFavoriteInput");
const ClientWhereInput_1 = require("../inputs/ClientWhereInput");
let ClientUpsertWithoutFavoriteInput = class ClientUpsertWithoutFavoriteInput {
};
exports.ClientUpsertWithoutFavoriteInput = ClientUpsertWithoutFavoriteInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientUncheckedUpdateWithoutFavoriteInput_1.ClientUncheckedUpdateWithoutFavoriteInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClientUncheckedUpdateWithoutFavoriteInput_1.ClientUncheckedUpdateWithoutFavoriteInput)
], ClientUpsertWithoutFavoriteInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientUncheckedCreateWithoutFavoriteInput_1.ClientUncheckedCreateWithoutFavoriteInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClientUncheckedCreateWithoutFavoriteInput_1.ClientUncheckedCreateWithoutFavoriteInput)
], ClientUpsertWithoutFavoriteInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientWhereInput_1.ClientWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientWhereInput_1.ClientWhereInput)
], ClientUpsertWithoutFavoriteInput.prototype, "where", void 0);
exports.ClientUpsertWithoutFavoriteInput = ClientUpsertWithoutFavoriteInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClientUpsertWithoutFavoriteInput", {})
], ClientUpsertWithoutFavoriteInput);
