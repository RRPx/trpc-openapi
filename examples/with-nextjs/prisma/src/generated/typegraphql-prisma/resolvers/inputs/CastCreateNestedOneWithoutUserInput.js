"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastCreateNestedOneWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastCreateOrConnectWithoutUserInput_1 = require("../inputs/CastCreateOrConnectWithoutUserInput");
const CastUncheckedCreateWithoutUserInput_1 = require("../inputs/CastUncheckedCreateWithoutUserInput");
const CastWhereUniqueInput_1 = require("../inputs/CastWhereUniqueInput");
let CastCreateNestedOneWithoutUserInput = exports.CastCreateNestedOneWithoutUserInput = class CastCreateNestedOneWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUncheckedCreateWithoutUserInput_1.CastUncheckedCreateWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastUncheckedCreateWithoutUserInput_1.CastUncheckedCreateWithoutUserInput)
], CastCreateNestedOneWithoutUserInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastCreateOrConnectWithoutUserInput_1.CastCreateOrConnectWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastCreateOrConnectWithoutUserInput_1.CastCreateOrConnectWithoutUserInput)
], CastCreateNestedOneWithoutUserInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastWhereUniqueInput_1.CastWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastWhereUniqueInput_1.CastWhereUniqueInput)
], CastCreateNestedOneWithoutUserInput.prototype, "connect", void 0);
exports.CastCreateNestedOneWithoutUserInput = CastCreateNestedOneWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CastCreateNestedOneWithoutUserInput", {})
], CastCreateNestedOneWithoutUserInput);
