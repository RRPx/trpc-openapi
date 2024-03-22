"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneFavoriteArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FavoriteUncheckedCreateInput_1 = require("../../../inputs/FavoriteUncheckedCreateInput");
let CreateOneFavoriteArgs = class CreateOneFavoriteArgs {
};
exports.CreateOneFavoriteArgs = CreateOneFavoriteArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FavoriteUncheckedCreateInput_1.FavoriteUncheckedCreateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FavoriteUncheckedCreateInput_1.FavoriteUncheckedCreateInput)
], CreateOneFavoriteArgs.prototype, "data", void 0);
exports.CreateOneFavoriteArgs = CreateOneFavoriteArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneFavoriteArgs);
