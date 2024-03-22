"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountUncheckedUpdateManyWithoutUserNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountCreateManyUserInputEnvelope_1 = require("../inputs/AccountCreateManyUserInputEnvelope");
const AccountCreateOrConnectWithoutUserInput_1 = require("../inputs/AccountCreateOrConnectWithoutUserInput");
const AccountCreateWithoutUserInput_1 = require("../inputs/AccountCreateWithoutUserInput");
const AccountScalarWhereInput_1 = require("../inputs/AccountScalarWhereInput");
const AccountUpdateManyWithWhereWithoutUserInput_1 = require("../inputs/AccountUpdateManyWithWhereWithoutUserInput");
const AccountUpdateWithWhereUniqueWithoutUserInput_1 = require("../inputs/AccountUpdateWithWhereUniqueWithoutUserInput");
const AccountUpsertWithWhereUniqueWithoutUserInput_1 = require("../inputs/AccountUpsertWithWhereUniqueWithoutUserInput");
const AccountWhereUniqueInput_1 = require("../inputs/AccountWhereUniqueInput");
let AccountUncheckedUpdateManyWithoutUserNestedInput = exports.AccountUncheckedUpdateManyWithoutUserNestedInput = class AccountUncheckedUpdateManyWithoutUserNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AccountCreateWithoutUserInput_1.AccountCreateWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AccountUncheckedUpdateManyWithoutUserNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AccountCreateOrConnectWithoutUserInput_1.AccountCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AccountUncheckedUpdateManyWithoutUserNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AccountUpsertWithWhereUniqueWithoutUserInput_1.AccountUpsertWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AccountUncheckedUpdateManyWithoutUserNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountCreateManyUserInputEnvelope_1.AccountCreateManyUserInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AccountCreateManyUserInputEnvelope_1.AccountCreateManyUserInputEnvelope)
], AccountUncheckedUpdateManyWithoutUserNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AccountWhereUniqueInput_1.AccountWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AccountUncheckedUpdateManyWithoutUserNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AccountWhereUniqueInput_1.AccountWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AccountUncheckedUpdateManyWithoutUserNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AccountWhereUniqueInput_1.AccountWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AccountUncheckedUpdateManyWithoutUserNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AccountWhereUniqueInput_1.AccountWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AccountUncheckedUpdateManyWithoutUserNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AccountUpdateWithWhereUniqueWithoutUserInput_1.AccountUpdateWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AccountUncheckedUpdateManyWithoutUserNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AccountUpdateManyWithWhereWithoutUserInput_1.AccountUpdateManyWithWhereWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AccountUncheckedUpdateManyWithoutUserNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AccountScalarWhereInput_1.AccountScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AccountUncheckedUpdateManyWithoutUserNestedInput.prototype, "deleteMany", void 0);
exports.AccountUncheckedUpdateManyWithoutUserNestedInput = AccountUncheckedUpdateManyWithoutUserNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AccountUncheckedUpdateManyWithoutUserNestedInput", {})
], AccountUncheckedUpdateManyWithoutUserNestedInput);
