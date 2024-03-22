"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewCreateNestedManyWithoutClientInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReviewCreateManyClientInputEnvelope_1 = require("../inputs/ReviewCreateManyClientInputEnvelope");
const ReviewCreateOrConnectWithoutClientInput_1 = require("../inputs/ReviewCreateOrConnectWithoutClientInput");
const ReviewCreateWithoutClientInput_1 = require("../inputs/ReviewCreateWithoutClientInput");
const ReviewWhereUniqueInput_1 = require("../inputs/ReviewWhereUniqueInput");
let ReviewCreateNestedManyWithoutClientInput = exports.ReviewCreateNestedManyWithoutClientInput = class ReviewCreateNestedManyWithoutClientInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReviewCreateWithoutClientInput_1.ReviewCreateWithoutClientInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReviewCreateNestedManyWithoutClientInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReviewCreateOrConnectWithoutClientInput_1.ReviewCreateOrConnectWithoutClientInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReviewCreateNestedManyWithoutClientInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewCreateManyClientInputEnvelope_1.ReviewCreateManyClientInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReviewCreateManyClientInputEnvelope_1.ReviewCreateManyClientInputEnvelope)
], ReviewCreateNestedManyWithoutClientInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReviewWhereUniqueInput_1.ReviewWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReviewCreateNestedManyWithoutClientInput.prototype, "connect", void 0);
exports.ReviewCreateNestedManyWithoutClientInput = ReviewCreateNestedManyWithoutClientInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReviewCreateNestedManyWithoutClientInput", {})
], ReviewCreateNestedManyWithoutClientInput);
