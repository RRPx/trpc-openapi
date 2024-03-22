"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationUpdateOneWithoutShift_idNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReservationCreateOrConnectWithoutShift_idInput_1 = require("../inputs/ReservationCreateOrConnectWithoutShift_idInput");
const ReservationUncheckedCreateWithoutShift_idInput_1 = require("../inputs/ReservationUncheckedCreateWithoutShift_idInput");
const ReservationUncheckedUpdateWithoutShift_idInput_1 = require("../inputs/ReservationUncheckedUpdateWithoutShift_idInput");
const ReservationUpsertWithoutShift_idInput_1 = require("../inputs/ReservationUpsertWithoutShift_idInput");
const ReservationWhereInput_1 = require("../inputs/ReservationWhereInput");
const ReservationWhereUniqueInput_1 = require("../inputs/ReservationWhereUniqueInput");
let ReservationUpdateOneWithoutShift_idNestedInput = class ReservationUpdateOneWithoutShift_idNestedInput {
};
exports.ReservationUpdateOneWithoutShift_idNestedInput = ReservationUpdateOneWithoutShift_idNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationUncheckedCreateWithoutShift_idInput_1.ReservationUncheckedCreateWithoutShift_idInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationUncheckedCreateWithoutShift_idInput_1.ReservationUncheckedCreateWithoutShift_idInput)
], ReservationUpdateOneWithoutShift_idNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationCreateOrConnectWithoutShift_idInput_1.ReservationCreateOrConnectWithoutShift_idInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationCreateOrConnectWithoutShift_idInput_1.ReservationCreateOrConnectWithoutShift_idInput)
], ReservationUpdateOneWithoutShift_idNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationUpsertWithoutShift_idInput_1.ReservationUpsertWithoutShift_idInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationUpsertWithoutShift_idInput_1.ReservationUpsertWithoutShift_idInput)
], ReservationUpdateOneWithoutShift_idNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationWhereInput_1.ReservationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationWhereInput_1.ReservationWhereInput)
], ReservationUpdateOneWithoutShift_idNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationWhereInput_1.ReservationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationWhereInput_1.ReservationWhereInput)
], ReservationUpdateOneWithoutShift_idNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationWhereUniqueInput_1.ReservationWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationWhereUniqueInput_1.ReservationWhereUniqueInput)
], ReservationUpdateOneWithoutShift_idNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationUncheckedUpdateWithoutShift_idInput_1.ReservationUncheckedUpdateWithoutShift_idInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationUncheckedUpdateWithoutShift_idInput_1.ReservationUncheckedUpdateWithoutShift_idInput)
], ReservationUpdateOneWithoutShift_idNestedInput.prototype, "update", void 0);
exports.ReservationUpdateOneWithoutShift_idNestedInput = ReservationUpdateOneWithoutShift_idNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReservationUpdateOneWithoutShift_idNestedInput", {})
], ReservationUpdateOneWithoutShift_idNestedInput);
