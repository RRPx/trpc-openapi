"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankInformationUncheckedCreateNestedManyWithoutCastInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BankInformationCreateManyCastInputEnvelope_1 = require("../inputs/BankInformationCreateManyCastInputEnvelope");
const BankInformationCreateOrConnectWithoutCastInput_1 = require("../inputs/BankInformationCreateOrConnectWithoutCastInput");
const BankInformationCreateWithoutCastInput_1 = require("../inputs/BankInformationCreateWithoutCastInput");
const BankInformationWhereUniqueInput_1 = require("../inputs/BankInformationWhereUniqueInput");
let BankInformationUncheckedCreateNestedManyWithoutCastInput = exports.BankInformationUncheckedCreateNestedManyWithoutCastInput = class BankInformationUncheckedCreateNestedManyWithoutCastInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BankInformationCreateWithoutCastInput_1.BankInformationCreateWithoutCastInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BankInformationUncheckedCreateNestedManyWithoutCastInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BankInformationCreateOrConnectWithoutCastInput_1.BankInformationCreateOrConnectWithoutCastInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BankInformationUncheckedCreateNestedManyWithoutCastInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BankInformationCreateManyCastInputEnvelope_1.BankInformationCreateManyCastInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BankInformationCreateManyCastInputEnvelope_1.BankInformationCreateManyCastInputEnvelope)
], BankInformationUncheckedCreateNestedManyWithoutCastInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BankInformationWhereUniqueInput_1.BankInformationWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BankInformationUncheckedCreateNestedManyWithoutCastInput.prototype, "connect", void 0);
exports.BankInformationUncheckedCreateNestedManyWithoutCastInput = BankInformationUncheckedCreateNestedManyWithoutCastInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BankInformationUncheckedCreateNestedManyWithoutCastInput", {})
], BankInformationUncheckedCreateNestedManyWithoutCastInput);
