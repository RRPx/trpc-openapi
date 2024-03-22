"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastUncheckedUpdateWithoutShift_managementInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BankInformationUncheckedUpdateManyWithoutCastNestedInput_1 = require("../inputs/BankInformationUncheckedUpdateManyWithoutCastNestedInput");
const BoolFieldUpdateOperationsInput_1 = require("../inputs/BoolFieldUpdateOperationsInput");
const CastInformationUncheckedUpdateOneWithoutCastNestedInput_1 = require("../inputs/CastInformationUncheckedUpdateOneWithoutCastNestedInput");
const CastUpdatecosplay_contentInput_1 = require("../inputs/CastUpdatecosplay_contentInput");
const CastUpdatelanguage_typeInput_1 = require("../inputs/CastUpdatelanguage_typeInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumApprovalFieldUpdateOperationsInput_1 = require("../inputs/EnumApprovalFieldUpdateOperationsInput");
const FavoriteUncheckedUpdateManyWithoutCastNestedInput_1 = require("../inputs/FavoriteUncheckedUpdateManyWithoutCastNestedInput");
const NotificationUncheckedUpdateManyWithoutCastNestedInput_1 = require("../inputs/NotificationUncheckedUpdateManyWithoutCastNestedInput");
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const NullableEnumCupNumberFieldUpdateOperationsInput_1 = require("../inputs/NullableEnumCupNumberFieldUpdateOperationsInput");
const NullableEnumPriorityOrderFieldUpdateOperationsInput_1 = require("../inputs/NullableEnumPriorityOrderFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const OptionMasterUncheckedUpdateManyWithoutCastNestedInput_1 = require("../inputs/OptionMasterUncheckedUpdateManyWithoutCastNestedInput");
const ReservationUncheckedUpdateManyWithoutCastNestedInput_1 = require("../inputs/ReservationUncheckedUpdateManyWithoutCastNestedInput");
const ReviewUncheckedUpdateManyWithoutCastNestedInput_1 = require("../inputs/ReviewUncheckedUpdateManyWithoutCastNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUncheckedUpdateOneWithoutCastNestedInput_1 = require("../inputs/UserUncheckedUpdateOneWithoutCastNestedInput");
let CastUncheckedUpdateWithoutShift_managementInput = class CastUncheckedUpdateWithoutShift_managementInput {
};
exports.CastUncheckedUpdateWithoutShift_managementInput = CastUncheckedUpdateWithoutShift_managementInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CastUncheckedUpdateWithoutShift_managementInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CastUncheckedUpdateWithoutShift_managementInput.prototype, "nick_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CastUncheckedUpdateWithoutShift_managementInput.prototype, "telephone_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], CastUncheckedUpdateWithoutShift_managementInput.prototype, "birthday", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CastUncheckedUpdateWithoutShift_managementInput.prototype, "locate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUpdatelanguage_typeInput_1.CastUpdatelanguage_typeInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastUpdatelanguage_typeInput_1.CastUpdatelanguage_typeInput)
], CastUncheckedUpdateWithoutShift_managementInput.prototype, "language_type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CastUncheckedUpdateWithoutShift_managementInput.prototype, "language_other", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], CastUncheckedUpdateWithoutShift_managementInput.prototype, "cosplay_guide", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUpdatecosplay_contentInput_1.CastUpdatecosplay_contentInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastUpdatecosplay_contentInput_1.CastUpdatecosplay_contentInput)
], CastUncheckedUpdateWithoutShift_managementInput.prototype, "cosplay_content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CastUncheckedUpdateWithoutShift_managementInput.prototype, "cosplay_other", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableEnumCupNumberFieldUpdateOperationsInput_1.NullableEnumCupNumberFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableEnumCupNumberFieldUpdateOperationsInput_1.NullableEnumCupNumberFieldUpdateOperationsInput)
], CastUncheckedUpdateWithoutShift_managementInput.prototype, "cup_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CastUncheckedUpdateWithoutShift_managementInput.prototype, "memo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CastUncheckedUpdateWithoutShift_managementInput.prototype, "user_rank_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], CastUncheckedUpdateWithoutShift_managementInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableEnumPriorityOrderFieldUpdateOperationsInput_1.NullableEnumPriorityOrderFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableEnumPriorityOrderFieldUpdateOperationsInput_1.NullableEnumPriorityOrderFieldUpdateOperationsInput)
], CastUncheckedUpdateWithoutShift_managementInput.prototype, "homepage_recommended_priority", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumApprovalFieldUpdateOperationsInput_1.EnumApprovalFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumApprovalFieldUpdateOperationsInput_1.EnumApprovalFieldUpdateOperationsInput)
], CastUncheckedUpdateWithoutShift_managementInput.prototype, "profile_approval_by_admin", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CastUncheckedUpdateWithoutShift_managementInput.prototype, "twitter_user_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CastUncheckedUpdateWithoutShift_managementInput.prototype, "instagram_user_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], CastUncheckedUpdateWithoutShift_managementInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], CastUncheckedUpdateWithoutShift_managementInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUncheckedUpdateOneWithoutCastNestedInput_1.UserUncheckedUpdateOneWithoutCastNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUncheckedUpdateOneWithoutCastNestedInput_1.UserUncheckedUpdateOneWithoutCastNestedInput)
], CastUncheckedUpdateWithoutShift_managementInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FavoriteUncheckedUpdateManyWithoutCastNestedInput_1.FavoriteUncheckedUpdateManyWithoutCastNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FavoriteUncheckedUpdateManyWithoutCastNestedInput_1.FavoriteUncheckedUpdateManyWithoutCastNestedInput)
], CastUncheckedUpdateWithoutShift_managementInput.prototype, "favorite", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationUncheckedUpdateManyWithoutCastNestedInput_1.NotificationUncheckedUpdateManyWithoutCastNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationUncheckedUpdateManyWithoutCastNestedInput_1.NotificationUncheckedUpdateManyWithoutCastNestedInput)
], CastUncheckedUpdateWithoutShift_managementInput.prototype, "notification", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OptionMasterUncheckedUpdateManyWithoutCastNestedInput_1.OptionMasterUncheckedUpdateManyWithoutCastNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OptionMasterUncheckedUpdateManyWithoutCastNestedInput_1.OptionMasterUncheckedUpdateManyWithoutCastNestedInput)
], CastUncheckedUpdateWithoutShift_managementInput.prototype, "option_master", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewUncheckedUpdateManyWithoutCastNestedInput_1.ReviewUncheckedUpdateManyWithoutCastNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReviewUncheckedUpdateManyWithoutCastNestedInput_1.ReviewUncheckedUpdateManyWithoutCastNestedInput)
], CastUncheckedUpdateWithoutShift_managementInput.prototype, "review", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastInformationUncheckedUpdateOneWithoutCastNestedInput_1.CastInformationUncheckedUpdateOneWithoutCastNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastInformationUncheckedUpdateOneWithoutCastNestedInput_1.CastInformationUncheckedUpdateOneWithoutCastNestedInput)
], CastUncheckedUpdateWithoutShift_managementInput.prototype, "cast_information", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationUncheckedUpdateManyWithoutCastNestedInput_1.ReservationUncheckedUpdateManyWithoutCastNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationUncheckedUpdateManyWithoutCastNestedInput_1.ReservationUncheckedUpdateManyWithoutCastNestedInput)
], CastUncheckedUpdateWithoutShift_managementInput.prototype, "reservation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BankInformationUncheckedUpdateManyWithoutCastNestedInput_1.BankInformationUncheckedUpdateManyWithoutCastNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BankInformationUncheckedUpdateManyWithoutCastNestedInput_1.BankInformationUncheckedUpdateManyWithoutCastNestedInput)
], CastUncheckedUpdateWithoutShift_managementInput.prototype, "bank_information", void 0);
exports.CastUncheckedUpdateWithoutShift_managementInput = CastUncheckedUpdateWithoutShift_managementInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CastUncheckedUpdateWithoutShift_managementInput", {})
], CastUncheckedUpdateWithoutShift_managementInput);
