"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneReviewArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReviewUncheckedCreateInput_1 = require("../../../inputs/ReviewUncheckedCreateInput");
let CreateOneReviewArgs = exports.CreateOneReviewArgs = class CreateOneReviewArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewUncheckedCreateInput_1.ReviewUncheckedCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReviewUncheckedCreateInput_1.ReviewUncheckedCreateInput)
], CreateOneReviewArgs.prototype, "data", void 0);
exports.CreateOneReviewArgs = CreateOneReviewArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneReviewArgs);
