"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewCreateOrConnectWithoutCastInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReviewUncheckedCreateWithoutCastInput_1 = require("../inputs/ReviewUncheckedCreateWithoutCastInput");
const ReviewWhereUniqueInput_1 = require("../inputs/ReviewWhereUniqueInput");
let ReviewCreateOrConnectWithoutCastInput = exports.ReviewCreateOrConnectWithoutCastInput = class ReviewCreateOrConnectWithoutCastInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewWhereUniqueInput_1.ReviewWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReviewWhereUniqueInput_1.ReviewWhereUniqueInput)
], ReviewCreateOrConnectWithoutCastInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewUncheckedCreateWithoutCastInput_1.ReviewUncheckedCreateWithoutCastInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReviewUncheckedCreateWithoutCastInput_1.ReviewUncheckedCreateWithoutCastInput)
], ReviewCreateOrConnectWithoutCastInput.prototype, "create", void 0);
exports.ReviewCreateOrConnectWithoutCastInput = ReviewCreateOrConnectWithoutCastInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReviewCreateOrConnectWithoutCastInput", {})
], ReviewCreateOrConnectWithoutCastInput);
