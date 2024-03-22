"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueUserRankArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserRankWhereUniqueInput_1 = require("../../../inputs/UserRankWhereUniqueInput");
let FindUniqueUserRankArgs = exports.FindUniqueUserRankArgs = class FindUniqueUserRankArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRankWhereUniqueInput_1.UserRankWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserRankWhereUniqueInput_1.UserRankWhereUniqueInput)
], FindUniqueUserRankArgs.prototype, "where", void 0);
exports.FindUniqueUserRankArgs = FindUniqueUserRankArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueUserRankArgs);
