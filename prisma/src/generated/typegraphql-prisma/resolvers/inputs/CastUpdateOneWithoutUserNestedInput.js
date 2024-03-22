"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastUpdateOneWithoutUserNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastCreateOrConnectWithoutUserInput_1 = require("../inputs/CastCreateOrConnectWithoutUserInput");
const CastUncheckedCreateWithoutUserInput_1 = require("../inputs/CastUncheckedCreateWithoutUserInput");
const CastUncheckedUpdateWithoutUserInput_1 = require("../inputs/CastUncheckedUpdateWithoutUserInput");
const CastUpsertWithoutUserInput_1 = require("../inputs/CastUpsertWithoutUserInput");
const CastWhereInput_1 = require("../inputs/CastWhereInput");
const CastWhereUniqueInput_1 = require("../inputs/CastWhereUniqueInput");
let CastUpdateOneWithoutUserNestedInput = class CastUpdateOneWithoutUserNestedInput {
};
exports.CastUpdateOneWithoutUserNestedInput = CastUpdateOneWithoutUserNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUncheckedCreateWithoutUserInput_1.CastUncheckedCreateWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastUncheckedCreateWithoutUserInput_1.CastUncheckedCreateWithoutUserInput)
], CastUpdateOneWithoutUserNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastCreateOrConnectWithoutUserInput_1.CastCreateOrConnectWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastCreateOrConnectWithoutUserInput_1.CastCreateOrConnectWithoutUserInput)
], CastUpdateOneWithoutUserNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUpsertWithoutUserInput_1.CastUpsertWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastUpsertWithoutUserInput_1.CastUpsertWithoutUserInput)
], CastUpdateOneWithoutUserNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastWhereInput_1.CastWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastWhereInput_1.CastWhereInput)
], CastUpdateOneWithoutUserNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastWhereInput_1.CastWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastWhereInput_1.CastWhereInput)
], CastUpdateOneWithoutUserNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastWhereUniqueInput_1.CastWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastWhereUniqueInput_1.CastWhereUniqueInput)
], CastUpdateOneWithoutUserNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUncheckedUpdateWithoutUserInput_1.CastUncheckedUpdateWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastUncheckedUpdateWithoutUserInput_1.CastUncheckedUpdateWithoutUserInput)
], CastUpdateOneWithoutUserNestedInput.prototype, "update", void 0);
exports.CastUpdateOneWithoutUserNestedInput = CastUpdateOneWithoutUserNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CastUpdateOneWithoutUserNestedInput", {})
], CastUpdateOneWithoutUserNestedInput);
