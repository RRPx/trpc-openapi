"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneVerificationTokenArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VerificationTokenUncheckedUpdateInput_1 = require("../../../inputs/VerificationTokenUncheckedUpdateInput");
const VerificationTokenWhereUniqueInput_1 = require("../../../inputs/VerificationTokenWhereUniqueInput");
let UpdateOneVerificationTokenArgs = exports.UpdateOneVerificationTokenArgs = class UpdateOneVerificationTokenArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VerificationTokenUncheckedUpdateInput_1.VerificationTokenUncheckedUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VerificationTokenUncheckedUpdateInput_1.VerificationTokenUncheckedUpdateInput)
], UpdateOneVerificationTokenArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VerificationTokenWhereUniqueInput_1.VerificationTokenWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VerificationTokenWhereUniqueInput_1.VerificationTokenWhereUniqueInput)
], UpdateOneVerificationTokenArgs.prototype, "where", void 0);
exports.UpdateOneVerificationTokenArgs = UpdateOneVerificationTokenArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneVerificationTokenArgs);
