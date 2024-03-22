"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastCreateOrConnectWithoutReviewInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastUncheckedCreateWithoutReviewInput_1 = require("../inputs/CastUncheckedCreateWithoutReviewInput");
const CastWhereUniqueInput_1 = require("../inputs/CastWhereUniqueInput");
let CastCreateOrConnectWithoutReviewInput = class CastCreateOrConnectWithoutReviewInput {
};
exports.CastCreateOrConnectWithoutReviewInput = CastCreateOrConnectWithoutReviewInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastWhereUniqueInput_1.CastWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CastWhereUniqueInput_1.CastWhereUniqueInput)
], CastCreateOrConnectWithoutReviewInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUncheckedCreateWithoutReviewInput_1.CastUncheckedCreateWithoutReviewInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CastUncheckedCreateWithoutReviewInput_1.CastUncheckedCreateWithoutReviewInput)
], CastCreateOrConnectWithoutReviewInput.prototype, "create", void 0);
exports.CastCreateOrConnectWithoutReviewInput = CastCreateOrConnectWithoutReviewInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CastCreateOrConnectWithoutReviewInput", {})
], CastCreateOrConnectWithoutReviewInput);
