"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastCreateOrConnectWithoutUser_rankInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastUncheckedCreateWithoutUser_rankInput_1 = require("../inputs/CastUncheckedCreateWithoutUser_rankInput");
const CastWhereUniqueInput_1 = require("../inputs/CastWhereUniqueInput");
let CastCreateOrConnectWithoutUser_rankInput = class CastCreateOrConnectWithoutUser_rankInput {
};
exports.CastCreateOrConnectWithoutUser_rankInput = CastCreateOrConnectWithoutUser_rankInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastWhereUniqueInput_1.CastWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CastWhereUniqueInput_1.CastWhereUniqueInput)
], CastCreateOrConnectWithoutUser_rankInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUncheckedCreateWithoutUser_rankInput_1.CastUncheckedCreateWithoutUser_rankInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CastUncheckedCreateWithoutUser_rankInput_1.CastUncheckedCreateWithoutUser_rankInput)
], CastCreateOrConnectWithoutUser_rankInput.prototype, "create", void 0);
exports.CastCreateOrConnectWithoutUser_rankInput = CastCreateOrConnectWithoutUser_rankInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CastCreateOrConnectWithoutUser_rankInput", {})
], CastCreateOrConnectWithoutUser_rankInput);
