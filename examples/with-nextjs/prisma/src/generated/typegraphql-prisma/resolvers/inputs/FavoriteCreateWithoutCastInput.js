"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoriteCreateWithoutCastInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClientCreateNestedOneWithoutFavoriteInput_1 = require("../inputs/ClientCreateNestedOneWithoutFavoriteInput");
let FavoriteCreateWithoutCastInput = exports.FavoriteCreateWithoutCastInput = class FavoriteCreateWithoutCastInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FavoriteCreateWithoutCastInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], FavoriteCreateWithoutCastInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], FavoriteCreateWithoutCastInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], FavoriteCreateWithoutCastInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientCreateNestedOneWithoutFavoriteInput_1.ClientCreateNestedOneWithoutFavoriteInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientCreateNestedOneWithoutFavoriteInput_1.ClientCreateNestedOneWithoutFavoriteInput)
], FavoriteCreateWithoutCastInput.prototype, "client", void 0);
exports.FavoriteCreateWithoutCastInput = FavoriteCreateWithoutCastInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FavoriteCreateWithoutCastInput", {})
], FavoriteCreateWithoutCastInput);
