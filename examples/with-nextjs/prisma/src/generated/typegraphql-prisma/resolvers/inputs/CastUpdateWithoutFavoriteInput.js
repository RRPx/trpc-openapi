"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastUpdateWithoutFavoriteInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BankInformationUpdateManyWithoutCastNestedInput_1 = require("../inputs/BankInformationUpdateManyWithoutCastNestedInput");
const BoolFieldUpdateOperationsInput_1 = require("../inputs/BoolFieldUpdateOperationsInput");
const CastInformationUpdateOneWithoutCastNestedInput_1 = require("../inputs/CastInformationUpdateOneWithoutCastNestedInput");
const CastUpdatecosplay_contentInput_1 = require("../inputs/CastUpdatecosplay_contentInput");
const CastUpdatelanguage_typeInput_1 = require("../inputs/CastUpdatelanguage_typeInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumApprovalFieldUpdateOperationsInput_1 = require("../inputs/EnumApprovalFieldUpdateOperationsInput");
const NotificationUpdateManyWithoutCastNestedInput_1 = require("../inputs/NotificationUpdateManyWithoutCastNestedInput");
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const NullableEnumCupNumberFieldUpdateOperationsInput_1 = require("../inputs/NullableEnumCupNumberFieldUpdateOperationsInput");
const NullableEnumPriorityOrderFieldUpdateOperationsInput_1 = require("../inputs/NullableEnumPriorityOrderFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const OptionMasterUpdateManyWithoutCastNestedInput_1 = require("../inputs/OptionMasterUpdateManyWithoutCastNestedInput");
const ReservationUpdateManyWithoutCastNestedInput_1 = require("../inputs/ReservationUpdateManyWithoutCastNestedInput");
const ReviewUpdateManyWithoutCastNestedInput_1 = require("../inputs/ReviewUpdateManyWithoutCastNestedInput");
const ShiftManagementUpdateManyWithoutCastNestedInput_1 = require("../inputs/ShiftManagementUpdateManyWithoutCastNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserRankUpdateOneRequiredWithoutCastNestedInput_1 = require("../inputs/UserRankUpdateOneRequiredWithoutCastNestedInput");
const UserUpdateOneWithoutCastNestedInput_1 = require("../inputs/UserUpdateOneWithoutCastNestedInput");
let CastUpdateWithoutFavoriteInput = exports.CastUpdateWithoutFavoriteInput = class CastUpdateWithoutFavoriteInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CastUpdateWithoutFavoriteInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CastUpdateWithoutFavoriteInput.prototype, "nick_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CastUpdateWithoutFavoriteInput.prototype, "telephone_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], CastUpdateWithoutFavoriteInput.prototype, "birthday", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CastUpdateWithoutFavoriteInput.prototype, "locate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUpdatelanguage_typeInput_1.CastUpdatelanguage_typeInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastUpdatelanguage_typeInput_1.CastUpdatelanguage_typeInput)
], CastUpdateWithoutFavoriteInput.prototype, "language_type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CastUpdateWithoutFavoriteInput.prototype, "language_other", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], CastUpdateWithoutFavoriteInput.prototype, "cosplay_guide", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUpdatecosplay_contentInput_1.CastUpdatecosplay_contentInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastUpdatecosplay_contentInput_1.CastUpdatecosplay_contentInput)
], CastUpdateWithoutFavoriteInput.prototype, "cosplay_content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CastUpdateWithoutFavoriteInput.prototype, "cosplay_other", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableEnumCupNumberFieldUpdateOperationsInput_1.NullableEnumCupNumberFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableEnumCupNumberFieldUpdateOperationsInput_1.NullableEnumCupNumberFieldUpdateOperationsInput)
], CastUpdateWithoutFavoriteInput.prototype, "cup_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CastUpdateWithoutFavoriteInput.prototype, "memo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], CastUpdateWithoutFavoriteInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableEnumPriorityOrderFieldUpdateOperationsInput_1.NullableEnumPriorityOrderFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableEnumPriorityOrderFieldUpdateOperationsInput_1.NullableEnumPriorityOrderFieldUpdateOperationsInput)
], CastUpdateWithoutFavoriteInput.prototype, "homepage_recommended_priority", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumApprovalFieldUpdateOperationsInput_1.EnumApprovalFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumApprovalFieldUpdateOperationsInput_1.EnumApprovalFieldUpdateOperationsInput)
], CastUpdateWithoutFavoriteInput.prototype, "profile_approval_by_admin", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CastUpdateWithoutFavoriteInput.prototype, "twitter_user_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CastUpdateWithoutFavoriteInput.prototype, "instagram_user_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], CastUpdateWithoutFavoriteInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], CastUpdateWithoutFavoriteInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneWithoutCastNestedInput_1.UserUpdateOneWithoutCastNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneWithoutCastNestedInput_1.UserUpdateOneWithoutCastNestedInput)
], CastUpdateWithoutFavoriteInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRankUpdateOneRequiredWithoutCastNestedInput_1.UserRankUpdateOneRequiredWithoutCastNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRankUpdateOneRequiredWithoutCastNestedInput_1.UserRankUpdateOneRequiredWithoutCastNestedInput)
], CastUpdateWithoutFavoriteInput.prototype, "user_rank", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationUpdateManyWithoutCastNestedInput_1.NotificationUpdateManyWithoutCastNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationUpdateManyWithoutCastNestedInput_1.NotificationUpdateManyWithoutCastNestedInput)
], CastUpdateWithoutFavoriteInput.prototype, "notification", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OptionMasterUpdateManyWithoutCastNestedInput_1.OptionMasterUpdateManyWithoutCastNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OptionMasterUpdateManyWithoutCastNestedInput_1.OptionMasterUpdateManyWithoutCastNestedInput)
], CastUpdateWithoutFavoriteInput.prototype, "option_master", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShiftManagementUpdateManyWithoutCastNestedInput_1.ShiftManagementUpdateManyWithoutCastNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShiftManagementUpdateManyWithoutCastNestedInput_1.ShiftManagementUpdateManyWithoutCastNestedInput)
], CastUpdateWithoutFavoriteInput.prototype, "shift_management", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewUpdateManyWithoutCastNestedInput_1.ReviewUpdateManyWithoutCastNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReviewUpdateManyWithoutCastNestedInput_1.ReviewUpdateManyWithoutCastNestedInput)
], CastUpdateWithoutFavoriteInput.prototype, "review", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastInformationUpdateOneWithoutCastNestedInput_1.CastInformationUpdateOneWithoutCastNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastInformationUpdateOneWithoutCastNestedInput_1.CastInformationUpdateOneWithoutCastNestedInput)
], CastUpdateWithoutFavoriteInput.prototype, "cast_information", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationUpdateManyWithoutCastNestedInput_1.ReservationUpdateManyWithoutCastNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationUpdateManyWithoutCastNestedInput_1.ReservationUpdateManyWithoutCastNestedInput)
], CastUpdateWithoutFavoriteInput.prototype, "reservation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BankInformationUpdateManyWithoutCastNestedInput_1.BankInformationUpdateManyWithoutCastNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BankInformationUpdateManyWithoutCastNestedInput_1.BankInformationUpdateManyWithoutCastNestedInput)
], CastUpdateWithoutFavoriteInput.prototype, "bank_information", void 0);
exports.CastUpdateWithoutFavoriteInput = CastUpdateWithoutFavoriteInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CastUpdateWithoutFavoriteInput", {})
], CastUpdateWithoutFavoriteInput);
