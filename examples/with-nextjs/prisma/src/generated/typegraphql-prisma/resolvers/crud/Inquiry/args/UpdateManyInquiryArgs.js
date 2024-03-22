"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyInquiryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InquiryUncheckedUpdateManyInput_1 = require("../../../inputs/InquiryUncheckedUpdateManyInput");
const InquiryWhereInput_1 = require("../../../inputs/InquiryWhereInput");
let UpdateManyInquiryArgs = exports.UpdateManyInquiryArgs = class UpdateManyInquiryArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InquiryUncheckedUpdateManyInput_1.InquiryUncheckedUpdateManyInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InquiryUncheckedUpdateManyInput_1.InquiryUncheckedUpdateManyInput)
], UpdateManyInquiryArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InquiryWhereInput_1.InquiryWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InquiryWhereInput_1.InquiryWhereInput)
], UpdateManyInquiryArgs.prototype, "where", void 0);
exports.UpdateManyInquiryArgs = UpdateManyInquiryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyInquiryArgs);
