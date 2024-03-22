"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoriteUncheckedCreateWithoutClientInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let FavoriteUncheckedCreateWithoutClientInput = exports.FavoriteUncheckedCreateWithoutClientInput = class FavoriteUncheckedCreateWithoutClientInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FavoriteUncheckedCreateWithoutClientInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FavoriteUncheckedCreateWithoutClientInput.prototype, "cast_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], FavoriteUncheckedCreateWithoutClientInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], FavoriteUncheckedCreateWithoutClientInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], FavoriteUncheckedCreateWithoutClientInput.prototype, "updated_at", void 0);
exports.FavoriteUncheckedCreateWithoutClientInput = FavoriteUncheckedCreateWithoutClientInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FavoriteUncheckedCreateWithoutClientInput", {})
], FavoriteUncheckedCreateWithoutClientInput);
