"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoriteCreateOrConnectWithoutClientInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FavoriteUncheckedCreateWithoutClientInput_1 = require("../inputs/FavoriteUncheckedCreateWithoutClientInput");
const FavoriteWhereUniqueInput_1 = require("../inputs/FavoriteWhereUniqueInput");
let FavoriteCreateOrConnectWithoutClientInput = exports.FavoriteCreateOrConnectWithoutClientInput = class FavoriteCreateOrConnectWithoutClientInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FavoriteWhereUniqueInput_1.FavoriteWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FavoriteWhereUniqueInput_1.FavoriteWhereUniqueInput)
], FavoriteCreateOrConnectWithoutClientInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FavoriteUncheckedCreateWithoutClientInput_1.FavoriteUncheckedCreateWithoutClientInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FavoriteUncheckedCreateWithoutClientInput_1.FavoriteUncheckedCreateWithoutClientInput)
], FavoriteCreateOrConnectWithoutClientInput.prototype, "create", void 0);
exports.FavoriteCreateOrConnectWithoutClientInput = FavoriteCreateOrConnectWithoutClientInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FavoriteCreateOrConnectWithoutClientInput", {})
], FavoriteCreateOrConnectWithoutClientInput);
