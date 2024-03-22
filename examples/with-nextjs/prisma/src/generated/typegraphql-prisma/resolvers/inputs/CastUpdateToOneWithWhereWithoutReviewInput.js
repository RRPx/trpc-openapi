"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastUpdateToOneWithWhereWithoutReviewInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastUncheckedUpdateWithoutReviewInput_1 = require("../inputs/CastUncheckedUpdateWithoutReviewInput");
const CastWhereInput_1 = require("../inputs/CastWhereInput");
let CastUpdateToOneWithWhereWithoutReviewInput = exports.CastUpdateToOneWithWhereWithoutReviewInput = class CastUpdateToOneWithWhereWithoutReviewInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastWhereInput_1.CastWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastWhereInput_1.CastWhereInput)
], CastUpdateToOneWithWhereWithoutReviewInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUncheckedUpdateWithoutReviewInput_1.CastUncheckedUpdateWithoutReviewInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CastUncheckedUpdateWithoutReviewInput_1.CastUncheckedUpdateWithoutReviewInput)
], CastUpdateToOneWithWhereWithoutReviewInput.prototype, "data", void 0);
exports.CastUpdateToOneWithWhereWithoutReviewInput = CastUpdateToOneWithWhereWithoutReviewInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CastUpdateToOneWithWhereWithoutReviewInput", {})
], CastUpdateToOneWithWhereWithoutReviewInput);
