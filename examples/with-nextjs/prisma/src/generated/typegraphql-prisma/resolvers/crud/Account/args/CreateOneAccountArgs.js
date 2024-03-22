"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneAccountArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountUncheckedCreateInput_1 = require("../../../inputs/AccountUncheckedCreateInput");
let CreateOneAccountArgs = exports.CreateOneAccountArgs = class CreateOneAccountArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountUncheckedCreateInput_1.AccountUncheckedCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AccountUncheckedCreateInput_1.AccountUncheckedCreateInput)
], CreateOneAccountArgs.prototype, "data", void 0);
exports.CreateOneAccountArgs = CreateOneAccountArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneAccountArgs);
