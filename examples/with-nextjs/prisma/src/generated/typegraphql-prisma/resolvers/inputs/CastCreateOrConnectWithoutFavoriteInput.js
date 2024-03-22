"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastCreateOrConnectWithoutFavoriteInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastUncheckedCreateWithoutFavoriteInput_1 = require("../inputs/CastUncheckedCreateWithoutFavoriteInput");
const CastWhereUniqueInput_1 = require("../inputs/CastWhereUniqueInput");
let CastCreateOrConnectWithoutFavoriteInput = exports.CastCreateOrConnectWithoutFavoriteInput = class CastCreateOrConnectWithoutFavoriteInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastWhereUniqueInput_1.CastWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CastWhereUniqueInput_1.CastWhereUniqueInput)
], CastCreateOrConnectWithoutFavoriteInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUncheckedCreateWithoutFavoriteInput_1.CastUncheckedCreateWithoutFavoriteInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CastUncheckedCreateWithoutFavoriteInput_1.CastUncheckedCreateWithoutFavoriteInput)
], CastCreateOrConnectWithoutFavoriteInput.prototype, "create", void 0);
exports.CastCreateOrConnectWithoutFavoriteInput = CastCreateOrConnectWithoutFavoriteInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CastCreateOrConnectWithoutFavoriteInput", {})
], CastCreateOrConnectWithoutFavoriteInput);
