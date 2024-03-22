"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerificationTokenUncheckedCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let VerificationTokenUncheckedCreateInput = exports.VerificationTokenUncheckedCreateInput = class VerificationTokenUncheckedCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], VerificationTokenUncheckedCreateInput.prototype, "identifier", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], VerificationTokenUncheckedCreateInput.prototype, "token", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], VerificationTokenUncheckedCreateInput.prototype, "expires", void 0);
exports.VerificationTokenUncheckedCreateInput = VerificationTokenUncheckedCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VerificationTokenUncheckedCreateInput", {})
], VerificationTokenUncheckedCreateInput);
