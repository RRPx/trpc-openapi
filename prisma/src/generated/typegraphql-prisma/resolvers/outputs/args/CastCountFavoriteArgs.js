"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastCountFavoriteArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FavoriteWhereInput_1 = require("../../inputs/FavoriteWhereInput");
let CastCountFavoriteArgs = class CastCountFavoriteArgs {
};
exports.CastCountFavoriteArgs = CastCountFavoriteArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FavoriteWhereInput_1.FavoriteWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FavoriteWhereInput_1.FavoriteWhereInput)
], CastCountFavoriteArgs.prototype, "where", void 0);
exports.CastCountFavoriteArgs = CastCountFavoriteArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CastCountFavoriteArgs);
