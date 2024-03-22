"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueFavoriteOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FavoriteWhereUniqueInput_1 = require("../../../inputs/FavoriteWhereUniqueInput");
let FindUniqueFavoriteOrThrowArgs = class FindUniqueFavoriteOrThrowArgs {
};
exports.FindUniqueFavoriteOrThrowArgs = FindUniqueFavoriteOrThrowArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FavoriteWhereUniqueInput_1.FavoriteWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FavoriteWhereUniqueInput_1.FavoriteWhereUniqueInput)
], FindUniqueFavoriteOrThrowArgs.prototype, "where", void 0);
exports.FindUniqueFavoriteOrThrowArgs = FindUniqueFavoriteOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueFavoriteOrThrowArgs);
