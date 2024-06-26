"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneAccountArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountUncheckedUpdateInput_1 = require("../../../inputs/AccountUncheckedUpdateInput");
const AccountWhereUniqueInput_1 = require("../../../inputs/AccountWhereUniqueInput");
let UpdateOneAccountArgs = class UpdateOneAccountArgs {
};
exports.UpdateOneAccountArgs = UpdateOneAccountArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountUncheckedUpdateInput_1.AccountUncheckedUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AccountUncheckedUpdateInput_1.AccountUncheckedUpdateInput)
], UpdateOneAccountArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountWhereUniqueInput_1.AccountWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AccountWhereUniqueInput_1.AccountWhereUniqueInput)
], UpdateOneAccountArgs.prototype, "where", void 0);
exports.UpdateOneAccountArgs = UpdateOneAccountArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneAccountArgs);
