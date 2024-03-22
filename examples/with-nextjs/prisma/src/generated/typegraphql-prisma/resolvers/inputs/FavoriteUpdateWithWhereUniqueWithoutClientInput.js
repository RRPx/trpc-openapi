"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoriteUpdateWithWhereUniqueWithoutClientInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FavoriteUncheckedUpdateWithoutClientInput_1 = require("../inputs/FavoriteUncheckedUpdateWithoutClientInput");
const FavoriteWhereUniqueInput_1 = require("../inputs/FavoriteWhereUniqueInput");
let FavoriteUpdateWithWhereUniqueWithoutClientInput = exports.FavoriteUpdateWithWhereUniqueWithoutClientInput = class FavoriteUpdateWithWhereUniqueWithoutClientInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FavoriteWhereUniqueInput_1.FavoriteWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FavoriteWhereUniqueInput_1.FavoriteWhereUniqueInput)
], FavoriteUpdateWithWhereUniqueWithoutClientInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FavoriteUncheckedUpdateWithoutClientInput_1.FavoriteUncheckedUpdateWithoutClientInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FavoriteUncheckedUpdateWithoutClientInput_1.FavoriteUncheckedUpdateWithoutClientInput)
], FavoriteUpdateWithWhereUniqueWithoutClientInput.prototype, "data", void 0);
exports.FavoriteUpdateWithWhereUniqueWithoutClientInput = FavoriteUpdateWithWhereUniqueWithoutClientInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FavoriteUpdateWithWhereUniqueWithoutClientInput", {})
], FavoriteUpdateWithWhereUniqueWithoutClientInput);
