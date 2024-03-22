"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewUpdateManyWithoutCastNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReviewCreateManyCastInputEnvelope_1 = require("../inputs/ReviewCreateManyCastInputEnvelope");
const ReviewCreateOrConnectWithoutCastInput_1 = require("../inputs/ReviewCreateOrConnectWithoutCastInput");
const ReviewCreateWithoutCastInput_1 = require("../inputs/ReviewCreateWithoutCastInput");
const ReviewScalarWhereInput_1 = require("../inputs/ReviewScalarWhereInput");
const ReviewUpdateManyWithWhereWithoutCastInput_1 = require("../inputs/ReviewUpdateManyWithWhereWithoutCastInput");
const ReviewUpdateWithWhereUniqueWithoutCastInput_1 = require("../inputs/ReviewUpdateWithWhereUniqueWithoutCastInput");
const ReviewUpsertWithWhereUniqueWithoutCastInput_1 = require("../inputs/ReviewUpsertWithWhereUniqueWithoutCastInput");
const ReviewWhereUniqueInput_1 = require("../inputs/ReviewWhereUniqueInput");
let ReviewUpdateManyWithoutCastNestedInput = class ReviewUpdateManyWithoutCastNestedInput {
};
exports.ReviewUpdateManyWithoutCastNestedInput = ReviewUpdateManyWithoutCastNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReviewCreateWithoutCastInput_1.ReviewCreateWithoutCastInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReviewUpdateManyWithoutCastNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReviewCreateOrConnectWithoutCastInput_1.ReviewCreateOrConnectWithoutCastInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReviewUpdateManyWithoutCastNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReviewUpsertWithWhereUniqueWithoutCastInput_1.ReviewUpsertWithWhereUniqueWithoutCastInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReviewUpdateManyWithoutCastNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewCreateManyCastInputEnvelope_1.ReviewCreateManyCastInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReviewCreateManyCastInputEnvelope_1.ReviewCreateManyCastInputEnvelope)
], ReviewUpdateManyWithoutCastNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReviewWhereUniqueInput_1.ReviewWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReviewUpdateManyWithoutCastNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReviewWhereUniqueInput_1.ReviewWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReviewUpdateManyWithoutCastNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReviewWhereUniqueInput_1.ReviewWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReviewUpdateManyWithoutCastNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReviewWhereUniqueInput_1.ReviewWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReviewUpdateManyWithoutCastNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReviewUpdateWithWhereUniqueWithoutCastInput_1.ReviewUpdateWithWhereUniqueWithoutCastInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReviewUpdateManyWithoutCastNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReviewUpdateManyWithWhereWithoutCastInput_1.ReviewUpdateManyWithWhereWithoutCastInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReviewUpdateManyWithoutCastNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReviewScalarWhereInput_1.ReviewScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReviewUpdateManyWithoutCastNestedInput.prototype, "deleteMany", void 0);
exports.ReviewUpdateManyWithoutCastNestedInput = ReviewUpdateManyWithoutCastNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReviewUpdateManyWithoutCastNestedInput", {})
], ReviewUpdateManyWithoutCastNestedInput);
