"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneInquiryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InquiryUncheckedCreateInput_1 = require("../../../inputs/InquiryUncheckedCreateInput");
let CreateOneInquiryArgs = class CreateOneInquiryArgs {
};
exports.CreateOneInquiryArgs = CreateOneInquiryArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InquiryUncheckedCreateInput_1.InquiryUncheckedCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InquiryUncheckedCreateInput_1.InquiryUncheckedCreateInput)
], CreateOneInquiryArgs.prototype, "data", void 0);
exports.CreateOneInquiryArgs = CreateOneInquiryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneInquiryArgs);
