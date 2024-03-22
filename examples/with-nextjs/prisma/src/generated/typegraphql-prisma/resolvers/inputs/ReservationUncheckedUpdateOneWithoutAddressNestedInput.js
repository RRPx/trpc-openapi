"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationUncheckedUpdateOneWithoutAddressNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReservationCreateOrConnectWithoutAddressInput_1 = require("../inputs/ReservationCreateOrConnectWithoutAddressInput");
const ReservationUncheckedCreateWithoutAddressInput_1 = require("../inputs/ReservationUncheckedCreateWithoutAddressInput");
const ReservationUncheckedUpdateWithoutAddressInput_1 = require("../inputs/ReservationUncheckedUpdateWithoutAddressInput");
const ReservationUpsertWithoutAddressInput_1 = require("../inputs/ReservationUpsertWithoutAddressInput");
const ReservationWhereInput_1 = require("../inputs/ReservationWhereInput");
const ReservationWhereUniqueInput_1 = require("../inputs/ReservationWhereUniqueInput");
let ReservationUncheckedUpdateOneWithoutAddressNestedInput = exports.ReservationUncheckedUpdateOneWithoutAddressNestedInput = class ReservationUncheckedUpdateOneWithoutAddressNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationUncheckedCreateWithoutAddressInput_1.ReservationUncheckedCreateWithoutAddressInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationUncheckedCreateWithoutAddressInput_1.ReservationUncheckedCreateWithoutAddressInput)
], ReservationUncheckedUpdateOneWithoutAddressNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationCreateOrConnectWithoutAddressInput_1.ReservationCreateOrConnectWithoutAddressInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationCreateOrConnectWithoutAddressInput_1.ReservationCreateOrConnectWithoutAddressInput)
], ReservationUncheckedUpdateOneWithoutAddressNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationUpsertWithoutAddressInput_1.ReservationUpsertWithoutAddressInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationUpsertWithoutAddressInput_1.ReservationUpsertWithoutAddressInput)
], ReservationUncheckedUpdateOneWithoutAddressNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationWhereInput_1.ReservationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationWhereInput_1.ReservationWhereInput)
], ReservationUncheckedUpdateOneWithoutAddressNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationWhereInput_1.ReservationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationWhereInput_1.ReservationWhereInput)
], ReservationUncheckedUpdateOneWithoutAddressNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationWhereUniqueInput_1.ReservationWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationWhereUniqueInput_1.ReservationWhereUniqueInput)
], ReservationUncheckedUpdateOneWithoutAddressNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationUncheckedUpdateWithoutAddressInput_1.ReservationUncheckedUpdateWithoutAddressInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationUncheckedUpdateWithoutAddressInput_1.ReservationUncheckedUpdateWithoutAddressInput)
], ReservationUncheckedUpdateOneWithoutAddressNestedInput.prototype, "update", void 0);
exports.ReservationUncheckedUpdateOneWithoutAddressNestedInput = ReservationUncheckedUpdateOneWithoutAddressNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReservationUncheckedUpdateOneWithoutAddressNestedInput", {})
], ReservationUncheckedUpdateOneWithoutAddressNestedInput);
