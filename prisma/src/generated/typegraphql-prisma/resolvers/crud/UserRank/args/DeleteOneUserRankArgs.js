"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneUserRankArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserRankWhereUniqueInput_1 = require("../../../inputs/UserRankWhereUniqueInput");
let DeleteOneUserRankArgs = class DeleteOneUserRankArgs {
};
exports.DeleteOneUserRankArgs = DeleteOneUserRankArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRankWhereUniqueInput_1.UserRankWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserRankWhereUniqueInput_1.UserRankWhereUniqueInput)
], DeleteOneUserRankArgs.prototype, "where", void 0);
exports.DeleteOneUserRankArgs = DeleteOneUserRankArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneUserRankArgs);
