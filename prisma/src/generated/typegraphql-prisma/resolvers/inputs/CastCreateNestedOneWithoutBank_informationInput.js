"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastCreateNestedOneWithoutBank_informationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastCreateOrConnectWithoutBank_informationInput_1 = require("../inputs/CastCreateOrConnectWithoutBank_informationInput");
const CastUncheckedCreateWithoutBank_informationInput_1 = require("../inputs/CastUncheckedCreateWithoutBank_informationInput");
const CastWhereUniqueInput_1 = require("../inputs/CastWhereUniqueInput");
let CastCreateNestedOneWithoutBank_informationInput = class CastCreateNestedOneWithoutBank_informationInput {
};
exports.CastCreateNestedOneWithoutBank_informationInput = CastCreateNestedOneWithoutBank_informationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUncheckedCreateWithoutBank_informationInput_1.CastUncheckedCreateWithoutBank_informationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastUncheckedCreateWithoutBank_informationInput_1.CastUncheckedCreateWithoutBank_informationInput)
], CastCreateNestedOneWithoutBank_informationInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastCreateOrConnectWithoutBank_informationInput_1.CastCreateOrConnectWithoutBank_informationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastCreateOrConnectWithoutBank_informationInput_1.CastCreateOrConnectWithoutBank_informationInput)
], CastCreateNestedOneWithoutBank_informationInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastWhereUniqueInput_1.CastWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastWhereUniqueInput_1.CastWhereUniqueInput)
], CastCreateNestedOneWithoutBank_informationInput.prototype, "connect", void 0);
exports.CastCreateNestedOneWithoutBank_informationInput = CastCreateNestedOneWithoutBank_informationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CastCreateNestedOneWithoutBank_informationInput", {})
], CastCreateNestedOneWithoutBank_informationInput);
