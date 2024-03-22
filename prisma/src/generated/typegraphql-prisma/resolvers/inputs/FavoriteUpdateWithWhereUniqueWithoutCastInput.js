"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoriteUpdateWithWhereUniqueWithoutCastInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FavoriteUncheckedUpdateWithoutCastInput_1 = require("../inputs/FavoriteUncheckedUpdateWithoutCastInput");
const FavoriteWhereUniqueInput_1 = require("../inputs/FavoriteWhereUniqueInput");
let FavoriteUpdateWithWhereUniqueWithoutCastInput = class FavoriteUpdateWithWhereUniqueWithoutCastInput {
};
exports.FavoriteUpdateWithWhereUniqueWithoutCastInput = FavoriteUpdateWithWhereUniqueWithoutCastInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FavoriteWhereUniqueInput_1.FavoriteWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FavoriteWhereUniqueInput_1.FavoriteWhereUniqueInput)
], FavoriteUpdateWithWhereUniqueWithoutCastInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FavoriteUncheckedUpdateWithoutCastInput_1.FavoriteUncheckedUpdateWithoutCastInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FavoriteUncheckedUpdateWithoutCastInput_1.FavoriteUncheckedUpdateWithoutCastInput)
], FavoriteUpdateWithWhereUniqueWithoutCastInput.prototype, "data", void 0);
exports.FavoriteUpdateWithWhereUniqueWithoutCastInput = FavoriteUpdateWithWhereUniqueWithoutCastInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FavoriteUpdateWithWhereUniqueWithoutCastInput", {})
], FavoriteUpdateWithWhereUniqueWithoutCastInput);
