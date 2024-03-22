"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneUserArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserUncheckedUpdateInput_1 = require("../../../inputs/UserUncheckedUpdateInput");
const UserWhereUniqueInput_1 = require("../../../inputs/UserWhereUniqueInput");
let UpdateOneUserArgs = class UpdateOneUserArgs {
};
exports.UpdateOneUserArgs = UpdateOneUserArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUncheckedUpdateInput_1.UserUncheckedUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUncheckedUpdateInput_1.UserUncheckedUpdateInput)
], UpdateOneUserArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UpdateOneUserArgs.prototype, "where", void 0);
exports.UpdateOneUserArgs = UpdateOneUserArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneUserArgs);
