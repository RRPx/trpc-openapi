"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewCreateNestedManyWithoutCastInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReviewCreateManyCastInputEnvelope_1 = require("../inputs/ReviewCreateManyCastInputEnvelope");
const ReviewCreateOrConnectWithoutCastInput_1 = require("../inputs/ReviewCreateOrConnectWithoutCastInput");
const ReviewCreateWithoutCastInput_1 = require("../inputs/ReviewCreateWithoutCastInput");
const ReviewWhereUniqueInput_1 = require("../inputs/ReviewWhereUniqueInput");
let ReviewCreateNestedManyWithoutCastInput = class ReviewCreateNestedManyWithoutCastInput {
};
exports.ReviewCreateNestedManyWithoutCastInput = ReviewCreateNestedManyWithoutCastInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReviewCreateWithoutCastInput_1.ReviewCreateWithoutCastInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReviewCreateNestedManyWithoutCastInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReviewCreateOrConnectWithoutCastInput_1.ReviewCreateOrConnectWithoutCastInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReviewCreateNestedManyWithoutCastInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewCreateManyCastInputEnvelope_1.ReviewCreateManyCastInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReviewCreateManyCastInputEnvelope_1.ReviewCreateManyCastInputEnvelope)
], ReviewCreateNestedManyWithoutCastInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReviewWhereUniqueInput_1.ReviewWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReviewCreateNestedManyWithoutCastInput.prototype, "connect", void 0);
exports.ReviewCreateNestedManyWithoutCastInput = ReviewCreateNestedManyWithoutCastInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReviewCreateNestedManyWithoutCastInput", {})
], ReviewCreateNestedManyWithoutCastInput);
