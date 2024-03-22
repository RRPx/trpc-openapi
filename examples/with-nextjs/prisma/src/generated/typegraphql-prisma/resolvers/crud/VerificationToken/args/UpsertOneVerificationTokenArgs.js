"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneVerificationTokenArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VerificationTokenUncheckedCreateInput_1 = require("../../../inputs/VerificationTokenUncheckedCreateInput");
const VerificationTokenUncheckedUpdateInput_1 = require("../../../inputs/VerificationTokenUncheckedUpdateInput");
const VerificationTokenWhereUniqueInput_1 = require("../../../inputs/VerificationTokenWhereUniqueInput");
let UpsertOneVerificationTokenArgs = exports.UpsertOneVerificationTokenArgs = class UpsertOneVerificationTokenArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VerificationTokenWhereUniqueInput_1.VerificationTokenWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VerificationTokenWhereUniqueInput_1.VerificationTokenWhereUniqueInput)
], UpsertOneVerificationTokenArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VerificationTokenUncheckedCreateInput_1.VerificationTokenUncheckedCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VerificationTokenUncheckedCreateInput_1.VerificationTokenUncheckedCreateInput)
], UpsertOneVerificationTokenArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VerificationTokenUncheckedUpdateInput_1.VerificationTokenUncheckedUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VerificationTokenUncheckedUpdateInput_1.VerificationTokenUncheckedUpdateInput)
], UpsertOneVerificationTokenArgs.prototype, "update", void 0);
exports.UpsertOneVerificationTokenArgs = UpsertOneVerificationTokenArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneVerificationTokenArgs);
