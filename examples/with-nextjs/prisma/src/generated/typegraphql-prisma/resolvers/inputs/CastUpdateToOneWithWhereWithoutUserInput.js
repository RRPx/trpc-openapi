"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastUpdateToOneWithWhereWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastUncheckedUpdateWithoutUserInput_1 = require("../inputs/CastUncheckedUpdateWithoutUserInput");
const CastWhereInput_1 = require("../inputs/CastWhereInput");
let CastUpdateToOneWithWhereWithoutUserInput = exports.CastUpdateToOneWithWhereWithoutUserInput = class CastUpdateToOneWithWhereWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastWhereInput_1.CastWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastWhereInput_1.CastWhereInput)
], CastUpdateToOneWithWhereWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUncheckedUpdateWithoutUserInput_1.CastUncheckedUpdateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CastUncheckedUpdateWithoutUserInput_1.CastUncheckedUpdateWithoutUserInput)
], CastUpdateToOneWithWhereWithoutUserInput.prototype, "data", void 0);
exports.CastUpdateToOneWithWhereWithoutUserInput = CastUpdateToOneWithWhereWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CastUpdateToOneWithWhereWithoutUserInput", {})
], CastUpdateToOneWithWhereWithoutUserInput);
