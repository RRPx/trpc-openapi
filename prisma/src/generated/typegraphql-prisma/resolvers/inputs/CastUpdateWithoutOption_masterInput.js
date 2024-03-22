"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastUpdateWithoutOption_masterInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BankInformationUpdateManyWithoutCastNestedInput_1 = require("../inputs/BankInformationUpdateManyWithoutCastNestedInput");
const BoolFieldUpdateOperationsInput_1 = require("../inputs/BoolFieldUpdateOperationsInput");
const CastInformationUpdateOneWithoutCastNestedInput_1 = require("../inputs/CastInformationUpdateOneWithoutCastNestedInput");
const CastUpdatecosplay_contentInput_1 = require("../inputs/CastUpdatecosplay_contentInput");
const CastUpdatelanguage_typeInput_1 = require("../inputs/CastUpdatelanguage_typeInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumApprovalFieldUpdateOperationsInput_1 = require("../inputs/EnumApprovalFieldUpdateOperationsInput");
const FavoriteUpdateManyWithoutCastNestedInput_1 = require("../inputs/FavoriteUpdateManyWithoutCastNestedInput");
const NotificationUpdateManyWithoutCastNestedInput_1 = require("../inputs/NotificationUpdateManyWithoutCastNestedInput");
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const NullableEnumCupNumberFieldUpdateOperationsInput_1 = require("../inputs/NullableEnumCupNumberFieldUpdateOperationsInput");
const NullableEnumPriorityOrderFieldUpdateOperationsInput_1 = require("../inputs/NullableEnumPriorityOrderFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const ReservationUpdateManyWithoutCastNestedInput_1 = require("../inputs/ReservationUpdateManyWithoutCastNestedInput");
const ReviewUpdateManyWithoutCastNestedInput_1 = require("../inputs/ReviewUpdateManyWithoutCastNestedInput");
const ShiftManagementUpdateManyWithoutCastNestedInput_1 = require("../inputs/ShiftManagementUpdateManyWithoutCastNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserRankUpdateOneRequiredWithoutCastNestedInput_1 = require("../inputs/UserRankUpdateOneRequiredWithoutCastNestedInput");
const UserUpdateOneWithoutCastNestedInput_1 = require("../inputs/UserUpdateOneWithoutCastNestedInput");
let CastUpdateWithoutOption_masterInput = class CastUpdateWithoutOption_masterInput {
};
exports.CastUpdateWithoutOption_masterInput = CastUpdateWithoutOption_masterInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CastUpdateWithoutOption_masterInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CastUpdateWithoutOption_masterInput.prototype, "nick_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CastUpdateWithoutOption_masterInput.prototype, "telephone_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], CastUpdateWithoutOption_masterInput.prototype, "birthday", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CastUpdateWithoutOption_masterInput.prototype, "locate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUpdatelanguage_typeInput_1.CastUpdatelanguage_typeInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastUpdatelanguage_typeInput_1.CastUpdatelanguage_typeInput)
], CastUpdateWithoutOption_masterInput.prototype, "language_type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CastUpdateWithoutOption_masterInput.prototype, "language_other", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], CastUpdateWithoutOption_masterInput.prototype, "cosplay_guide", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUpdatecosplay_contentInput_1.CastUpdatecosplay_contentInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastUpdatecosplay_contentInput_1.CastUpdatecosplay_contentInput)
], CastUpdateWithoutOption_masterInput.prototype, "cosplay_content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CastUpdateWithoutOption_masterInput.prototype, "cosplay_other", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableEnumCupNumberFieldUpdateOperationsInput_1.NullableEnumCupNumberFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableEnumCupNumberFieldUpdateOperationsInput_1.NullableEnumCupNumberFieldUpdateOperationsInput)
], CastUpdateWithoutOption_masterInput.prototype, "cup_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CastUpdateWithoutOption_masterInput.prototype, "memo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], CastUpdateWithoutOption_masterInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableEnumPriorityOrderFieldUpdateOperationsInput_1.NullableEnumPriorityOrderFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableEnumPriorityOrderFieldUpdateOperationsInput_1.NullableEnumPriorityOrderFieldUpdateOperationsInput)
], CastUpdateWithoutOption_masterInput.prototype, "homepage_recommended_priority", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumApprovalFieldUpdateOperationsInput_1.EnumApprovalFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumApprovalFieldUpdateOperationsInput_1.EnumApprovalFieldUpdateOperationsInput)
], CastUpdateWithoutOption_masterInput.prototype, "profile_approval_by_admin", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CastUpdateWithoutOption_masterInput.prototype, "twitter_user_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CastUpdateWithoutOption_masterInput.prototype, "instagram_user_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], CastUpdateWithoutOption_masterInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], CastUpdateWithoutOption_masterInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneWithoutCastNestedInput_1.UserUpdateOneWithoutCastNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneWithoutCastNestedInput_1.UserUpdateOneWithoutCastNestedInput)
], CastUpdateWithoutOption_masterInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRankUpdateOneRequiredWithoutCastNestedInput_1.UserRankUpdateOneRequiredWithoutCastNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRankUpdateOneRequiredWithoutCastNestedInput_1.UserRankUpdateOneRequiredWithoutCastNestedInput)
], CastUpdateWithoutOption_masterInput.prototype, "user_rank", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FavoriteUpdateManyWithoutCastNestedInput_1.FavoriteUpdateManyWithoutCastNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FavoriteUpdateManyWithoutCastNestedInput_1.FavoriteUpdateManyWithoutCastNestedInput)
], CastUpdateWithoutOption_masterInput.prototype, "favorite", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationUpdateManyWithoutCastNestedInput_1.NotificationUpdateManyWithoutCastNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationUpdateManyWithoutCastNestedInput_1.NotificationUpdateManyWithoutCastNestedInput)
], CastUpdateWithoutOption_masterInput.prototype, "notification", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShiftManagementUpdateManyWithoutCastNestedInput_1.ShiftManagementUpdateManyWithoutCastNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShiftManagementUpdateManyWithoutCastNestedInput_1.ShiftManagementUpdateManyWithoutCastNestedInput)
], CastUpdateWithoutOption_masterInput.prototype, "shift_management", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewUpdateManyWithoutCastNestedInput_1.ReviewUpdateManyWithoutCastNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReviewUpdateManyWithoutCastNestedInput_1.ReviewUpdateManyWithoutCastNestedInput)
], CastUpdateWithoutOption_masterInput.prototype, "review", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastInformationUpdateOneWithoutCastNestedInput_1.CastInformationUpdateOneWithoutCastNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastInformationUpdateOneWithoutCastNestedInput_1.CastInformationUpdateOneWithoutCastNestedInput)
], CastUpdateWithoutOption_masterInput.prototype, "cast_information", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationUpdateManyWithoutCastNestedInput_1.ReservationUpdateManyWithoutCastNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationUpdateManyWithoutCastNestedInput_1.ReservationUpdateManyWithoutCastNestedInput)
], CastUpdateWithoutOption_masterInput.prototype, "reservation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BankInformationUpdateManyWithoutCastNestedInput_1.BankInformationUpdateManyWithoutCastNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BankInformationUpdateManyWithoutCastNestedInput_1.BankInformationUpdateManyWithoutCastNestedInput)
], CastUpdateWithoutOption_masterInput.prototype, "bank_information", void 0);
exports.CastUpdateWithoutOption_masterInput = CastUpdateWithoutOption_masterInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CastUpdateWithoutOption_masterInput", {})
], CastUpdateWithoutOption_masterInput);
