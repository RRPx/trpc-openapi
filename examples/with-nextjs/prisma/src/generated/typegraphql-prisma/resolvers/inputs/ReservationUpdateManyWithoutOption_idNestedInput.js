"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationUpdateManyWithoutOption_idNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReservationCreateOrConnectWithoutOption_idInput_1 = require("../inputs/ReservationCreateOrConnectWithoutOption_idInput");
const ReservationCreateWithoutOption_idInput_1 = require("../inputs/ReservationCreateWithoutOption_idInput");
const ReservationScalarWhereInput_1 = require("../inputs/ReservationScalarWhereInput");
const ReservationUpdateManyWithWhereWithoutOption_idInput_1 = require("../inputs/ReservationUpdateManyWithWhereWithoutOption_idInput");
const ReservationUpdateWithWhereUniqueWithoutOption_idInput_1 = require("../inputs/ReservationUpdateWithWhereUniqueWithoutOption_idInput");
const ReservationUpsertWithWhereUniqueWithoutOption_idInput_1 = require("../inputs/ReservationUpsertWithWhereUniqueWithoutOption_idInput");
const ReservationWhereUniqueInput_1 = require("../inputs/ReservationWhereUniqueInput");
let ReservationUpdateManyWithoutOption_idNestedInput = exports.ReservationUpdateManyWithoutOption_idNestedInput = class ReservationUpdateManyWithoutOption_idNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReservationCreateWithoutOption_idInput_1.ReservationCreateWithoutOption_idInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReservationUpdateManyWithoutOption_idNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReservationCreateOrConnectWithoutOption_idInput_1.ReservationCreateOrConnectWithoutOption_idInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReservationUpdateManyWithoutOption_idNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReservationUpsertWithWhereUniqueWithoutOption_idInput_1.ReservationUpsertWithWhereUniqueWithoutOption_idInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReservationUpdateManyWithoutOption_idNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReservationWhereUniqueInput_1.ReservationWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReservationUpdateManyWithoutOption_idNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReservationWhereUniqueInput_1.ReservationWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReservationUpdateManyWithoutOption_idNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReservationWhereUniqueInput_1.ReservationWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReservationUpdateManyWithoutOption_idNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReservationWhereUniqueInput_1.ReservationWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReservationUpdateManyWithoutOption_idNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReservationUpdateWithWhereUniqueWithoutOption_idInput_1.ReservationUpdateWithWhereUniqueWithoutOption_idInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReservationUpdateManyWithoutOption_idNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReservationUpdateManyWithWhereWithoutOption_idInput_1.ReservationUpdateManyWithWhereWithoutOption_idInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReservationUpdateManyWithoutOption_idNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReservationScalarWhereInput_1.ReservationScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReservationUpdateManyWithoutOption_idNestedInput.prototype, "deleteMany", void 0);
exports.ReservationUpdateManyWithoutOption_idNestedInput = ReservationUpdateManyWithoutOption_idNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReservationUpdateManyWithoutOption_idNestedInput", {})
], ReservationUpdateManyWithoutOption_idNestedInput);
