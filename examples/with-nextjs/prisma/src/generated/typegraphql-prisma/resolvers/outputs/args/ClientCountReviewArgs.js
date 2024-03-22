"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientCountReviewArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReviewWhereInput_1 = require("../../inputs/ReviewWhereInput");
let ClientCountReviewArgs = exports.ClientCountReviewArgs = class ClientCountReviewArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewWhereInput_1.ReviewWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReviewWhereInput_1.ReviewWhereInput)
], ClientCountReviewArgs.prototype, "where", void 0);
exports.ClientCountReviewArgs = ClientCountReviewArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], ClientCountReviewArgs);
