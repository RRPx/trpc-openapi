"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastUpsertWithoutBank_informationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastUncheckedCreateWithoutBank_informationInput_1 = require("../inputs/CastUncheckedCreateWithoutBank_informationInput");
const CastUncheckedUpdateWithoutBank_informationInput_1 = require("../inputs/CastUncheckedUpdateWithoutBank_informationInput");
const CastWhereInput_1 = require("../inputs/CastWhereInput");
let CastUpsertWithoutBank_informationInput = exports.CastUpsertWithoutBank_informationInput = class CastUpsertWithoutBank_informationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUncheckedUpdateWithoutBank_informationInput_1.CastUncheckedUpdateWithoutBank_informationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CastUncheckedUpdateWithoutBank_informationInput_1.CastUncheckedUpdateWithoutBank_informationInput)
], CastUpsertWithoutBank_informationInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUncheckedCreateWithoutBank_informationInput_1.CastUncheckedCreateWithoutBank_informationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CastUncheckedCreateWithoutBank_informationInput_1.CastUncheckedCreateWithoutBank_informationInput)
], CastUpsertWithoutBank_informationInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastWhereInput_1.CastWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastWhereInput_1.CastWhereInput)
], CastUpsertWithoutBank_informationInput.prototype, "where", void 0);
exports.CastUpsertWithoutBank_informationInput = CastUpsertWithoutBank_informationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CastUpsertWithoutBank_informationInput", {})
], CastUpsertWithoutBank_informationInput);
