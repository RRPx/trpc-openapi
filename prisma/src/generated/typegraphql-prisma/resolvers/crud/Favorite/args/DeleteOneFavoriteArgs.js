"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneFavoriteArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FavoriteWhereUniqueInput_1 = require("../../../inputs/FavoriteWhereUniqueInput");
let DeleteOneFavoriteArgs = class DeleteOneFavoriteArgs {
};
exports.DeleteOneFavoriteArgs = DeleteOneFavoriteArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FavoriteWhereUniqueInput_1.FavoriteWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FavoriteWhereUniqueInput_1.FavoriteWhereUniqueInput)
], DeleteOneFavoriteArgs.prototype, "where", void 0);
exports.DeleteOneFavoriteArgs = DeleteOneFavoriteArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneFavoriteArgs);
