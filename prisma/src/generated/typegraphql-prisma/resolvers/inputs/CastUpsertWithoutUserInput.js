"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastUpsertWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastUncheckedCreateWithoutUserInput_1 = require("../inputs/CastUncheckedCreateWithoutUserInput");
const CastUncheckedUpdateWithoutUserInput_1 = require("../inputs/CastUncheckedUpdateWithoutUserInput");
const CastWhereInput_1 = require("../inputs/CastWhereInput");
let CastUpsertWithoutUserInput = class CastUpsertWithoutUserInput {
};
exports.CastUpsertWithoutUserInput = CastUpsertWithoutUserInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUncheckedUpdateWithoutUserInput_1.CastUncheckedUpdateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CastUncheckedUpdateWithoutUserInput_1.CastUncheckedUpdateWithoutUserInput)
], CastUpsertWithoutUserInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUncheckedCreateWithoutUserInput_1.CastUncheckedCreateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CastUncheckedCreateWithoutUserInput_1.CastUncheckedCreateWithoutUserInput)
], CastUpsertWithoutUserInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastWhereInput_1.CastWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastWhereInput_1.CastWhereInput)
], CastUpsertWithoutUserInput.prototype, "where", void 0);
exports.CastUpsertWithoutUserInput = CastUpsertWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CastUpsertWithoutUserInput", {})
], CastUpsertWithoutUserInput);
