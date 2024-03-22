"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationCreateOrConnectWithoutShift_idInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReservationUncheckedCreateWithoutShift_idInput_1 = require("../inputs/ReservationUncheckedCreateWithoutShift_idInput");
const ReservationWhereUniqueInput_1 = require("../inputs/ReservationWhereUniqueInput");
let ReservationCreateOrConnectWithoutShift_idInput = class ReservationCreateOrConnectWithoutShift_idInput {
};
exports.ReservationCreateOrConnectWithoutShift_idInput = ReservationCreateOrConnectWithoutShift_idInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationWhereUniqueInput_1.ReservationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReservationWhereUniqueInput_1.ReservationWhereUniqueInput)
], ReservationCreateOrConnectWithoutShift_idInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationUncheckedCreateWithoutShift_idInput_1.ReservationUncheckedCreateWithoutShift_idInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReservationUncheckedCreateWithoutShift_idInput_1.ReservationUncheckedCreateWithoutShift_idInput)
], ReservationCreateOrConnectWithoutShift_idInput.prototype, "create", void 0);
exports.ReservationCreateOrConnectWithoutShift_idInput = ReservationCreateOrConnectWithoutShift_idInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReservationCreateOrConnectWithoutShift_idInput", {})
], ReservationCreateOrConnectWithoutShift_idInput);
