"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewUncheckedUpdateManyWithoutClientNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReviewCreateManyClientInputEnvelope_1 = require("../inputs/ReviewCreateManyClientInputEnvelope");
const ReviewCreateOrConnectWithoutClientInput_1 = require("../inputs/ReviewCreateOrConnectWithoutClientInput");
const ReviewCreateWithoutClientInput_1 = require("../inputs/ReviewCreateWithoutClientInput");
const ReviewScalarWhereInput_1 = require("../inputs/ReviewScalarWhereInput");
const ReviewUpdateManyWithWhereWithoutClientInput_1 = require("../inputs/ReviewUpdateManyWithWhereWithoutClientInput");
const ReviewUpdateWithWhereUniqueWithoutClientInput_1 = require("../inputs/ReviewUpdateWithWhereUniqueWithoutClientInput");
const ReviewUpsertWithWhereUniqueWithoutClientInput_1 = require("../inputs/ReviewUpsertWithWhereUniqueWithoutClientInput");
const ReviewWhereUniqueInput_1 = require("../inputs/ReviewWhereUniqueInput");
let ReviewUncheckedUpdateManyWithoutClientNestedInput = class ReviewUncheckedUpdateManyWithoutClientNestedInput {
};
exports.ReviewUncheckedUpdateManyWithoutClientNestedInput = ReviewUncheckedUpdateManyWithoutClientNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReviewCreateWithoutClientInput_1.ReviewCreateWithoutClientInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReviewUncheckedUpdateManyWithoutClientNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReviewCreateOrConnectWithoutClientInput_1.ReviewCreateOrConnectWithoutClientInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReviewUncheckedUpdateManyWithoutClientNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReviewUpsertWithWhereUniqueWithoutClientInput_1.ReviewUpsertWithWhereUniqueWithoutClientInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReviewUncheckedUpdateManyWithoutClientNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewCreateManyClientInputEnvelope_1.ReviewCreateManyClientInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReviewCreateManyClientInputEnvelope_1.ReviewCreateManyClientInputEnvelope)
], ReviewUncheckedUpdateManyWithoutClientNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReviewWhereUniqueInput_1.ReviewWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReviewUncheckedUpdateManyWithoutClientNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReviewWhereUniqueInput_1.ReviewWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReviewUncheckedUpdateManyWithoutClientNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReviewWhereUniqueInput_1.ReviewWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReviewUncheckedUpdateManyWithoutClientNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReviewWhereUniqueInput_1.ReviewWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReviewUncheckedUpdateManyWithoutClientNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReviewUpdateWithWhereUniqueWithoutClientInput_1.ReviewUpdateWithWhereUniqueWithoutClientInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReviewUncheckedUpdateManyWithoutClientNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReviewUpdateManyWithWhereWithoutClientInput_1.ReviewUpdateManyWithWhereWithoutClientInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReviewUncheckedUpdateManyWithoutClientNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReviewScalarWhereInput_1.ReviewScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReviewUncheckedUpdateManyWithoutClientNestedInput.prototype, "deleteMany", void 0);
exports.ReviewUncheckedUpdateManyWithoutClientNestedInput = ReviewUncheckedUpdateManyWithoutClientNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReviewUncheckedUpdateManyWithoutClientNestedInput", {})
], ReviewUncheckedUpdateManyWithoutClientNestedInput);
