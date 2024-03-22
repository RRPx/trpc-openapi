"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastCreateOrConnectWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastUncheckedCreateWithoutUserInput_1 = require("../inputs/CastUncheckedCreateWithoutUserInput");
const CastWhereUniqueInput_1 = require("../inputs/CastWhereUniqueInput");
let CastCreateOrConnectWithoutUserInput = exports.CastCreateOrConnectWithoutUserInput = class CastCreateOrConnectWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastWhereUniqueInput_1.CastWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CastWhereUniqueInput_1.CastWhereUniqueInput)
], CastCreateOrConnectWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUncheckedCreateWithoutUserInput_1.CastUncheckedCreateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CastUncheckedCreateWithoutUserInput_1.CastUncheckedCreateWithoutUserInput)
], CastCreateOrConnectWithoutUserInput.prototype, "create", void 0);
exports.CastCreateOrConnectWithoutUserInput = CastCreateOrConnectWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CastCreateOrConnectWithoutUserInput", {})
], CastCreateOrConnectWithoutUserInput);
