"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoriteCreateWithoutClientInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastCreateNestedOneWithoutFavoriteInput_1 = require("../inputs/CastCreateNestedOneWithoutFavoriteInput");
let FavoriteCreateWithoutClientInput = exports.FavoriteCreateWithoutClientInput = class FavoriteCreateWithoutClientInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FavoriteCreateWithoutClientInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], FavoriteCreateWithoutClientInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], FavoriteCreateWithoutClientInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], FavoriteCreateWithoutClientInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastCreateNestedOneWithoutFavoriteInput_1.CastCreateNestedOneWithoutFavoriteInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastCreateNestedOneWithoutFavoriteInput_1.CastCreateNestedOneWithoutFavoriteInput)
], FavoriteCreateWithoutClientInput.prototype, "cast", void 0);
exports.FavoriteCreateWithoutClientInput = FavoriteCreateWithoutClientInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FavoriteCreateWithoutClientInput", {})
], FavoriteCreateWithoutClientInput);
