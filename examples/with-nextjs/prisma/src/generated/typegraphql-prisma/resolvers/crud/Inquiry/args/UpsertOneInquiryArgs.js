"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneInquiryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InquiryUncheckedCreateInput_1 = require("../../../inputs/InquiryUncheckedCreateInput");
const InquiryUncheckedUpdateInput_1 = require("../../../inputs/InquiryUncheckedUpdateInput");
const InquiryWhereUniqueInput_1 = require("../../../inputs/InquiryWhereUniqueInput");
let UpsertOneInquiryArgs = exports.UpsertOneInquiryArgs = class UpsertOneInquiryArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InquiryWhereUniqueInput_1.InquiryWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InquiryWhereUniqueInput_1.InquiryWhereUniqueInput)
], UpsertOneInquiryArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InquiryUncheckedCreateInput_1.InquiryUncheckedCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InquiryUncheckedCreateInput_1.InquiryUncheckedCreateInput)
], UpsertOneInquiryArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InquiryUncheckedUpdateInput_1.InquiryUncheckedUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InquiryUncheckedUpdateInput_1.InquiryUncheckedUpdateInput)
], UpsertOneInquiryArgs.prototype, "update", void 0);
exports.UpsertOneInquiryArgs = UpsertOneInquiryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneInquiryArgs);
