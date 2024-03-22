"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoriteUpdateManyWithWhereWithoutClientInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FavoriteScalarWhereInput_1 = require("../inputs/FavoriteScalarWhereInput");
const FavoriteUncheckedUpdateManyWithoutClientInput_1 = require("../inputs/FavoriteUncheckedUpdateManyWithoutClientInput");
let FavoriteUpdateManyWithWhereWithoutClientInput = exports.FavoriteUpdateManyWithWhereWithoutClientInput = class FavoriteUpdateManyWithWhereWithoutClientInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FavoriteScalarWhereInput_1.FavoriteScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FavoriteScalarWhereInput_1.FavoriteScalarWhereInput)
], FavoriteUpdateManyWithWhereWithoutClientInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FavoriteUncheckedUpdateManyWithoutClientInput_1.FavoriteUncheckedUpdateManyWithoutClientInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FavoriteUncheckedUpdateManyWithoutClientInput_1.FavoriteUncheckedUpdateManyWithoutClientInput)
], FavoriteUpdateManyWithWhereWithoutClientInput.prototype, "data", void 0);
exports.FavoriteUpdateManyWithWhereWithoutClientInput = FavoriteUpdateManyWithWhereWithoutClientInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FavoriteUpdateManyWithWhereWithoutClientInput", {})
], FavoriteUpdateManyWithWhereWithoutClientInput);
