"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastUpdateManyWithWhereWithoutOption_masterInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastScalarWhereInput_1 = require("../inputs/CastScalarWhereInput");
const CastUncheckedUpdateManyWithoutOption_masterInput_1 = require("../inputs/CastUncheckedUpdateManyWithoutOption_masterInput");
let CastUpdateManyWithWhereWithoutOption_masterInput = class CastUpdateManyWithWhereWithoutOption_masterInput {
};
exports.CastUpdateManyWithWhereWithoutOption_masterInput = CastUpdateManyWithWhereWithoutOption_masterInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastScalarWhereInput_1.CastScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CastScalarWhereInput_1.CastScalarWhereInput)
], CastUpdateManyWithWhereWithoutOption_masterInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUncheckedUpdateManyWithoutOption_masterInput_1.CastUncheckedUpdateManyWithoutOption_masterInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CastUncheckedUpdateManyWithoutOption_masterInput_1.CastUncheckedUpdateManyWithoutOption_masterInput)
], CastUpdateManyWithWhereWithoutOption_masterInput.prototype, "data", void 0);
exports.CastUpdateManyWithWhereWithoutOption_masterInput = CastUpdateManyWithWhereWithoutOption_masterInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CastUpdateManyWithWhereWithoutOption_masterInput", {})
], CastUpdateManyWithWhereWithoutOption_masterInput);
