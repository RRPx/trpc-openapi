"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyInquiryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InquiryWhereInput_1 = require("../../../inputs/InquiryWhereInput");
let DeleteManyInquiryArgs = exports.DeleteManyInquiryArgs = class DeleteManyInquiryArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InquiryWhereInput_1.InquiryWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InquiryWhereInput_1.InquiryWhereInput)
], DeleteManyInquiryArgs.prototype, "where", void 0);
exports.DeleteManyInquiryArgs = DeleteManyInquiryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyInquiryArgs);
