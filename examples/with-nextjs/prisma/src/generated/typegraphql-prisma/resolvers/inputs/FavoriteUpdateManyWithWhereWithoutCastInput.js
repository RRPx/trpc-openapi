"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoriteUpdateManyWithWhereWithoutCastInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FavoriteScalarWhereInput_1 = require("../inputs/FavoriteScalarWhereInput");
const FavoriteUncheckedUpdateManyWithoutCastInput_1 = require("../inputs/FavoriteUncheckedUpdateManyWithoutCastInput");
let FavoriteUpdateManyWithWhereWithoutCastInput = exports.FavoriteUpdateManyWithWhereWithoutCastInput = class FavoriteUpdateManyWithWhereWithoutCastInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FavoriteScalarWhereInput_1.FavoriteScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FavoriteScalarWhereInput_1.FavoriteScalarWhereInput)
], FavoriteUpdateManyWithWhereWithoutCastInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FavoriteUncheckedUpdateManyWithoutCastInput_1.FavoriteUncheckedUpdateManyWithoutCastInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FavoriteUncheckedUpdateManyWithoutCastInput_1.FavoriteUncheckedUpdateManyWithoutCastInput)
], FavoriteUpdateManyWithWhereWithoutCastInput.prototype, "data", void 0);
exports.FavoriteUpdateManyWithWhereWithoutCastInput = FavoriteUpdateManyWithWhereWithoutCastInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FavoriteUpdateManyWithWhereWithoutCastInput", {})
], FavoriteUpdateManyWithWhereWithoutCastInput);
