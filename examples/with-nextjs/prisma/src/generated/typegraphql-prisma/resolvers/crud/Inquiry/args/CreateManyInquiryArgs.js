"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyInquiryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InquiryCreateManyInput_1 = require("../../../inputs/InquiryCreateManyInput");
let CreateManyInquiryArgs = exports.CreateManyInquiryArgs = class CreateManyInquiryArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InquiryCreateManyInput_1.InquiryCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyInquiryArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyInquiryArgs.prototype, "skipDuplicates", void 0);
exports.CreateManyInquiryArgs = CreateManyInquiryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyInquiryArgs);
