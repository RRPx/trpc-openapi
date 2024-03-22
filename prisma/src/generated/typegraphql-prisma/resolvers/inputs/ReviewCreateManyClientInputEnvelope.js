"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewCreateManyClientInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReviewCreateManyClientInput_1 = require("../inputs/ReviewCreateManyClientInput");
let ReviewCreateManyClientInputEnvelope = class ReviewCreateManyClientInputEnvelope {
};
exports.ReviewCreateManyClientInputEnvelope = ReviewCreateManyClientInputEnvelope;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReviewCreateManyClientInput_1.ReviewCreateManyClientInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], ReviewCreateManyClientInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ReviewCreateManyClientInputEnvelope.prototype, "skipDuplicates", void 0);
exports.ReviewCreateManyClientInputEnvelope = ReviewCreateManyClientInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("ReviewCreateManyClientInputEnvelope", {})
], ReviewCreateManyClientInputEnvelope);
