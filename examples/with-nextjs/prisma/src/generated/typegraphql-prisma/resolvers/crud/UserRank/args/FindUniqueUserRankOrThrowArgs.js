"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueUserRankOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserRankWhereUniqueInput_1 = require("../../../inputs/UserRankWhereUniqueInput");
let FindUniqueUserRankOrThrowArgs = exports.FindUniqueUserRankOrThrowArgs = class FindUniqueUserRankOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRankWhereUniqueInput_1.UserRankWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserRankWhereUniqueInput_1.UserRankWhereUniqueInput)
], FindUniqueUserRankOrThrowArgs.prototype, "where", void 0);
exports.FindUniqueUserRankOrThrowArgs = FindUniqueUserRankOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueUserRankOrThrowArgs);
