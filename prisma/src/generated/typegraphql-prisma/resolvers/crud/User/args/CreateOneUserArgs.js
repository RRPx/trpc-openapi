"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneUserArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserUncheckedCreateInput_1 = require("../../../inputs/UserUncheckedCreateInput");
let CreateOneUserArgs = class CreateOneUserArgs {
};
exports.CreateOneUserArgs = CreateOneUserArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUncheckedCreateInput_1.UserUncheckedCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUncheckedCreateInput_1.UserUncheckedCreateInput)
], CreateOneUserArgs.prototype, "data", void 0);
exports.CreateOneUserArgs = CreateOneUserArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneUserArgs);
