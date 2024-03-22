"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyFavoriteArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FavoriteUncheckedUpdateManyInput_1 = require("../../../inputs/FavoriteUncheckedUpdateManyInput");
const FavoriteWhereInput_1 = require("../../../inputs/FavoriteWhereInput");
let UpdateManyFavoriteArgs = class UpdateManyFavoriteArgs {
};
exports.UpdateManyFavoriteArgs = UpdateManyFavoriteArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FavoriteUncheckedUpdateManyInput_1.FavoriteUncheckedUpdateManyInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FavoriteUncheckedUpdateManyInput_1.FavoriteUncheckedUpdateManyInput)
], UpdateManyFavoriteArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FavoriteWhereInput_1.FavoriteWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FavoriteWhereInput_1.FavoriteWhereInput)
], UpdateManyFavoriteArgs.prototype, "where", void 0);
exports.UpdateManyFavoriteArgs = UpdateManyFavoriteArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyFavoriteArgs);
