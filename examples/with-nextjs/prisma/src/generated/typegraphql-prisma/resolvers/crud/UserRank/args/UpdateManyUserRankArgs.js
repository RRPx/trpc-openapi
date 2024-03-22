"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyUserRankArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserRankUncheckedUpdateManyInput_1 = require("../../../inputs/UserRankUncheckedUpdateManyInput");
const UserRankWhereInput_1 = require("../../../inputs/UserRankWhereInput");
let UpdateManyUserRankArgs = exports.UpdateManyUserRankArgs = class UpdateManyUserRankArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRankUncheckedUpdateManyInput_1.UserRankUncheckedUpdateManyInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserRankUncheckedUpdateManyInput_1.UserRankUncheckedUpdateManyInput)
], UpdateManyUserRankArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRankWhereInput_1.UserRankWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRankWhereInput_1.UserRankWhereInput)
], UpdateManyUserRankArgs.prototype, "where", void 0);
exports.UpdateManyUserRankArgs = UpdateManyUserRankArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyUserRankArgs);
