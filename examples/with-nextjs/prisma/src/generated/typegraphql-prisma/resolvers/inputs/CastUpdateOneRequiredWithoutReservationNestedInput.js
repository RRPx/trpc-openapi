"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastUpdateOneRequiredWithoutReservationNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastCreateOrConnectWithoutReservationInput_1 = require("../inputs/CastCreateOrConnectWithoutReservationInput");
const CastUncheckedCreateWithoutReservationInput_1 = require("../inputs/CastUncheckedCreateWithoutReservationInput");
const CastUncheckedUpdateWithoutReservationInput_1 = require("../inputs/CastUncheckedUpdateWithoutReservationInput");
const CastUpsertWithoutReservationInput_1 = require("../inputs/CastUpsertWithoutReservationInput");
const CastWhereUniqueInput_1 = require("../inputs/CastWhereUniqueInput");
let CastUpdateOneRequiredWithoutReservationNestedInput = exports.CastUpdateOneRequiredWithoutReservationNestedInput = class CastUpdateOneRequiredWithoutReservationNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUncheckedCreateWithoutReservationInput_1.CastUncheckedCreateWithoutReservationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastUncheckedCreateWithoutReservationInput_1.CastUncheckedCreateWithoutReservationInput)
], CastUpdateOneRequiredWithoutReservationNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastCreateOrConnectWithoutReservationInput_1.CastCreateOrConnectWithoutReservationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastCreateOrConnectWithoutReservationInput_1.CastCreateOrConnectWithoutReservationInput)
], CastUpdateOneRequiredWithoutReservationNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUpsertWithoutReservationInput_1.CastUpsertWithoutReservationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastUpsertWithoutReservationInput_1.CastUpsertWithoutReservationInput)
], CastUpdateOneRequiredWithoutReservationNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastWhereUniqueInput_1.CastWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastWhereUniqueInput_1.CastWhereUniqueInput)
], CastUpdateOneRequiredWithoutReservationNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUncheckedUpdateWithoutReservationInput_1.CastUncheckedUpdateWithoutReservationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastUncheckedUpdateWithoutReservationInput_1.CastUncheckedUpdateWithoutReservationInput)
], CastUpdateOneRequiredWithoutReservationNestedInput.prototype, "update", void 0);
exports.CastUpdateOneRequiredWithoutReservationNestedInput = CastUpdateOneRequiredWithoutReservationNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CastUpdateOneRequiredWithoutReservationNestedInput", {})
], CastUpdateOneRequiredWithoutReservationNestedInput);
