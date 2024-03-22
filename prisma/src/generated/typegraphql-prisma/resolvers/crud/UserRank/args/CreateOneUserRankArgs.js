"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneUserRankArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserRankUncheckedCreateInput_1 = require("../../../inputs/UserRankUncheckedCreateInput");
let CreateOneUserRankArgs = class CreateOneUserRankArgs {
};
exports.CreateOneUserRankArgs = CreateOneUserRankArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRankUncheckedCreateInput_1.UserRankUncheckedCreateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRankUncheckedCreateInput_1.UserRankUncheckedCreateInput)
], CreateOneUserRankArgs.prototype, "data", void 0);
exports.CreateOneUserRankArgs = CreateOneUserRankArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneUserRankArgs);
