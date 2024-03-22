"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationUncheckedCreateNestedManyWithoutOption_idInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReservationCreateOrConnectWithoutOption_idInput_1 = require("../inputs/ReservationCreateOrConnectWithoutOption_idInput");
const ReservationCreateWithoutOption_idInput_1 = require("../inputs/ReservationCreateWithoutOption_idInput");
const ReservationWhereUniqueInput_1 = require("../inputs/ReservationWhereUniqueInput");
let ReservationUncheckedCreateNestedManyWithoutOption_idInput = exports.ReservationUncheckedCreateNestedManyWithoutOption_idInput = class ReservationUncheckedCreateNestedManyWithoutOption_idInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReservationCreateWithoutOption_idInput_1.ReservationCreateWithoutOption_idInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReservationUncheckedCreateNestedManyWithoutOption_idInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReservationCreateOrConnectWithoutOption_idInput_1.ReservationCreateOrConnectWithoutOption_idInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReservationUncheckedCreateNestedManyWithoutOption_idInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReservationWhereUniqueInput_1.ReservationWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReservationUncheckedCreateNestedManyWithoutOption_idInput.prototype, "connect", void 0);
exports.ReservationUncheckedCreateNestedManyWithoutOption_idInput = ReservationUncheckedCreateNestedManyWithoutOption_idInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReservationUncheckedCreateNestedManyWithoutOption_idInput", {})
], ReservationUncheckedCreateNestedManyWithoutOption_idInput);
