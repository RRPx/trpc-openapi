"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneUserRankArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserRankUncheckedCreateInput_1 = require("../../../inputs/UserRankUncheckedCreateInput");
const UserRankUncheckedUpdateInput_1 = require("../../../inputs/UserRankUncheckedUpdateInput");
const UserRankWhereUniqueInput_1 = require("../../../inputs/UserRankWhereUniqueInput");
let UpsertOneUserRankArgs = exports.UpsertOneUserRankArgs = class UpsertOneUserRankArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRankWhereUniqueInput_1.UserRankWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserRankWhereUniqueInput_1.UserRankWhereUniqueInput)
], UpsertOneUserRankArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRankUncheckedCreateInput_1.UserRankUncheckedCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserRankUncheckedCreateInput_1.UserRankUncheckedCreateInput)
], UpsertOneUserRankArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRankUncheckedUpdateInput_1.UserRankUncheckedUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserRankUncheckedUpdateInput_1.UserRankUncheckedUpdateInput)
], UpsertOneUserRankArgs.prototype, "update", void 0);
exports.UpsertOneUserRankArgs = UpsertOneUserRankArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneUserRankArgs);
