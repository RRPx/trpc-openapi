"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewUncheckedUpdateManyWithoutCastNestedInput = void 0;
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
let ReviewUncheckedUpdateManyWithoutCastNestedInput = exports.ReviewUncheckedUpdateManyWithoutCastNestedInput = class ReviewUncheckedUpdateManyWithoutCastNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReviewCreateWithoutCastInput_1.ReviewCreateWithoutCastInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReviewUncheckedUpdateManyWithoutCastNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReviewCreateOrConnectWithoutCastInput_1.ReviewCreateOrConnectWithoutCastInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReviewUncheckedUpdateManyWithoutCastNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReviewUpsertWithWhereUniqueWithoutCastInput_1.ReviewUpsertWithWhereUniqueWithoutCastInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReviewUncheckedUpdateManyWithoutCastNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewCreateManyCastInputEnvelope_1.ReviewCreateManyCastInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReviewCreateManyCastInputEnvelope_1.ReviewCreateManyCastInputEnvelope)
], ReviewUncheckedUpdateManyWithoutCastNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReviewWhereUniqueInput_1.ReviewWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReviewUncheckedUpdateManyWithoutCastNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReviewWhereUniqueInput_1.ReviewWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReviewUncheckedUpdateManyWithoutCastNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReviewWhereUniqueInput_1.ReviewWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReviewUncheckedUpdateManyWithoutCastNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReviewWhereUniqueInput_1.ReviewWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReviewUncheckedUpdateManyWithoutCastNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReviewUpdateWithWhereUniqueWithoutCastInput_1.ReviewUpdateWithWhereUniqueWithoutCastInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReviewUncheckedUpdateManyWithoutCastNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReviewUpdateManyWithWhereWithoutCastInput_1.ReviewUpdateManyWithWhereWithoutCastInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReviewUncheckedUpdateManyWithoutCastNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReviewScalarWhereInput_1.ReviewScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReviewUncheckedUpdateManyWithoutCastNestedInput.prototype, "deleteMany", void 0);
exports.ReviewUncheckedUpdateManyWithoutCastNestedInput = ReviewUncheckedUpdateManyWithoutCastNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReviewUncheckedUpdateManyWithoutCastNestedInput", {})
], ReviewUncheckedUpdateManyWithoutCastNestedInput);
