"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientCreateNestedOneWithoutReviewInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClientCreateOrConnectWithoutReviewInput_1 = require("../inputs/ClientCreateOrConnectWithoutReviewInput");
const ClientUncheckedCreateWithoutReviewInput_1 = require("../inputs/ClientUncheckedCreateWithoutReviewInput");
const ClientWhereUniqueInput_1 = require("../inputs/ClientWhereUniqueInput");
let ClientCreateNestedOneWithoutReviewInput = class ClientCreateNestedOneWithoutReviewInput {
};
exports.ClientCreateNestedOneWithoutReviewInput = ClientCreateNestedOneWithoutReviewInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientUncheckedCreateWithoutReviewInput_1.ClientUncheckedCreateWithoutReviewInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientUncheckedCreateWithoutReviewInput_1.ClientUncheckedCreateWithoutReviewInput)
], ClientCreateNestedOneWithoutReviewInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientCreateOrConnectWithoutReviewInput_1.ClientCreateOrConnectWithoutReviewInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientCreateOrConnectWithoutReviewInput_1.ClientCreateOrConnectWithoutReviewInput)
], ClientCreateNestedOneWithoutReviewInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientWhereUniqueInput_1.ClientWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientWhereUniqueInput_1.ClientWhereUniqueInput)
], ClientCreateNestedOneWithoutReviewInput.prototype, "connect", void 0);
exports.ClientCreateNestedOneWithoutReviewInput = ClientCreateNestedOneWithoutReviewInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClientCreateNestedOneWithoutReviewInput", {})
], ClientCreateNestedOneWithoutReviewInput);
