"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoriteUpsertWithWhereUniqueWithoutClientInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FavoriteUncheckedCreateWithoutClientInput_1 = require("../inputs/FavoriteUncheckedCreateWithoutClientInput");
const FavoriteUncheckedUpdateWithoutClientInput_1 = require("../inputs/FavoriteUncheckedUpdateWithoutClientInput");
const FavoriteWhereUniqueInput_1 = require("../inputs/FavoriteWhereUniqueInput");
let FavoriteUpsertWithWhereUniqueWithoutClientInput = exports.FavoriteUpsertWithWhereUniqueWithoutClientInput = class FavoriteUpsertWithWhereUniqueWithoutClientInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FavoriteWhereUniqueInput_1.FavoriteWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FavoriteWhereUniqueInput_1.FavoriteWhereUniqueInput)
], FavoriteUpsertWithWhereUniqueWithoutClientInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FavoriteUncheckedUpdateWithoutClientInput_1.FavoriteUncheckedUpdateWithoutClientInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FavoriteUncheckedUpdateWithoutClientInput_1.FavoriteUncheckedUpdateWithoutClientInput)
], FavoriteUpsertWithWhereUniqueWithoutClientInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FavoriteUncheckedCreateWithoutClientInput_1.FavoriteUncheckedCreateWithoutClientInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FavoriteUncheckedCreateWithoutClientInput_1.FavoriteUncheckedCreateWithoutClientInput)
], FavoriteUpsertWithWhereUniqueWithoutClientInput.prototype, "create", void 0);
exports.FavoriteUpsertWithWhereUniqueWithoutClientInput = FavoriteUpsertWithWhereUniqueWithoutClientInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FavoriteUpsertWithWhereUniqueWithoutClientInput", {})
], FavoriteUpsertWithWhereUniqueWithoutClientInput);
