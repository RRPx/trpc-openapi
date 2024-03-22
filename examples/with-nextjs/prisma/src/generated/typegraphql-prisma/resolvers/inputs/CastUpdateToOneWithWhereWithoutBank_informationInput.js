"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastUpdateToOneWithWhereWithoutBank_informationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastUncheckedUpdateWithoutBank_informationInput_1 = require("../inputs/CastUncheckedUpdateWithoutBank_informationInput");
const CastWhereInput_1 = require("../inputs/CastWhereInput");
let CastUpdateToOneWithWhereWithoutBank_informationInput = exports.CastUpdateToOneWithWhereWithoutBank_informationInput = class CastUpdateToOneWithWhereWithoutBank_informationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastWhereInput_1.CastWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastWhereInput_1.CastWhereInput)
], CastUpdateToOneWithWhereWithoutBank_informationInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUncheckedUpdateWithoutBank_informationInput_1.CastUncheckedUpdateWithoutBank_informationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CastUncheckedUpdateWithoutBank_informationInput_1.CastUncheckedUpdateWithoutBank_informationInput)
], CastUpdateToOneWithWhereWithoutBank_informationInput.prototype, "data", void 0);
exports.CastUpdateToOneWithWhereWithoutBank_informationInput = CastUpdateToOneWithWhereWithoutBank_informationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CastUpdateToOneWithWhereWithoutBank_informationInput", {})
], CastUpdateToOneWithWhereWithoutBank_informationInput);
