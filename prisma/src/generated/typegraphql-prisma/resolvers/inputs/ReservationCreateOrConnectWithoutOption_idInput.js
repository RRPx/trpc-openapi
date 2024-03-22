"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationCreateOrConnectWithoutOption_idInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReservationUncheckedCreateWithoutOption_idInput_1 = require("../inputs/ReservationUncheckedCreateWithoutOption_idInput");
const ReservationWhereUniqueInput_1 = require("../inputs/ReservationWhereUniqueInput");
let ReservationCreateOrConnectWithoutOption_idInput = class ReservationCreateOrConnectWithoutOption_idInput {
};
exports.ReservationCreateOrConnectWithoutOption_idInput = ReservationCreateOrConnectWithoutOption_idInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationWhereUniqueInput_1.ReservationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReservationWhereUniqueInput_1.ReservationWhereUniqueInput)
], ReservationCreateOrConnectWithoutOption_idInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationUncheckedCreateWithoutOption_idInput_1.ReservationUncheckedCreateWithoutOption_idInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReservationUncheckedCreateWithoutOption_idInput_1.ReservationUncheckedCreateWithoutOption_idInput)
], ReservationCreateOrConnectWithoutOption_idInput.prototype, "create", void 0);
exports.ReservationCreateOrConnectWithoutOption_idInput = ReservationCreateOrConnectWithoutOption_idInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReservationCreateOrConnectWithoutOption_idInput", {})
], ReservationCreateOrConnectWithoutOption_idInput);
