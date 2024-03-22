"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewCreateOrConnectWithoutClientInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReviewUncheckedCreateWithoutClientInput_1 = require("../inputs/ReviewUncheckedCreateWithoutClientInput");
const ReviewWhereUniqueInput_1 = require("../inputs/ReviewWhereUniqueInput");
let ReviewCreateOrConnectWithoutClientInput = exports.ReviewCreateOrConnectWithoutClientInput = class ReviewCreateOrConnectWithoutClientInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewWhereUniqueInput_1.ReviewWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReviewWhereUniqueInput_1.ReviewWhereUniqueInput)
], ReviewCreateOrConnectWithoutClientInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewUncheckedCreateWithoutClientInput_1.ReviewUncheckedCreateWithoutClientInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReviewUncheckedCreateWithoutClientInput_1.ReviewUncheckedCreateWithoutClientInput)
], ReviewCreateOrConnectWithoutClientInput.prototype, "create", void 0);
exports.ReviewCreateOrConnectWithoutClientInput = ReviewCreateOrConnectWithoutClientInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReviewCreateOrConnectWithoutClientInput", {})
], ReviewCreateOrConnectWithoutClientInput);
