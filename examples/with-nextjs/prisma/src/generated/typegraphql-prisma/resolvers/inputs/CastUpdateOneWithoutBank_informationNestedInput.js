"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastUpdateOneWithoutBank_informationNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastCreateOrConnectWithoutBank_informationInput_1 = require("../inputs/CastCreateOrConnectWithoutBank_informationInput");
const CastUncheckedCreateWithoutBank_informationInput_1 = require("../inputs/CastUncheckedCreateWithoutBank_informationInput");
const CastUncheckedUpdateWithoutBank_informationInput_1 = require("../inputs/CastUncheckedUpdateWithoutBank_informationInput");
const CastUpsertWithoutBank_informationInput_1 = require("../inputs/CastUpsertWithoutBank_informationInput");
const CastWhereInput_1 = require("../inputs/CastWhereInput");
const CastWhereUniqueInput_1 = require("../inputs/CastWhereUniqueInput");
let CastUpdateOneWithoutBank_informationNestedInput = exports.CastUpdateOneWithoutBank_informationNestedInput = class CastUpdateOneWithoutBank_informationNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUncheckedCreateWithoutBank_informationInput_1.CastUncheckedCreateWithoutBank_informationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastUncheckedCreateWithoutBank_informationInput_1.CastUncheckedCreateWithoutBank_informationInput)
], CastUpdateOneWithoutBank_informationNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastCreateOrConnectWithoutBank_informationInput_1.CastCreateOrConnectWithoutBank_informationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastCreateOrConnectWithoutBank_informationInput_1.CastCreateOrConnectWithoutBank_informationInput)
], CastUpdateOneWithoutBank_informationNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUpsertWithoutBank_informationInput_1.CastUpsertWithoutBank_informationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastUpsertWithoutBank_informationInput_1.CastUpsertWithoutBank_informationInput)
], CastUpdateOneWithoutBank_informationNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastWhereInput_1.CastWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastWhereInput_1.CastWhereInput)
], CastUpdateOneWithoutBank_informationNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastWhereInput_1.CastWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastWhereInput_1.CastWhereInput)
], CastUpdateOneWithoutBank_informationNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastWhereUniqueInput_1.CastWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastWhereUniqueInput_1.CastWhereUniqueInput)
], CastUpdateOneWithoutBank_informationNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUncheckedUpdateWithoutBank_informationInput_1.CastUncheckedUpdateWithoutBank_informationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastUncheckedUpdateWithoutBank_informationInput_1.CastUncheckedUpdateWithoutBank_informationInput)
], CastUpdateOneWithoutBank_informationNestedInput.prototype, "update", void 0);
exports.CastUpdateOneWithoutBank_informationNestedInput = CastUpdateOneWithoutBank_informationNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CastUpdateOneWithoutBank_informationNestedInput", {})
], CastUpdateOneWithoutBank_informationNestedInput);
