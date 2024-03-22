"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastCreateNestedOneWithoutFavoriteInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastCreateOrConnectWithoutFavoriteInput_1 = require("../inputs/CastCreateOrConnectWithoutFavoriteInput");
const CastUncheckedCreateWithoutFavoriteInput_1 = require("../inputs/CastUncheckedCreateWithoutFavoriteInput");
const CastWhereUniqueInput_1 = require("../inputs/CastWhereUniqueInput");
let CastCreateNestedOneWithoutFavoriteInput = exports.CastCreateNestedOneWithoutFavoriteInput = class CastCreateNestedOneWithoutFavoriteInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUncheckedCreateWithoutFavoriteInput_1.CastUncheckedCreateWithoutFavoriteInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastUncheckedCreateWithoutFavoriteInput_1.CastUncheckedCreateWithoutFavoriteInput)
], CastCreateNestedOneWithoutFavoriteInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastCreateOrConnectWithoutFavoriteInput_1.CastCreateOrConnectWithoutFavoriteInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastCreateOrConnectWithoutFavoriteInput_1.CastCreateOrConnectWithoutFavoriteInput)
], CastCreateNestedOneWithoutFavoriteInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastWhereUniqueInput_1.CastWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastWhereUniqueInput_1.CastWhereUniqueInput)
], CastCreateNestedOneWithoutFavoriteInput.prototype, "connect", void 0);
exports.CastCreateNestedOneWithoutFavoriteInput = CastCreateNestedOneWithoutFavoriteInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CastCreateNestedOneWithoutFavoriteInput", {})
], CastCreateNestedOneWithoutFavoriteInput);
