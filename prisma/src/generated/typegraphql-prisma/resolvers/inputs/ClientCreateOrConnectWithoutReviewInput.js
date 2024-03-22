"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientCreateOrConnectWithoutReviewInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClientUncheckedCreateWithoutReviewInput_1 = require("../inputs/ClientUncheckedCreateWithoutReviewInput");
const ClientWhereUniqueInput_1 = require("../inputs/ClientWhereUniqueInput");
let ClientCreateOrConnectWithoutReviewInput = class ClientCreateOrConnectWithoutReviewInput {
};
exports.ClientCreateOrConnectWithoutReviewInput = ClientCreateOrConnectWithoutReviewInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientWhereUniqueInput_1.ClientWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClientWhereUniqueInput_1.ClientWhereUniqueInput)
], ClientCreateOrConnectWithoutReviewInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientUncheckedCreateWithoutReviewInput_1.ClientUncheckedCreateWithoutReviewInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ClientUncheckedCreateWithoutReviewInput_1.ClientUncheckedCreateWithoutReviewInput)
], ClientCreateOrConnectWithoutReviewInput.prototype, "create", void 0);
exports.ClientCreateOrConnectWithoutReviewInput = ClientCreateOrConnectWithoutReviewInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClientCreateOrConnectWithoutReviewInput", {})
], ClientCreateOrConnectWithoutReviewInput);
