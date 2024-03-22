"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientUpsertWithoutReviewInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClientUncheckedCreateWithoutReviewInput_1 = require("../inputs/ClientUncheckedCreateWithoutReviewInput");
const ClientUncheckedUpdateWithoutReviewInput_1 = require("../inputs/ClientUncheckedUpdateWithoutReviewInput");
const ClientWhereInput_1 = require("../inputs/ClientWhereInput");
let ClientUpsertWithoutReviewInput = exports.ClientUpsertWithoutReviewInput = class ClientUpsertWithoutReviewInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientUncheckedUpdateWithoutReviewInput_1.ClientUncheckedUpdateWithoutReviewInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClientUncheckedUpdateWithoutReviewInput_1.ClientUncheckedUpdateWithoutReviewInput)
], ClientUpsertWithoutReviewInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientUncheckedCreateWithoutReviewInput_1.ClientUncheckedCreateWithoutReviewInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClientUncheckedCreateWithoutReviewInput_1.ClientUncheckedCreateWithoutReviewInput)
], ClientUpsertWithoutReviewInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientWhereInput_1.ClientWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientWhereInput_1.ClientWhereInput)
], ClientUpsertWithoutReviewInput.prototype, "where", void 0);
exports.ClientUpsertWithoutReviewInput = ClientUpsertWithoutReviewInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClientUpsertWithoutReviewInput", {})
], ClientUpsertWithoutReviewInput);
