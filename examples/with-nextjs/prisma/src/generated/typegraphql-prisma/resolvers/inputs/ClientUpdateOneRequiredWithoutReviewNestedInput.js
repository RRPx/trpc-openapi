"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientUpdateOneRequiredWithoutReviewNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClientCreateOrConnectWithoutReviewInput_1 = require("../inputs/ClientCreateOrConnectWithoutReviewInput");
const ClientUncheckedCreateWithoutReviewInput_1 = require("../inputs/ClientUncheckedCreateWithoutReviewInput");
const ClientUncheckedUpdateWithoutReviewInput_1 = require("../inputs/ClientUncheckedUpdateWithoutReviewInput");
const ClientUpsertWithoutReviewInput_1 = require("../inputs/ClientUpsertWithoutReviewInput");
const ClientWhereUniqueInput_1 = require("../inputs/ClientWhereUniqueInput");
let ClientUpdateOneRequiredWithoutReviewNestedInput = exports.ClientUpdateOneRequiredWithoutReviewNestedInput = class ClientUpdateOneRequiredWithoutReviewNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientUncheckedCreateWithoutReviewInput_1.ClientUncheckedCreateWithoutReviewInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientUncheckedCreateWithoutReviewInput_1.ClientUncheckedCreateWithoutReviewInput)
], ClientUpdateOneRequiredWithoutReviewNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientCreateOrConnectWithoutReviewInput_1.ClientCreateOrConnectWithoutReviewInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientCreateOrConnectWithoutReviewInput_1.ClientCreateOrConnectWithoutReviewInput)
], ClientUpdateOneRequiredWithoutReviewNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientUpsertWithoutReviewInput_1.ClientUpsertWithoutReviewInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientUpsertWithoutReviewInput_1.ClientUpsertWithoutReviewInput)
], ClientUpdateOneRequiredWithoutReviewNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientWhereUniqueInput_1.ClientWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientWhereUniqueInput_1.ClientWhereUniqueInput)
], ClientUpdateOneRequiredWithoutReviewNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientUncheckedUpdateWithoutReviewInput_1.ClientUncheckedUpdateWithoutReviewInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientUncheckedUpdateWithoutReviewInput_1.ClientUncheckedUpdateWithoutReviewInput)
], ClientUpdateOneRequiredWithoutReviewNestedInput.prototype, "update", void 0);
exports.ClientUpdateOneRequiredWithoutReviewNestedInput = ClientUpdateOneRequiredWithoutReviewNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClientUpdateOneRequiredWithoutReviewNestedInput", {})
], ClientUpdateOneRequiredWithoutReviewNestedInput);
