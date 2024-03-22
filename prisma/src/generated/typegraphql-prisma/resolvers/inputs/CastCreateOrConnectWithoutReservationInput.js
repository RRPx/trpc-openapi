"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastCreateOrConnectWithoutReservationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastUncheckedCreateWithoutReservationInput_1 = require("../inputs/CastUncheckedCreateWithoutReservationInput");
const CastWhereUniqueInput_1 = require("../inputs/CastWhereUniqueInput");
let CastCreateOrConnectWithoutReservationInput = class CastCreateOrConnectWithoutReservationInput {
};
exports.CastCreateOrConnectWithoutReservationInput = CastCreateOrConnectWithoutReservationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastWhereUniqueInput_1.CastWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CastWhereUniqueInput_1.CastWhereUniqueInput)
], CastCreateOrConnectWithoutReservationInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUncheckedCreateWithoutReservationInput_1.CastUncheckedCreateWithoutReservationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CastUncheckedCreateWithoutReservationInput_1.CastUncheckedCreateWithoutReservationInput)
], CastCreateOrConnectWithoutReservationInput.prototype, "create", void 0);
exports.CastCreateOrConnectWithoutReservationInput = CastCreateOrConnectWithoutReservationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CastCreateOrConnectWithoutReservationInput", {})
], CastCreateOrConnectWithoutReservationInput);
