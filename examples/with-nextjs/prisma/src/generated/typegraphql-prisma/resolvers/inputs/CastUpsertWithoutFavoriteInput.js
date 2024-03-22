"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastUpsertWithoutFavoriteInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastUncheckedCreateWithoutFavoriteInput_1 = require("../inputs/CastUncheckedCreateWithoutFavoriteInput");
const CastUncheckedUpdateWithoutFavoriteInput_1 = require("../inputs/CastUncheckedUpdateWithoutFavoriteInput");
const CastWhereInput_1 = require("../inputs/CastWhereInput");
let CastUpsertWithoutFavoriteInput = exports.CastUpsertWithoutFavoriteInput = class CastUpsertWithoutFavoriteInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUncheckedUpdateWithoutFavoriteInput_1.CastUncheckedUpdateWithoutFavoriteInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CastUncheckedUpdateWithoutFavoriteInput_1.CastUncheckedUpdateWithoutFavoriteInput)
], CastUpsertWithoutFavoriteInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUncheckedCreateWithoutFavoriteInput_1.CastUncheckedCreateWithoutFavoriteInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CastUncheckedCreateWithoutFavoriteInput_1.CastUncheckedCreateWithoutFavoriteInput)
], CastUpsertWithoutFavoriteInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastWhereInput_1.CastWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastWhereInput_1.CastWhereInput)
], CastUpsertWithoutFavoriteInput.prototype, "where", void 0);
exports.CastUpsertWithoutFavoriteInput = CastUpsertWithoutFavoriteInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CastUpsertWithoutFavoriteInput", {})
], CastUpsertWithoutFavoriteInput);
