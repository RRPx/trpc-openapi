"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankInformationUpdateManyWithWhereWithoutCastInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BankInformationScalarWhereInput_1 = require("../inputs/BankInformationScalarWhereInput");
const BankInformationUncheckedUpdateManyWithoutCastInput_1 = require("../inputs/BankInformationUncheckedUpdateManyWithoutCastInput");
let BankInformationUpdateManyWithWhereWithoutCastInput = class BankInformationUpdateManyWithWhereWithoutCastInput {
};
exports.BankInformationUpdateManyWithWhereWithoutCastInput = BankInformationUpdateManyWithWhereWithoutCastInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BankInformationScalarWhereInput_1.BankInformationScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BankInformationScalarWhereInput_1.BankInformationScalarWhereInput)
], BankInformationUpdateManyWithWhereWithoutCastInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BankInformationUncheckedUpdateManyWithoutCastInput_1.BankInformationUncheckedUpdateManyWithoutCastInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BankInformationUncheckedUpdateManyWithoutCastInput_1.BankInformationUncheckedUpdateManyWithoutCastInput)
], BankInformationUpdateManyWithWhereWithoutCastInput.prototype, "data", void 0);
exports.BankInformationUpdateManyWithWhereWithoutCastInput = BankInformationUpdateManyWithWhereWithoutCastInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BankInformationUpdateManyWithWhereWithoutCastInput", {})
], BankInformationUpdateManyWithWhereWithoutCastInput);
