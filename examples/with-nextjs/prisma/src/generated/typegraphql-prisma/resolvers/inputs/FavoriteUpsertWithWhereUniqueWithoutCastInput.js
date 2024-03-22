"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoriteUpsertWithWhereUniqueWithoutCastInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FavoriteUncheckedCreateWithoutCastInput_1 = require("../inputs/FavoriteUncheckedCreateWithoutCastInput");
const FavoriteUncheckedUpdateWithoutCastInput_1 = require("../inputs/FavoriteUncheckedUpdateWithoutCastInput");
const FavoriteWhereUniqueInput_1 = require("../inputs/FavoriteWhereUniqueInput");
let FavoriteUpsertWithWhereUniqueWithoutCastInput = exports.FavoriteUpsertWithWhereUniqueWithoutCastInput = class FavoriteUpsertWithWhereUniqueWithoutCastInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FavoriteWhereUniqueInput_1.FavoriteWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FavoriteWhereUniqueInput_1.FavoriteWhereUniqueInput)
], FavoriteUpsertWithWhereUniqueWithoutCastInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FavoriteUncheckedUpdateWithoutCastInput_1.FavoriteUncheckedUpdateWithoutCastInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FavoriteUncheckedUpdateWithoutCastInput_1.FavoriteUncheckedUpdateWithoutCastInput)
], FavoriteUpsertWithWhereUniqueWithoutCastInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FavoriteUncheckedCreateWithoutCastInput_1.FavoriteUncheckedCreateWithoutCastInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FavoriteUncheckedCreateWithoutCastInput_1.FavoriteUncheckedCreateWithoutCastInput)
], FavoriteUpsertWithWhereUniqueWithoutCastInput.prototype, "create", void 0);
exports.FavoriteUpsertWithWhereUniqueWithoutCastInput = FavoriteUpsertWithWhereUniqueWithoutCastInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FavoriteUpsertWithWhereUniqueWithoutCastInput", {})
], FavoriteUpsertWithWhereUniqueWithoutCastInput);
