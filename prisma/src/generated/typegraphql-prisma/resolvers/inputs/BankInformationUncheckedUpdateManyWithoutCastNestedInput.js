"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankInformationUncheckedUpdateManyWithoutCastNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BankInformationCreateManyCastInputEnvelope_1 = require("../inputs/BankInformationCreateManyCastInputEnvelope");
const BankInformationCreateOrConnectWithoutCastInput_1 = require("../inputs/BankInformationCreateOrConnectWithoutCastInput");
const BankInformationCreateWithoutCastInput_1 = require("../inputs/BankInformationCreateWithoutCastInput");
const BankInformationScalarWhereInput_1 = require("../inputs/BankInformationScalarWhereInput");
const BankInformationUpdateManyWithWhereWithoutCastInput_1 = require("../inputs/BankInformationUpdateManyWithWhereWithoutCastInput");
const BankInformationUpdateWithWhereUniqueWithoutCastInput_1 = require("../inputs/BankInformationUpdateWithWhereUniqueWithoutCastInput");
const BankInformationUpsertWithWhereUniqueWithoutCastInput_1 = require("../inputs/BankInformationUpsertWithWhereUniqueWithoutCastInput");
const BankInformationWhereUniqueInput_1 = require("../inputs/BankInformationWhereUniqueInput");
let BankInformationUncheckedUpdateManyWithoutCastNestedInput = class BankInformationUncheckedUpdateManyWithoutCastNestedInput {
};
exports.BankInformationUncheckedUpdateManyWithoutCastNestedInput = BankInformationUncheckedUpdateManyWithoutCastNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BankInformationCreateWithoutCastInput_1.BankInformationCreateWithoutCastInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BankInformationUncheckedUpdateManyWithoutCastNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BankInformationCreateOrConnectWithoutCastInput_1.BankInformationCreateOrConnectWithoutCastInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BankInformationUncheckedUpdateManyWithoutCastNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BankInformationUpsertWithWhereUniqueWithoutCastInput_1.BankInformationUpsertWithWhereUniqueWithoutCastInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BankInformationUncheckedUpdateManyWithoutCastNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BankInformationCreateManyCastInputEnvelope_1.BankInformationCreateManyCastInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BankInformationCreateManyCastInputEnvelope_1.BankInformationCreateManyCastInputEnvelope)
], BankInformationUncheckedUpdateManyWithoutCastNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BankInformationWhereUniqueInput_1.BankInformationWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BankInformationUncheckedUpdateManyWithoutCastNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BankInformationWhereUniqueInput_1.BankInformationWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BankInformationUncheckedUpdateManyWithoutCastNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BankInformationWhereUniqueInput_1.BankInformationWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BankInformationUncheckedUpdateManyWithoutCastNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BankInformationWhereUniqueInput_1.BankInformationWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BankInformationUncheckedUpdateManyWithoutCastNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BankInformationUpdateWithWhereUniqueWithoutCastInput_1.BankInformationUpdateWithWhereUniqueWithoutCastInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BankInformationUncheckedUpdateManyWithoutCastNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BankInformationUpdateManyWithWhereWithoutCastInput_1.BankInformationUpdateManyWithWhereWithoutCastInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BankInformationUncheckedUpdateManyWithoutCastNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BankInformationScalarWhereInput_1.BankInformationScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BankInformationUncheckedUpdateManyWithoutCastNestedInput.prototype, "deleteMany", void 0);
exports.BankInformationUncheckedUpdateManyWithoutCastNestedInput = BankInformationUncheckedUpdateManyWithoutCastNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BankInformationUncheckedUpdateManyWithoutCastNestedInput", {})
], BankInformationUncheckedUpdateManyWithoutCastNestedInput);
