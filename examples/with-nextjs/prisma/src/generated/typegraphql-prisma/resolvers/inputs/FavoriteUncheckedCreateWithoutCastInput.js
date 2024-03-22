"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoriteUncheckedCreateWithoutCastInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let FavoriteUncheckedCreateWithoutCastInput = exports.FavoriteUncheckedCreateWithoutCastInput = class FavoriteUncheckedCreateWithoutCastInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FavoriteUncheckedCreateWithoutCastInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FavoriteUncheckedCreateWithoutCastInput.prototype, "client_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], FavoriteUncheckedCreateWithoutCastInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], FavoriteUncheckedCreateWithoutCastInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], FavoriteUncheckedCreateWithoutCastInput.prototype, "updated_at", void 0);
exports.FavoriteUncheckedCreateWithoutCastInput = FavoriteUncheckedCreateWithoutCastInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FavoriteUncheckedCreateWithoutCastInput", {})
], FavoriteUncheckedCreateWithoutCastInput);
