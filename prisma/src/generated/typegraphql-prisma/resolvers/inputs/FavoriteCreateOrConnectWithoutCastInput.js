"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoriteCreateOrConnectWithoutCastInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FavoriteUncheckedCreateWithoutCastInput_1 = require("../inputs/FavoriteUncheckedCreateWithoutCastInput");
const FavoriteWhereUniqueInput_1 = require("../inputs/FavoriteWhereUniqueInput");
let FavoriteCreateOrConnectWithoutCastInput = class FavoriteCreateOrConnectWithoutCastInput {
};
exports.FavoriteCreateOrConnectWithoutCastInput = FavoriteCreateOrConnectWithoutCastInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FavoriteWhereUniqueInput_1.FavoriteWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FavoriteWhereUniqueInput_1.FavoriteWhereUniqueInput)
], FavoriteCreateOrConnectWithoutCastInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FavoriteUncheckedCreateWithoutCastInput_1.FavoriteUncheckedCreateWithoutCastInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FavoriteUncheckedCreateWithoutCastInput_1.FavoriteUncheckedCreateWithoutCastInput)
], FavoriteCreateOrConnectWithoutCastInput.prototype, "create", void 0);
exports.FavoriteCreateOrConnectWithoutCastInput = FavoriteCreateOrConnectWithoutCastInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FavoriteCreateOrConnectWithoutCastInput", {})
], FavoriteCreateOrConnectWithoutCastInput);
