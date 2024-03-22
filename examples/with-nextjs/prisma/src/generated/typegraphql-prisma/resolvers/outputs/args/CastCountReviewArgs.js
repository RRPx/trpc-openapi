"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastCountReviewArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReviewWhereInput_1 = require("../../inputs/ReviewWhereInput");
let CastCountReviewArgs = exports.CastCountReviewArgs = class CastCountReviewArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewWhereInput_1.ReviewWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReviewWhereInput_1.ReviewWhereInput)
], CastCountReviewArgs.prototype, "where", void 0);
exports.CastCountReviewArgs = CastCountReviewArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CastCountReviewArgs);
