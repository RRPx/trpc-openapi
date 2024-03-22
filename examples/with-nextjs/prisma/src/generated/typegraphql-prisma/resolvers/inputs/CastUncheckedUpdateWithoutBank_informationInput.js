"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastUncheckedUpdateWithoutBank_informationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
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
const ShiftManagementUncheckedUpdateManyWithoutCastNestedInput_1 = require("../inputs/ShiftManagementUncheckedUpdateManyWithoutCastNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUncheckedUpdateOneWithoutCastNestedInput_1 = require("../inputs/UserUncheckedUpdateOneWithoutCastNestedInput");
let CastUncheckedUpdateWithoutBank_informationInput = exports.CastUncheckedUpdateWithoutBank_informationInput = class CastUncheckedUpdateWithoutBank_informationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CastUncheckedUpdateWithoutBank_informationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CastUncheckedUpdateWithoutBank_informationInput.prototype, "nick_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CastUncheckedUpdateWithoutBank_informationInput.prototype, "telephone_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], CastUncheckedUpdateWithoutBank_informationInput.prototype, "birthday", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CastUncheckedUpdateWithoutBank_informationInput.prototype, "locate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUpdatelanguage_typeInput_1.CastUpdatelanguage_typeInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastUpdatelanguage_typeInput_1.CastUpdatelanguage_typeInput)
], CastUncheckedUpdateWithoutBank_informationInput.prototype, "language_type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CastUncheckedUpdateWithoutBank_informationInput.prototype, "language_other", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], CastUncheckedUpdateWithoutBank_informationInput.prototype, "cosplay_guide", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUpdatecosplay_contentInput_1.CastUpdatecosplay_contentInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastUpdatecosplay_contentInput_1.CastUpdatecosplay_contentInput)
], CastUncheckedUpdateWithoutBank_informationInput.prototype, "cosplay_content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CastUncheckedUpdateWithoutBank_informationInput.prototype, "cosplay_other", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableEnumCupNumberFieldUpdateOperationsInput_1.NullableEnumCupNumberFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableEnumCupNumberFieldUpdateOperationsInput_1.NullableEnumCupNumberFieldUpdateOperationsInput)
], CastUncheckedUpdateWithoutBank_informationInput.prototype, "cup_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CastUncheckedUpdateWithoutBank_informationInput.prototype, "memo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CastUncheckedUpdateWithoutBank_informationInput.prototype, "user_rank_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], CastUncheckedUpdateWithoutBank_informationInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableEnumPriorityOrderFieldUpdateOperationsInput_1.NullableEnumPriorityOrderFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableEnumPriorityOrderFieldUpdateOperationsInput_1.NullableEnumPriorityOrderFieldUpdateOperationsInput)
], CastUncheckedUpdateWithoutBank_informationInput.prototype, "homepage_recommended_priority", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumApprovalFieldUpdateOperationsInput_1.EnumApprovalFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumApprovalFieldUpdateOperationsInput_1.EnumApprovalFieldUpdateOperationsInput)
], CastUncheckedUpdateWithoutBank_informationInput.prototype, "profile_approval_by_admin", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CastUncheckedUpdateWithoutBank_informationInput.prototype, "twitter_user_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CastUncheckedUpdateWithoutBank_informationInput.prototype, "instagram_user_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], CastUncheckedUpdateWithoutBank_informationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], CastUncheckedUpdateWithoutBank_informationInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUncheckedUpdateOneWithoutCastNestedInput_1.UserUncheckedUpdateOneWithoutCastNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUncheckedUpdateOneWithoutCastNestedInput_1.UserUncheckedUpdateOneWithoutCastNestedInput)
], CastUncheckedUpdateWithoutBank_informationInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FavoriteUncheckedUpdateManyWithoutCastNestedInput_1.FavoriteUncheckedUpdateManyWithoutCastNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FavoriteUncheckedUpdateManyWithoutCastNestedInput_1.FavoriteUncheckedUpdateManyWithoutCastNestedInput)
], CastUncheckedUpdateWithoutBank_informationInput.prototype, "favorite", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationUncheckedUpdateManyWithoutCastNestedInput_1.NotificationUncheckedUpdateManyWithoutCastNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationUncheckedUpdateManyWithoutCastNestedInput_1.NotificationUncheckedUpdateManyWithoutCastNestedInput)
], CastUncheckedUpdateWithoutBank_informationInput.prototype, "notification", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OptionMasterUncheckedUpdateManyWithoutCastNestedInput_1.OptionMasterUncheckedUpdateManyWithoutCastNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OptionMasterUncheckedUpdateManyWithoutCastNestedInput_1.OptionMasterUncheckedUpdateManyWithoutCastNestedInput)
], CastUncheckedUpdateWithoutBank_informationInput.prototype, "option_master", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShiftManagementUncheckedUpdateManyWithoutCastNestedInput_1.ShiftManagementUncheckedUpdateManyWithoutCastNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShiftManagementUncheckedUpdateManyWithoutCastNestedInput_1.ShiftManagementUncheckedUpdateManyWithoutCastNestedInput)
], CastUncheckedUpdateWithoutBank_informationInput.prototype, "shift_management", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewUncheckedUpdateManyWithoutCastNestedInput_1.ReviewUncheckedUpdateManyWithoutCastNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReviewUncheckedUpdateManyWithoutCastNestedInput_1.ReviewUncheckedUpdateManyWithoutCastNestedInput)
], CastUncheckedUpdateWithoutBank_informationInput.prototype, "review", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastInformationUncheckedUpdateOneWithoutCastNestedInput_1.CastInformationUncheckedUpdateOneWithoutCastNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastInformationUncheckedUpdateOneWithoutCastNestedInput_1.CastInformationUncheckedUpdateOneWithoutCastNestedInput)
], CastUncheckedUpdateWithoutBank_informationInput.prototype, "cast_information", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationUncheckedUpdateManyWithoutCastNestedInput_1.ReservationUncheckedUpdateManyWithoutCastNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationUncheckedUpdateManyWithoutCastNestedInput_1.ReservationUncheckedUpdateManyWithoutCastNestedInput)
], CastUncheckedUpdateWithoutBank_informationInput.prototype, "reservation", void 0);
exports.CastUncheckedUpdateWithoutBank_informationInput = CastUncheckedUpdateWithoutBank_informationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CastUncheckedUpdateWithoutBank_informationInput", {})
], CastUncheckedUpdateWithoutBank_informationInput);
