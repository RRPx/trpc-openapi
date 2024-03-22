"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastUpsertWithoutReviewInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastUncheckedCreateWithoutReviewInput_1 = require("../inputs/CastUncheckedCreateWithoutReviewInput");
const CastUncheckedUpdateWithoutReviewInput_1 = require("../inputs/CastUncheckedUpdateWithoutReviewInput");
const CastWhereInput_1 = require("../inputs/CastWhereInput");
let CastUpsertWithoutReviewInput = exports.CastUpsertWithoutReviewInput = class CastUpsertWithoutReviewInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUncheckedUpdateWithoutReviewInput_1.CastUncheckedUpdateWithoutReviewInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CastUncheckedUpdateWithoutReviewInput_1.CastUncheckedUpdateWithoutReviewInput)
], CastUpsertWithoutReviewInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUncheckedCreateWithoutReviewInput_1.CastUncheckedCreateWithoutReviewInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CastUncheckedCreateWithoutReviewInput_1.CastUncheckedCreateWithoutReviewInput)
], CastUpsertWithoutReviewInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastWhereInput_1.CastWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastWhereInput_1.CastWhereInput)
], CastUpsertWithoutReviewInput.prototype, "where", void 0);
exports.CastUpsertWithoutReviewInput = CastUpsertWithoutReviewInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CastUpsertWithoutReviewInput", {})
], CastUpsertWithoutReviewInput);
