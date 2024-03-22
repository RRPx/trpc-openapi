"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueFavoriteArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FavoriteWhereUniqueInput_1 = require("../../../inputs/FavoriteWhereUniqueInput");
let FindUniqueFavoriteArgs = exports.FindUniqueFavoriteArgs = class FindUniqueFavoriteArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FavoriteWhereUniqueInput_1.FavoriteWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FavoriteWhereUniqueInput_1.FavoriteWhereUniqueInput)
], FindUniqueFavoriteArgs.prototype, "where", void 0);
exports.FindUniqueFavoriteArgs = FindUniqueFavoriteArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueFavoriteArgs);
