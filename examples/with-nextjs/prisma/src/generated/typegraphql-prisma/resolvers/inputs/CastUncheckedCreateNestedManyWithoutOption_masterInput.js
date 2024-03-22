"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastUncheckedCreateNestedManyWithoutOption_masterInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastCreateOrConnectWithoutOption_masterInput_1 = require("../inputs/CastCreateOrConnectWithoutOption_masterInput");
const CastCreateWithoutOption_masterInput_1 = require("../inputs/CastCreateWithoutOption_masterInput");
const CastWhereUniqueInput_1 = require("../inputs/CastWhereUniqueInput");
let CastUncheckedCreateNestedManyWithoutOption_masterInput = exports.CastUncheckedCreateNestedManyWithoutOption_masterInput = class CastUncheckedCreateNestedManyWithoutOption_masterInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CastCreateWithoutOption_masterInput_1.CastCreateWithoutOption_masterInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CastUncheckedCreateNestedManyWithoutOption_masterInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CastCreateOrConnectWithoutOption_masterInput_1.CastCreateOrConnectWithoutOption_masterInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CastUncheckedCreateNestedManyWithoutOption_masterInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CastWhereUniqueInput_1.CastWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CastUncheckedCreateNestedManyWithoutOption_masterInput.prototype, "connect", void 0);
exports.CastUncheckedCreateNestedManyWithoutOption_masterInput = CastUncheckedCreateNestedManyWithoutOption_masterInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CastUncheckedCreateNestedManyWithoutOption_masterInput", {})
], CastUncheckedCreateNestedManyWithoutOption_masterInput);
