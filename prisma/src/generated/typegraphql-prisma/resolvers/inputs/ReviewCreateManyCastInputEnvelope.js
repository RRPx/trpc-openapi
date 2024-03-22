"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewCreateManyCastInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReviewCreateManyCastInput_1 = require("../inputs/ReviewCreateManyCastInput");
let ReviewCreateManyCastInputEnvelope = class ReviewCreateManyCastInputEnvelope {
};
exports.ReviewCreateManyCastInputEnvelope = ReviewCreateManyCastInputEnvelope;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReviewCreateManyCastInput_1.ReviewCreateManyCastInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], ReviewCreateManyCastInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ReviewCreateManyCastInputEnvelope.prototype, "skipDuplicates", void 0);
exports.ReviewCreateManyCastInputEnvelope = ReviewCreateManyCastInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("ReviewCreateManyCastInputEnvelope", {})
], ReviewCreateManyCastInputEnvelope);
