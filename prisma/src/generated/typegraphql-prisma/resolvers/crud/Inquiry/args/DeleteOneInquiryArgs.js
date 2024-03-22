"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneInquiryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InquiryWhereUniqueInput_1 = require("../../../inputs/InquiryWhereUniqueInput");
let DeleteOneInquiryArgs = class DeleteOneInquiryArgs {
};
exports.DeleteOneInquiryArgs = DeleteOneInquiryArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InquiryWhereUniqueInput_1.InquiryWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InquiryWhereUniqueInput_1.InquiryWhereUniqueInput)
], DeleteOneInquiryArgs.prototype, "where", void 0);
exports.DeleteOneInquiryArgs = DeleteOneInquiryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneInquiryArgs);
