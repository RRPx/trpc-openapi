"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneFavoriteArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FavoriteUncheckedUpdateInput_1 = require("../../../inputs/FavoriteUncheckedUpdateInput");
const FavoriteWhereUniqueInput_1 = require("../../../inputs/FavoriteWhereUniqueInput");
let UpdateOneFavoriteArgs = exports.UpdateOneFavoriteArgs = class UpdateOneFavoriteArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FavoriteUncheckedUpdateInput_1.FavoriteUncheckedUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FavoriteUncheckedUpdateInput_1.FavoriteUncheckedUpdateInput)
], UpdateOneFavoriteArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FavoriteWhereUniqueInput_1.FavoriteWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FavoriteWhereUniqueInput_1.FavoriteWhereUniqueInput)
], UpdateOneFavoriteArgs.prototype, "where", void 0);
exports.UpdateOneFavoriteArgs = UpdateOneFavoriteArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneFavoriteArgs);
