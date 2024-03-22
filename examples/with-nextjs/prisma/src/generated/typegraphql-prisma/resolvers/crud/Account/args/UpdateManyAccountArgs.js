"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyAccountArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountUncheckedUpdateManyInput_1 = require("../../../inputs/AccountUncheckedUpdateManyInput");
const AccountWhereInput_1 = require("../../../inputs/AccountWhereInput");
let UpdateManyAccountArgs = exports.UpdateManyAccountArgs = class UpdateManyAccountArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountUncheckedUpdateManyInput_1.AccountUncheckedUpdateManyInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AccountUncheckedUpdateManyInput_1.AccountUncheckedUpdateManyInput)
], UpdateManyAccountArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountWhereInput_1.AccountWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AccountWhereInput_1.AccountWhereInput)
], UpdateManyAccountArgs.prototype, "where", void 0);
exports.UpdateManyAccountArgs = UpdateManyAccountArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyAccountArgs);
