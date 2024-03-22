"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastUpsertWithWhereUniqueWithoutUser_rankInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastUncheckedCreateWithoutUser_rankInput_1 = require("../inputs/CastUncheckedCreateWithoutUser_rankInput");
const CastUncheckedUpdateWithoutUser_rankInput_1 = require("../inputs/CastUncheckedUpdateWithoutUser_rankInput");
const CastWhereUniqueInput_1 = require("../inputs/CastWhereUniqueInput");
let CastUpsertWithWhereUniqueWithoutUser_rankInput = class CastUpsertWithWhereUniqueWithoutUser_rankInput {
};
exports.CastUpsertWithWhereUniqueWithoutUser_rankInput = CastUpsertWithWhereUniqueWithoutUser_rankInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastWhereUniqueInput_1.CastWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CastWhereUniqueInput_1.CastWhereUniqueInput)
], CastUpsertWithWhereUniqueWithoutUser_rankInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUncheckedUpdateWithoutUser_rankInput_1.CastUncheckedUpdateWithoutUser_rankInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CastUncheckedUpdateWithoutUser_rankInput_1.CastUncheckedUpdateWithoutUser_rankInput)
], CastUpsertWithWhereUniqueWithoutUser_rankInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUncheckedCreateWithoutUser_rankInput_1.CastUncheckedCreateWithoutUser_rankInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CastUncheckedCreateWithoutUser_rankInput_1.CastUncheckedCreateWithoutUser_rankInput)
], CastUpsertWithWhereUniqueWithoutUser_rankInput.prototype, "create", void 0);
exports.CastUpsertWithWhereUniqueWithoutUser_rankInput = CastUpsertWithWhereUniqueWithoutUser_rankInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CastUpsertWithWhereUniqueWithoutUser_rankInput", {})
], CastUpsertWithWhereUniqueWithoutUser_rankInput);
