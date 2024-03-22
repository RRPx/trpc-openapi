"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastUpdateWithWhereUniqueWithoutUser_rankInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastUncheckedUpdateWithoutUser_rankInput_1 = require("../inputs/CastUncheckedUpdateWithoutUser_rankInput");
const CastWhereUniqueInput_1 = require("../inputs/CastWhereUniqueInput");
let CastUpdateWithWhereUniqueWithoutUser_rankInput = exports.CastUpdateWithWhereUniqueWithoutUser_rankInput = class CastUpdateWithWhereUniqueWithoutUser_rankInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastWhereUniqueInput_1.CastWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CastWhereUniqueInput_1.CastWhereUniqueInput)
], CastUpdateWithWhereUniqueWithoutUser_rankInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUncheckedUpdateWithoutUser_rankInput_1.CastUncheckedUpdateWithoutUser_rankInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CastUncheckedUpdateWithoutUser_rankInput_1.CastUncheckedUpdateWithoutUser_rankInput)
], CastUpdateWithWhereUniqueWithoutUser_rankInput.prototype, "data", void 0);
exports.CastUpdateWithWhereUniqueWithoutUser_rankInput = CastUpdateWithWhereUniqueWithoutUser_rankInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CastUpdateWithWhereUniqueWithoutUser_rankInput", {})
], CastUpdateWithWhereUniqueWithoutUser_rankInput);
