"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientUpdateToOneWithWhereWithoutReviewInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClientUncheckedUpdateWithoutReviewInput_1 = require("../inputs/ClientUncheckedUpdateWithoutReviewInput");
const ClientWhereInput_1 = require("../inputs/ClientWhereInput");
let ClientUpdateToOneWithWhereWithoutReviewInput = class ClientUpdateToOneWithWhereWithoutReviewInput {
};
exports.ClientUpdateToOneWithWhereWithoutReviewInput = ClientUpdateToOneWithWhereWithoutReviewInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientWhereInput_1.ClientWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientWhereInput_1.ClientWhereInput)
], ClientUpdateToOneWithWhereWithoutReviewInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientUncheckedUpdateWithoutReviewInput_1.ClientUncheckedUpdateWithoutReviewInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClientUncheckedUpdateWithoutReviewInput_1.ClientUncheckedUpdateWithoutReviewInput)
], ClientUpdateToOneWithWhereWithoutReviewInput.prototype, "data", void 0);
exports.ClientUpdateToOneWithWhereWithoutReviewInput = ClientUpdateToOneWithWhereWithoutReviewInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClientUpdateToOneWithWhereWithoutReviewInput", {})
], ClientUpdateToOneWithWhereWithoutReviewInput);
