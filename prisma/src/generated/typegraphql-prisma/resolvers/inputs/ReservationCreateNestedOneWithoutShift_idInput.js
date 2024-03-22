"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationCreateNestedOneWithoutShift_idInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReservationCreateOrConnectWithoutShift_idInput_1 = require("../inputs/ReservationCreateOrConnectWithoutShift_idInput");
const ReservationUncheckedCreateWithoutShift_idInput_1 = require("../inputs/ReservationUncheckedCreateWithoutShift_idInput");
const ReservationWhereUniqueInput_1 = require("../inputs/ReservationWhereUniqueInput");
let ReservationCreateNestedOneWithoutShift_idInput = class ReservationCreateNestedOneWithoutShift_idInput {
};
exports.ReservationCreateNestedOneWithoutShift_idInput = ReservationCreateNestedOneWithoutShift_idInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationUncheckedCreateWithoutShift_idInput_1.ReservationUncheckedCreateWithoutShift_idInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationUncheckedCreateWithoutShift_idInput_1.ReservationUncheckedCreateWithoutShift_idInput)
], ReservationCreateNestedOneWithoutShift_idInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationCreateOrConnectWithoutShift_idInput_1.ReservationCreateOrConnectWithoutShift_idInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationCreateOrConnectWithoutShift_idInput_1.ReservationCreateOrConnectWithoutShift_idInput)
], ReservationCreateNestedOneWithoutShift_idInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationWhereUniqueInput_1.ReservationWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationWhereUniqueInput_1.ReservationWhereUniqueInput)
], ReservationCreateNestedOneWithoutShift_idInput.prototype, "connect", void 0);
exports.ReservationCreateNestedOneWithoutShift_idInput = ReservationCreateNestedOneWithoutShift_idInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReservationCreateNestedOneWithoutShift_idInput", {})
], ReservationCreateNestedOneWithoutShift_idInput);
