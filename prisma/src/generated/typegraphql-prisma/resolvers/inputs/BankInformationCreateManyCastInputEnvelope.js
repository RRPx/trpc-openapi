"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankInformationCreateManyCastInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BankInformationCreateManyCastInput_1 = require("../inputs/BankInformationCreateManyCastInput");
let BankInformationCreateManyCastInputEnvelope = class BankInformationCreateManyCastInputEnvelope {
};
exports.BankInformationCreateManyCastInputEnvelope = BankInformationCreateManyCastInputEnvelope;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BankInformationCreateManyCastInput_1.BankInformationCreateManyCastInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], BankInformationCreateManyCastInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], BankInformationCreateManyCastInputEnvelope.prototype, "skipDuplicates", void 0);
exports.BankInformationCreateManyCastInputEnvelope = BankInformationCreateManyCastInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("BankInformationCreateManyCastInputEnvelope", {})
], BankInformationCreateManyCastInputEnvelope);
