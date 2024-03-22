"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneVerificationTokenArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VerificationTokenUncheckedCreateInput_1 = require("../../../inputs/VerificationTokenUncheckedCreateInput");
let CreateOneVerificationTokenArgs = exports.CreateOneVerificationTokenArgs = class CreateOneVerificationTokenArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VerificationTokenUncheckedCreateInput_1.VerificationTokenUncheckedCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VerificationTokenUncheckedCreateInput_1.VerificationTokenUncheckedCreateInput)
], CreateOneVerificationTokenArgs.prototype, "data", void 0);
exports.CreateOneVerificationTokenArgs = CreateOneVerificationTokenArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneVerificationTokenArgs);
