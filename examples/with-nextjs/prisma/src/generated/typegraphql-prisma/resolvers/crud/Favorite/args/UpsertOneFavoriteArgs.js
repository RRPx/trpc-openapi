"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneFavoriteArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FavoriteUncheckedCreateInput_1 = require("../../../inputs/FavoriteUncheckedCreateInput");
const FavoriteUncheckedUpdateInput_1 = require("../../../inputs/FavoriteUncheckedUpdateInput");
const FavoriteWhereUniqueInput_1 = require("../../../inputs/FavoriteWhereUniqueInput");
let UpsertOneFavoriteArgs = exports.UpsertOneFavoriteArgs = class UpsertOneFavoriteArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FavoriteWhereUniqueInput_1.FavoriteWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FavoriteWhereUniqueInput_1.FavoriteWhereUniqueInput)
], UpsertOneFavoriteArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FavoriteUncheckedCreateInput_1.FavoriteUncheckedCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FavoriteUncheckedCreateInput_1.FavoriteUncheckedCreateInput)
], UpsertOneFavoriteArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FavoriteUncheckedUpdateInput_1.FavoriteUncheckedUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FavoriteUncheckedUpdateInput_1.FavoriteUncheckedUpdateInput)
], UpsertOneFavoriteArgs.prototype, "update", void 0);
exports.UpsertOneFavoriteArgs = UpsertOneFavoriteArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneFavoriteArgs);
