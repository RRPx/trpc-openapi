"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneUserArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserUncheckedCreateInput_1 = require("../../../inputs/UserUncheckedCreateInput");
const UserUncheckedUpdateInput_1 = require("../../../inputs/UserUncheckedUpdateInput");
const UserWhereUniqueInput_1 = require("../../../inputs/UserWhereUniqueInput");
let UpsertOneUserArgs = class UpsertOneUserArgs {
};
exports.UpsertOneUserArgs = UpsertOneUserArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UpsertOneUserArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUncheckedCreateInput_1.UserUncheckedCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUncheckedCreateInput_1.UserUncheckedCreateInput)
], UpsertOneUserArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUncheckedUpdateInput_1.UserUncheckedUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUncheckedUpdateInput_1.UserUncheckedUpdateInput)
], UpsertOneUserArgs.prototype, "update", void 0);
exports.UpsertOneUserArgs = UpsertOneUserArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneUserArgs);
