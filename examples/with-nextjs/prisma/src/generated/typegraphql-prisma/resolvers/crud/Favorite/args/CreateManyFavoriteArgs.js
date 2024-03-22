"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyFavoriteArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FavoriteCreateManyInput_1 = require("../../../inputs/FavoriteCreateManyInput");
let CreateManyFavoriteArgs = exports.CreateManyFavoriteArgs = class CreateManyFavoriteArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FavoriteCreateManyInput_1.FavoriteCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyFavoriteArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyFavoriteArgs.prototype, "skipDuplicates", void 0);
exports.CreateManyFavoriteArgs = CreateManyFavoriteArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyFavoriteArgs);
