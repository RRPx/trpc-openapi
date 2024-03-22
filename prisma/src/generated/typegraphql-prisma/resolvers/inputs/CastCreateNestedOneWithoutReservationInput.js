"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastCreateNestedOneWithoutReservationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastCreateOrConnectWithoutReservationInput_1 = require("../inputs/CastCreateOrConnectWithoutReservationInput");
const CastUncheckedCreateWithoutReservationInput_1 = require("../inputs/CastUncheckedCreateWithoutReservationInput");
const CastWhereUniqueInput_1 = require("../inputs/CastWhereUniqueInput");
let CastCreateNestedOneWithoutReservationInput = class CastCreateNestedOneWithoutReservationInput {
};
exports.CastCreateNestedOneWithoutReservationInput = CastCreateNestedOneWithoutReservationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUncheckedCreateWithoutReservationInput_1.CastUncheckedCreateWithoutReservationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastUncheckedCreateWithoutReservationInput_1.CastUncheckedCreateWithoutReservationInput)
], CastCreateNestedOneWithoutReservationInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastCreateOrConnectWithoutReservationInput_1.CastCreateOrConnectWithoutReservationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastCreateOrConnectWithoutReservationInput_1.CastCreateOrConnectWithoutReservationInput)
], CastCreateNestedOneWithoutReservationInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastWhereUniqueInput_1.CastWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastWhereUniqueInput_1.CastWhereUniqueInput)
], CastCreateNestedOneWithoutReservationInput.prototype, "connect", void 0);
exports.CastCreateNestedOneWithoutReservationInput = CastCreateNestedOneWithoutReservationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CastCreateNestedOneWithoutReservationInput", {})
], CastCreateNestedOneWithoutReservationInput);
