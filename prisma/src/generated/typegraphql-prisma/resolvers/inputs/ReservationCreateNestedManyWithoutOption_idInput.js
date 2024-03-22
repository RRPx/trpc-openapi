"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationCreateNestedManyWithoutOption_idInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReservationCreateOrConnectWithoutOption_idInput_1 = require("../inputs/ReservationCreateOrConnectWithoutOption_idInput");
const ReservationCreateWithoutOption_idInput_1 = require("../inputs/ReservationCreateWithoutOption_idInput");
const ReservationWhereUniqueInput_1 = require("../inputs/ReservationWhereUniqueInput");
let ReservationCreateNestedManyWithoutOption_idInput = class ReservationCreateNestedManyWithoutOption_idInput {
};
exports.ReservationCreateNestedManyWithoutOption_idInput = ReservationCreateNestedManyWithoutOption_idInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReservationCreateWithoutOption_idInput_1.ReservationCreateWithoutOption_idInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReservationCreateNestedManyWithoutOption_idInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReservationCreateOrConnectWithoutOption_idInput_1.ReservationCreateOrConnectWithoutOption_idInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReservationCreateNestedManyWithoutOption_idInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReservationWhereUniqueInput_1.ReservationWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReservationCreateNestedManyWithoutOption_idInput.prototype, "connect", void 0);
exports.ReservationCreateNestedManyWithoutOption_idInput = ReservationCreateNestedManyWithoutOption_idInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReservationCreateNestedManyWithoutOption_idInput", {})
], ReservationCreateNestedManyWithoutOption_idInput);
