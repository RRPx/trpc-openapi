"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientUpsertWithoutNotificationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClientUncheckedCreateWithoutNotificationInput_1 = require("../inputs/ClientUncheckedCreateWithoutNotificationInput");
const ClientUncheckedUpdateWithoutNotificationInput_1 = require("../inputs/ClientUncheckedUpdateWithoutNotificationInput");
const ClientWhereInput_1 = require("../inputs/ClientWhereInput");
let ClientUpsertWithoutNotificationInput = class ClientUpsertWithoutNotificationInput {
};
exports.ClientUpsertWithoutNotificationInput = ClientUpsertWithoutNotificationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientUncheckedUpdateWithoutNotificationInput_1.ClientUncheckedUpdateWithoutNotificationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClientUncheckedUpdateWithoutNotificationInput_1.ClientUncheckedUpdateWithoutNotificationInput)
], ClientUpsertWithoutNotificationInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientUncheckedCreateWithoutNotificationInput_1.ClientUncheckedCreateWithoutNotificationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClientUncheckedCreateWithoutNotificationInput_1.ClientUncheckedCreateWithoutNotificationInput)
], ClientUpsertWithoutNotificationInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientWhereInput_1.ClientWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientWhereInput_1.ClientWhereInput)
], ClientUpsertWithoutNotificationInput.prototype, "where", void 0);
exports.ClientUpsertWithoutNotificationInput = ClientUpsertWithoutNotificationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClientUpsertWithoutNotificationInput", {})
], ClientUpsertWithoutNotificationInput);
