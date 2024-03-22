"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationUpdateOneRequiredWithoutChat_roomNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReservationCreateOrConnectWithoutChat_roomInput_1 = require("../inputs/ReservationCreateOrConnectWithoutChat_roomInput");
const ReservationUncheckedCreateWithoutChat_roomInput_1 = require("../inputs/ReservationUncheckedCreateWithoutChat_roomInput");
const ReservationUncheckedUpdateWithoutChat_roomInput_1 = require("../inputs/ReservationUncheckedUpdateWithoutChat_roomInput");
const ReservationUpsertWithoutChat_roomInput_1 = require("../inputs/ReservationUpsertWithoutChat_roomInput");
const ReservationWhereUniqueInput_1 = require("../inputs/ReservationWhereUniqueInput");
let ReservationUpdateOneRequiredWithoutChat_roomNestedInput = class ReservationUpdateOneRequiredWithoutChat_roomNestedInput {
};
exports.ReservationUpdateOneRequiredWithoutChat_roomNestedInput = ReservationUpdateOneRequiredWithoutChat_roomNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationUncheckedCreateWithoutChat_roomInput_1.ReservationUncheckedCreateWithoutChat_roomInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationUncheckedCreateWithoutChat_roomInput_1.ReservationUncheckedCreateWithoutChat_roomInput)
], ReservationUpdateOneRequiredWithoutChat_roomNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationCreateOrConnectWithoutChat_roomInput_1.ReservationCreateOrConnectWithoutChat_roomInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationCreateOrConnectWithoutChat_roomInput_1.ReservationCreateOrConnectWithoutChat_roomInput)
], ReservationUpdateOneRequiredWithoutChat_roomNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationUpsertWithoutChat_roomInput_1.ReservationUpsertWithoutChat_roomInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationUpsertWithoutChat_roomInput_1.ReservationUpsertWithoutChat_roomInput)
], ReservationUpdateOneRequiredWithoutChat_roomNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationWhereUniqueInput_1.ReservationWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationWhereUniqueInput_1.ReservationWhereUniqueInput)
], ReservationUpdateOneRequiredWithoutChat_roomNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationUncheckedUpdateWithoutChat_roomInput_1.ReservationUncheckedUpdateWithoutChat_roomInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationUncheckedUpdateWithoutChat_roomInput_1.ReservationUncheckedUpdateWithoutChat_roomInput)
], ReservationUpdateOneRequiredWithoutChat_roomNestedInput.prototype, "update", void 0);
exports.ReservationUpdateOneRequiredWithoutChat_roomNestedInput = ReservationUpdateOneRequiredWithoutChat_roomNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReservationUpdateOneRequiredWithoutChat_roomNestedInput", {})
], ReservationUpdateOneRequiredWithoutChat_roomNestedInput);
