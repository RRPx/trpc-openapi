"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastUncheckedCreateNestedManyWithoutUser_rankInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastCreateManyUser_rankInputEnvelope_1 = require("../inputs/CastCreateManyUser_rankInputEnvelope");
const CastCreateOrConnectWithoutUser_rankInput_1 = require("../inputs/CastCreateOrConnectWithoutUser_rankInput");
const CastCreateWithoutUser_rankInput_1 = require("../inputs/CastCreateWithoutUser_rankInput");
const CastWhereUniqueInput_1 = require("../inputs/CastWhereUniqueInput");
let CastUncheckedCreateNestedManyWithoutUser_rankInput = exports.CastUncheckedCreateNestedManyWithoutUser_rankInput = class CastUncheckedCreateNestedManyWithoutUser_rankInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CastCreateWithoutUser_rankInput_1.CastCreateWithoutUser_rankInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CastUncheckedCreateNestedManyWithoutUser_rankInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CastCreateOrConnectWithoutUser_rankInput_1.CastCreateOrConnectWithoutUser_rankInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CastUncheckedCreateNestedManyWithoutUser_rankInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastCreateManyUser_rankInputEnvelope_1.CastCreateManyUser_rankInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastCreateManyUser_rankInputEnvelope_1.CastCreateManyUser_rankInputEnvelope)
], CastUncheckedCreateNestedManyWithoutUser_rankInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CastWhereUniqueInput_1.CastWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CastUncheckedCreateNestedManyWithoutUser_rankInput.prototype, "connect", void 0);
exports.CastUncheckedCreateNestedManyWithoutUser_rankInput = CastUncheckedCreateNestedManyWithoutUser_rankInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CastUncheckedCreateNestedManyWithoutUser_rankInput", {})
], CastUncheckedCreateNestedManyWithoutUser_rankInput);
