"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyFavoriteArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FavoriteWhereInput_1 = require("../../../inputs/FavoriteWhereInput");
let DeleteManyFavoriteArgs = exports.DeleteManyFavoriteArgs = class DeleteManyFavoriteArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FavoriteWhereInput_1.FavoriteWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FavoriteWhereInput_1.FavoriteWhereInput)
], DeleteManyFavoriteArgs.prototype, "where", void 0);
exports.DeleteManyFavoriteArgs = DeleteManyFavoriteArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyFavoriteArgs);
