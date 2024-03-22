"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastUpdateToOneWithWhereWithoutFavoriteInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastUncheckedUpdateWithoutFavoriteInput_1 = require("../inputs/CastUncheckedUpdateWithoutFavoriteInput");
const CastWhereInput_1 = require("../inputs/CastWhereInput");
let CastUpdateToOneWithWhereWithoutFavoriteInput = class CastUpdateToOneWithWhereWithoutFavoriteInput {
};
exports.CastUpdateToOneWithWhereWithoutFavoriteInput = CastUpdateToOneWithWhereWithoutFavoriteInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastWhereInput_1.CastWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastWhereInput_1.CastWhereInput)
], CastUpdateToOneWithWhereWithoutFavoriteInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUncheckedUpdateWithoutFavoriteInput_1.CastUncheckedUpdateWithoutFavoriteInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CastUncheckedUpdateWithoutFavoriteInput_1.CastUncheckedUpdateWithoutFavoriteInput)
], CastUpdateToOneWithWhereWithoutFavoriteInput.prototype, "data", void 0);
exports.CastUpdateToOneWithWhereWithoutFavoriteInput = CastUpdateToOneWithWhereWithoutFavoriteInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CastUpdateToOneWithWhereWithoutFavoriteInput", {})
], CastUpdateToOneWithWhereWithoutFavoriteInput);
