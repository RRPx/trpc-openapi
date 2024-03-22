"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneInquiryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InquiryUncheckedUpdateInput_1 = require("../../../inputs/InquiryUncheckedUpdateInput");
const InquiryWhereUniqueInput_1 = require("../../../inputs/InquiryWhereUniqueInput");
let UpdateOneInquiryArgs = class UpdateOneInquiryArgs {
};
exports.UpdateOneInquiryArgs = UpdateOneInquiryArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InquiryUncheckedUpdateInput_1.InquiryUncheckedUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InquiryUncheckedUpdateInput_1.InquiryUncheckedUpdateInput)
], UpdateOneInquiryArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InquiryWhereUniqueInput_1.InquiryWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InquiryWhereUniqueInput_1.InquiryWhereUniqueInput)
], UpdateOneInquiryArgs.prototype, "where", void 0);
exports.UpdateOneInquiryArgs = UpdateOneInquiryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneInquiryArgs);
