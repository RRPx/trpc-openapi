"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastUncheckedCreateWithoutUser_rankInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BankInformationUncheckedCreateNestedManyWithoutCastInput_1 = require("../inputs/BankInformationUncheckedCreateNestedManyWithoutCastInput");
const CastCreatecosplay_contentInput_1 = require("../inputs/CastCreatecosplay_contentInput");
const CastCreatelanguage_typeInput_1 = require("../inputs/CastCreatelanguage_typeInput");
const CastInformationUncheckedCreateNestedOneWithoutCastInput_1 = require("../inputs/CastInformationUncheckedCreateNestedOneWithoutCastInput");
const FavoriteUncheckedCreateNestedManyWithoutCastInput_1 = require("../inputs/FavoriteUncheckedCreateNestedManyWithoutCastInput");
const NotificationUncheckedCreateNestedManyWithoutCastInput_1 = require("../inputs/NotificationUncheckedCreateNestedManyWithoutCastInput");
const OptionMasterUncheckedCreateNestedManyWithoutCastInput_1 = require("../inputs/OptionMasterUncheckedCreateNestedManyWithoutCastInput");
const ReservationUncheckedCreateNestedManyWithoutCastInput_1 = require("../inputs/ReservationUncheckedCreateNestedManyWithoutCastInput");
const ReviewUncheckedCreateNestedManyWithoutCastInput_1 = require("../inputs/ReviewUncheckedCreateNestedManyWithoutCastInput");
const ShiftManagementUncheckedCreateNestedManyWithoutCastInput_1 = require("../inputs/ShiftManagementUncheckedCreateNestedManyWithoutCastInput");
const UserUncheckedCreateNestedOneWithoutCastInput_1 = require("../inputs/UserUncheckedCreateNestedOneWithoutCastInput");
const Approval_1 = require("../../enums/Approval");
const CupNumber_1 = require("../../enums/CupNumber");
const PriorityOrder_1 = require("../../enums/PriorityOrder");
let CastUncheckedCreateWithoutUser_rankInput = class CastUncheckedCreateWithoutUser_rankInput {
};
exports.CastUncheckedCreateWithoutUser_rankInput = CastUncheckedCreateWithoutUser_rankInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CastUncheckedCreateWithoutUser_rankInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CastUncheckedCreateWithoutUser_rankInput.prototype, "nick_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CastUncheckedCreateWithoutUser_rankInput.prototype, "telephone_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CastUncheckedCreateWithoutUser_rankInput.prototype, "birthday", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CastUncheckedCreateWithoutUser_rankInput.prototype, "locate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastCreatelanguage_typeInput_1.CastCreatelanguage_typeInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastCreatelanguage_typeInput_1.CastCreatelanguage_typeInput)
], CastUncheckedCreateWithoutUser_rankInput.prototype, "language_type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CastUncheckedCreateWithoutUser_rankInput.prototype, "language_other", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], CastUncheckedCreateWithoutUser_rankInput.prototype, "cosplay_guide", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastCreatecosplay_contentInput_1.CastCreatecosplay_contentInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastCreatecosplay_contentInput_1.CastCreatecosplay_contentInput)
], CastUncheckedCreateWithoutUser_rankInput.prototype, "cosplay_content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CastUncheckedCreateWithoutUser_rankInput.prototype, "cosplay_other", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CupNumber_1.CupNumber, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CastUncheckedCreateWithoutUser_rankInput.prototype, "cup_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CastUncheckedCreateWithoutUser_rankInput.prototype, "memo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CastUncheckedCreateWithoutUser_rankInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriorityOrder_1.PriorityOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CastUncheckedCreateWithoutUser_rankInput.prototype, "homepage_recommended_priority", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Approval_1.Approval, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CastUncheckedCreateWithoutUser_rankInput.prototype, "profile_approval_by_admin", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CastUncheckedCreateWithoutUser_rankInput.prototype, "twitter_user_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CastUncheckedCreateWithoutUser_rankInput.prototype, "instagram_user_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CastUncheckedCreateWithoutUser_rankInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CastUncheckedCreateWithoutUser_rankInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUncheckedCreateNestedOneWithoutCastInput_1.UserUncheckedCreateNestedOneWithoutCastInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUncheckedCreateNestedOneWithoutCastInput_1.UserUncheckedCreateNestedOneWithoutCastInput)
], CastUncheckedCreateWithoutUser_rankInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FavoriteUncheckedCreateNestedManyWithoutCastInput_1.FavoriteUncheckedCreateNestedManyWithoutCastInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FavoriteUncheckedCreateNestedManyWithoutCastInput_1.FavoriteUncheckedCreateNestedManyWithoutCastInput)
], CastUncheckedCreateWithoutUser_rankInput.prototype, "favorite", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationUncheckedCreateNestedManyWithoutCastInput_1.NotificationUncheckedCreateNestedManyWithoutCastInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationUncheckedCreateNestedManyWithoutCastInput_1.NotificationUncheckedCreateNestedManyWithoutCastInput)
], CastUncheckedCreateWithoutUser_rankInput.prototype, "notification", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OptionMasterUncheckedCreateNestedManyWithoutCastInput_1.OptionMasterUncheckedCreateNestedManyWithoutCastInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OptionMasterUncheckedCreateNestedManyWithoutCastInput_1.OptionMasterUncheckedCreateNestedManyWithoutCastInput)
], CastUncheckedCreateWithoutUser_rankInput.prototype, "option_master", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShiftManagementUncheckedCreateNestedManyWithoutCastInput_1.ShiftManagementUncheckedCreateNestedManyWithoutCastInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShiftManagementUncheckedCreateNestedManyWithoutCastInput_1.ShiftManagementUncheckedCreateNestedManyWithoutCastInput)
], CastUncheckedCreateWithoutUser_rankInput.prototype, "shift_management", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewUncheckedCreateNestedManyWithoutCastInput_1.ReviewUncheckedCreateNestedManyWithoutCastInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReviewUncheckedCreateNestedManyWithoutCastInput_1.ReviewUncheckedCreateNestedManyWithoutCastInput)
], CastUncheckedCreateWithoutUser_rankInput.prototype, "review", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastInformationUncheckedCreateNestedOneWithoutCastInput_1.CastInformationUncheckedCreateNestedOneWithoutCastInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastInformationUncheckedCreateNestedOneWithoutCastInput_1.CastInformationUncheckedCreateNestedOneWithoutCastInput)
], CastUncheckedCreateWithoutUser_rankInput.prototype, "cast_information", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationUncheckedCreateNestedManyWithoutCastInput_1.ReservationUncheckedCreateNestedManyWithoutCastInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationUncheckedCreateNestedManyWithoutCastInput_1.ReservationUncheckedCreateNestedManyWithoutCastInput)
], CastUncheckedCreateWithoutUser_rankInput.prototype, "reservation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BankInformationUncheckedCreateNestedManyWithoutCastInput_1.BankInformationUncheckedCreateNestedManyWithoutCastInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BankInformationUncheckedCreateNestedManyWithoutCastInput_1.BankInformationUncheckedCreateNestedManyWithoutCastInput)
], CastUncheckedCreateWithoutUser_rankInput.prototype, "bank_information", void 0);
exports.CastUncheckedCreateWithoutUser_rankInput = CastUncheckedCreateWithoutUser_rankInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CastUncheckedCreateWithoutUser_rankInput", {})
], CastUncheckedCreateWithoutUser_rankInput);
