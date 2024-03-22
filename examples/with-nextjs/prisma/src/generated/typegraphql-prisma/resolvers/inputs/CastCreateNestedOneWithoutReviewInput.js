"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastCreateNestedOneWithoutReviewInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastCreateOrConnectWithoutReviewInput_1 = require("../inputs/CastCreateOrConnectWithoutReviewInput");
const CastUncheckedCreateWithoutReviewInput_1 = require("../inputs/CastUncheckedCreateWithoutReviewInput");
const CastWhereUniqueInput_1 = require("../inputs/CastWhereUniqueInput");
let CastCreateNestedOneWithoutReviewInput = exports.CastCreateNestedOneWithoutReviewInput = class CastCreateNestedOneWithoutReviewInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUncheckedCreateWithoutReviewInput_1.CastUncheckedCreateWithoutReviewInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastUncheckedCreateWithoutReviewInput_1.CastUncheckedCreateWithoutReviewInput)
], CastCreateNestedOneWithoutReviewInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastCreateOrConnectWithoutReviewInput_1.CastCreateOrConnectWithoutReviewInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastCreateOrConnectWithoutReviewInput_1.CastCreateOrConnectWithoutReviewInput)
], CastCreateNestedOneWithoutReviewInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastWhereUniqueInput_1.CastWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastWhereUniqueInput_1.CastWhereUniqueInput)
], CastCreateNestedOneWithoutReviewInput.prototype, "connect", void 0);
exports.CastCreateNestedOneWithoutReviewInput = CastCreateNestedOneWithoutReviewInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CastCreateNestedOneWithoutReviewInput", {})
], CastCreateNestedOneWithoutReviewInput);
