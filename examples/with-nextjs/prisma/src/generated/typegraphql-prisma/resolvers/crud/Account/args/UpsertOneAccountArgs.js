"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneAccountArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountUncheckedCreateInput_1 = require("../../../inputs/AccountUncheckedCreateInput");
const AccountUncheckedUpdateInput_1 = require("../../../inputs/AccountUncheckedUpdateInput");
const AccountWhereUniqueInput_1 = require("../../../inputs/AccountWhereUniqueInput");
let UpsertOneAccountArgs = exports.UpsertOneAccountArgs = class UpsertOneAccountArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountWhereUniqueInput_1.AccountWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AccountWhereUniqueInput_1.AccountWhereUniqueInput)
], UpsertOneAccountArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountUncheckedCreateInput_1.AccountUncheckedCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AccountUncheckedCreateInput_1.AccountUncheckedCreateInput)
], UpsertOneAccountArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountUncheckedUpdateInput_1.AccountUncheckedUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AccountUncheckedUpdateInput_1.AccountUncheckedUpdateInput)
], UpsertOneAccountArgs.prototype, "update", void 0);
exports.UpsertOneAccountArgs = UpsertOneAccountArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneAccountArgs);
