"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyUserRankArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserRankWhereInput_1 = require("../../../inputs/UserRankWhereInput");
let DeleteManyUserRankArgs = exports.DeleteManyUserRankArgs = class DeleteManyUserRankArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRankWhereInput_1.UserRankWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRankWhereInput_1.UserRankWhereInput)
], DeleteManyUserRankArgs.prototype, "where", void 0);
exports.DeleteManyUserRankArgs = DeleteManyUserRankArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyUserRankArgs);
