"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastUpdateOneWithoutFavoriteNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastCreateOrConnectWithoutFavoriteInput_1 = require("../inputs/CastCreateOrConnectWithoutFavoriteInput");
const CastUncheckedCreateWithoutFavoriteInput_1 = require("../inputs/CastUncheckedCreateWithoutFavoriteInput");
const CastUncheckedUpdateWithoutFavoriteInput_1 = require("../inputs/CastUncheckedUpdateWithoutFavoriteInput");
const CastUpsertWithoutFavoriteInput_1 = require("../inputs/CastUpsertWithoutFavoriteInput");
const CastWhereInput_1 = require("../inputs/CastWhereInput");
const CastWhereUniqueInput_1 = require("../inputs/CastWhereUniqueInput");
let CastUpdateOneWithoutFavoriteNestedInput = exports.CastUpdateOneWithoutFavoriteNestedInput = class CastUpdateOneWithoutFavoriteNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUncheckedCreateWithoutFavoriteInput_1.CastUncheckedCreateWithoutFavoriteInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastUncheckedCreateWithoutFavoriteInput_1.CastUncheckedCreateWithoutFavoriteInput)
], CastUpdateOneWithoutFavoriteNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastCreateOrConnectWithoutFavoriteInput_1.CastCreateOrConnectWithoutFavoriteInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastCreateOrConnectWithoutFavoriteInput_1.CastCreateOrConnectWithoutFavoriteInput)
], CastUpdateOneWithoutFavoriteNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUpsertWithoutFavoriteInput_1.CastUpsertWithoutFavoriteInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastUpsertWithoutFavoriteInput_1.CastUpsertWithoutFavoriteInput)
], CastUpdateOneWithoutFavoriteNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastWhereInput_1.CastWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastWhereInput_1.CastWhereInput)
], CastUpdateOneWithoutFavoriteNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastWhereInput_1.CastWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastWhereInput_1.CastWhereInput)
], CastUpdateOneWithoutFavoriteNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastWhereUniqueInput_1.CastWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastWhereUniqueInput_1.CastWhereUniqueInput)
], CastUpdateOneWithoutFavoriteNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUncheckedUpdateWithoutFavoriteInput_1.CastUncheckedUpdateWithoutFavoriteInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastUncheckedUpdateWithoutFavoriteInput_1.CastUncheckedUpdateWithoutFavoriteInput)
], CastUpdateOneWithoutFavoriteNestedInput.prototype, "update", void 0);
exports.CastUpdateOneWithoutFavoriteNestedInput = CastUpdateOneWithoutFavoriteNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CastUpdateOneWithoutFavoriteNestedInput", {})
], CastUpdateOneWithoutFavoriteNestedInput);
