"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoriteCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastCreateNestedOneWithoutFavoriteInput_1 = require("../inputs/CastCreateNestedOneWithoutFavoriteInput");
const ClientCreateNestedOneWithoutFavoriteInput_1 = require("../inputs/ClientCreateNestedOneWithoutFavoriteInput");
let FavoriteCreateInput = exports.FavoriteCreateInput = class FavoriteCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FavoriteCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], FavoriteCreateInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], FavoriteCreateInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], FavoriteCreateInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientCreateNestedOneWithoutFavoriteInput_1.ClientCreateNestedOneWithoutFavoriteInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientCreateNestedOneWithoutFavoriteInput_1.ClientCreateNestedOneWithoutFavoriteInput)
], FavoriteCreateInput.prototype, "client", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastCreateNestedOneWithoutFavoriteInput_1.CastCreateNestedOneWithoutFavoriteInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastCreateNestedOneWithoutFavoriteInput_1.CastCreateNestedOneWithoutFavoriteInput)
], FavoriteCreateInput.prototype, "cast", void 0);
exports.FavoriteCreateInput = FavoriteCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FavoriteCreateInput", {})
], FavoriteCreateInput);
