"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneUserRankArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserRankUncheckedUpdateInput_1 = require("../../../inputs/UserRankUncheckedUpdateInput");
const UserRankWhereUniqueInput_1 = require("../../../inputs/UserRankWhereUniqueInput");
let UpdateOneUserRankArgs = class UpdateOneUserRankArgs {
};
exports.UpdateOneUserRankArgs = UpdateOneUserRankArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRankUncheckedUpdateInput_1.UserRankUncheckedUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserRankUncheckedUpdateInput_1.UserRankUncheckedUpdateInput)
], UpdateOneUserRankArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRankWhereUniqueInput_1.UserRankWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserRankWhereUniqueInput_1.UserRankWhereUniqueInput)
], UpdateOneUserRankArgs.prototype, "where", void 0);
exports.UpdateOneUserRankArgs = UpdateOneUserRankArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneUserRankArgs);
