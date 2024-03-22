"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastUpdateOneRequiredWithoutReviewNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastCreateOrConnectWithoutReviewInput_1 = require("../inputs/CastCreateOrConnectWithoutReviewInput");
const CastUncheckedCreateWithoutReviewInput_1 = require("../inputs/CastUncheckedCreateWithoutReviewInput");
const CastUncheckedUpdateWithoutReviewInput_1 = require("../inputs/CastUncheckedUpdateWithoutReviewInput");
const CastUpsertWithoutReviewInput_1 = require("../inputs/CastUpsertWithoutReviewInput");
const CastWhereUniqueInput_1 = require("../inputs/CastWhereUniqueInput");
let CastUpdateOneRequiredWithoutReviewNestedInput = exports.CastUpdateOneRequiredWithoutReviewNestedInput = class CastUpdateOneRequiredWithoutReviewNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUncheckedCreateWithoutReviewInput_1.CastUncheckedCreateWithoutReviewInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastUncheckedCreateWithoutReviewInput_1.CastUncheckedCreateWithoutReviewInput)
], CastUpdateOneRequiredWithoutReviewNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastCreateOrConnectWithoutReviewInput_1.CastCreateOrConnectWithoutReviewInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastCreateOrConnectWithoutReviewInput_1.CastCreateOrConnectWithoutReviewInput)
], CastUpdateOneRequiredWithoutReviewNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUpsertWithoutReviewInput_1.CastUpsertWithoutReviewInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastUpsertWithoutReviewInput_1.CastUpsertWithoutReviewInput)
], CastUpdateOneRequiredWithoutReviewNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastWhereUniqueInput_1.CastWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastWhereUniqueInput_1.CastWhereUniqueInput)
], CastUpdateOneRequiredWithoutReviewNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUncheckedUpdateWithoutReviewInput_1.CastUncheckedUpdateWithoutReviewInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastUncheckedUpdateWithoutReviewInput_1.CastUncheckedUpdateWithoutReviewInput)
], CastUpdateOneRequiredWithoutReviewNestedInput.prototype, "update", void 0);
exports.CastUpdateOneRequiredWithoutReviewNestedInput = CastUpdateOneRequiredWithoutReviewNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CastUpdateOneRequiredWithoutReviewNestedInput", {})
], CastUpdateOneRequiredWithoutReviewNestedInput);
