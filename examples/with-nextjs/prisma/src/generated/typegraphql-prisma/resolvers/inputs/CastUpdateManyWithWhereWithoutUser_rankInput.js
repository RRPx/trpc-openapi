"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastUpdateManyWithWhereWithoutUser_rankInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastScalarWhereInput_1 = require("../inputs/CastScalarWhereInput");
const CastUncheckedUpdateManyWithoutUser_rankInput_1 = require("../inputs/CastUncheckedUpdateManyWithoutUser_rankInput");
let CastUpdateManyWithWhereWithoutUser_rankInput = exports.CastUpdateManyWithWhereWithoutUser_rankInput = class CastUpdateManyWithWhereWithoutUser_rankInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastScalarWhereInput_1.CastScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CastScalarWhereInput_1.CastScalarWhereInput)
], CastUpdateManyWithWhereWithoutUser_rankInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUncheckedUpdateManyWithoutUser_rankInput_1.CastUncheckedUpdateManyWithoutUser_rankInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CastUncheckedUpdateManyWithoutUser_rankInput_1.CastUncheckedUpdateManyWithoutUser_rankInput)
], CastUpdateManyWithWhereWithoutUser_rankInput.prototype, "data", void 0);
exports.CastUpdateManyWithWhereWithoutUser_rankInput = CastUpdateManyWithWhereWithoutUser_rankInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CastUpdateManyWithWhereWithoutUser_rankInput", {})
], CastUpdateManyWithWhereWithoutUser_rankInput);
