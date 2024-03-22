"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastCreateWithoutReviewInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BankInformationCreateNestedManyWithoutCastInput_1 = require("../inputs/BankInformationCreateNestedManyWithoutCastInput");
const CastCreatecosplay_contentInput_1 = require("../inputs/CastCreatecosplay_contentInput");
const CastCreatelanguage_typeInput_1 = require("../inputs/CastCreatelanguage_typeInput");
const CastInformationCreateNestedOneWithoutCastInput_1 = require("../inputs/CastInformationCreateNestedOneWithoutCastInput");
const FavoriteCreateNestedManyWithoutCastInput_1 = require("../inputs/FavoriteCreateNestedManyWithoutCastInput");
const NotificationCreateNestedManyWithoutCastInput_1 = require("../inputs/NotificationCreateNestedManyWithoutCastInput");
const OptionMasterCreateNestedManyWithoutCastInput_1 = require("../inputs/OptionMasterCreateNestedManyWithoutCastInput");
const ReservationCreateNestedManyWithoutCastInput_1 = require("../inputs/ReservationCreateNestedManyWithoutCastInput");
const ShiftManagementCreateNestedManyWithoutCastInput_1 = require("../inputs/ShiftManagementCreateNestedManyWithoutCastInput");
const UserCreateNestedOneWithoutCastInput_1 = require("../inputs/UserCreateNestedOneWithoutCastInput");
const UserRankCreateNestedOneWithoutCastInput_1 = require("../inputs/UserRankCreateNestedOneWithoutCastInput");
const Approval_1 = require("../../enums/Approval");
const CupNumber_1 = require("../../enums/CupNumber");
const PriorityOrder_1 = require("../../enums/PriorityOrder");
let CastCreateWithoutReviewInput = exports.CastCreateWithoutReviewInput = class CastCreateWithoutReviewInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CastCreateWithoutReviewInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CastCreateWithoutReviewInput.prototype, "nick_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CastCreateWithoutReviewInput.prototype, "telephone_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CastCreateWithoutReviewInput.prototype, "birthday", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CastCreateWithoutReviewInput.prototype, "locate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastCreatelanguage_typeInput_1.CastCreatelanguage_typeInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastCreatelanguage_typeInput_1.CastCreatelanguage_typeInput)
], CastCreateWithoutReviewInput.prototype, "language_type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CastCreateWithoutReviewInput.prototype, "language_other", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], CastCreateWithoutReviewInput.prototype, "cosplay_guide", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastCreatecosplay_contentInput_1.CastCreatecosplay_contentInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastCreatecosplay_contentInput_1.CastCreatecosplay_contentInput)
], CastCreateWithoutReviewInput.prototype, "cosplay_content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CastCreateWithoutReviewInput.prototype, "cosplay_other", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CupNumber_1.CupNumber, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CastCreateWithoutReviewInput.prototype, "cup_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CastCreateWithoutReviewInput.prototype, "memo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CastCreateWithoutReviewInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriorityOrder_1.PriorityOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CastCreateWithoutReviewInput.prototype, "homepage_recommended_priority", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Approval_1.Approval, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CastCreateWithoutReviewInput.prototype, "profile_approval_by_admin", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CastCreateWithoutReviewInput.prototype, "twitter_user_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CastCreateWithoutReviewInput.prototype, "instagram_user_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CastCreateWithoutReviewInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CastCreateWithoutReviewInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutCastInput_1.UserCreateNestedOneWithoutCastInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutCastInput_1.UserCreateNestedOneWithoutCastInput)
], CastCreateWithoutReviewInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRankCreateNestedOneWithoutCastInput_1.UserRankCreateNestedOneWithoutCastInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserRankCreateNestedOneWithoutCastInput_1.UserRankCreateNestedOneWithoutCastInput)
], CastCreateWithoutReviewInput.prototype, "user_rank", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FavoriteCreateNestedManyWithoutCastInput_1.FavoriteCreateNestedManyWithoutCastInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FavoriteCreateNestedManyWithoutCastInput_1.FavoriteCreateNestedManyWithoutCastInput)
], CastCreateWithoutReviewInput.prototype, "favorite", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationCreateNestedManyWithoutCastInput_1.NotificationCreateNestedManyWithoutCastInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationCreateNestedManyWithoutCastInput_1.NotificationCreateNestedManyWithoutCastInput)
], CastCreateWithoutReviewInput.prototype, "notification", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OptionMasterCreateNestedManyWithoutCastInput_1.OptionMasterCreateNestedManyWithoutCastInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OptionMasterCreateNestedManyWithoutCastInput_1.OptionMasterCreateNestedManyWithoutCastInput)
], CastCreateWithoutReviewInput.prototype, "option_master", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShiftManagementCreateNestedManyWithoutCastInput_1.ShiftManagementCreateNestedManyWithoutCastInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShiftManagementCreateNestedManyWithoutCastInput_1.ShiftManagementCreateNestedManyWithoutCastInput)
], CastCreateWithoutReviewInput.prototype, "shift_management", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastInformationCreateNestedOneWithoutCastInput_1.CastInformationCreateNestedOneWithoutCastInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastInformationCreateNestedOneWithoutCastInput_1.CastInformationCreateNestedOneWithoutCastInput)
], CastCreateWithoutReviewInput.prototype, "cast_information", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationCreateNestedManyWithoutCastInput_1.ReservationCreateNestedManyWithoutCastInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationCreateNestedManyWithoutCastInput_1.ReservationCreateNestedManyWithoutCastInput)
], CastCreateWithoutReviewInput.prototype, "reservation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BankInformationCreateNestedManyWithoutCastInput_1.BankInformationCreateNestedManyWithoutCastInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BankInformationCreateNestedManyWithoutCastInput_1.BankInformationCreateNestedManyWithoutCastInput)
], CastCreateWithoutReviewInput.prototype, "bank_information", void 0);
exports.CastCreateWithoutReviewInput = CastCreateWithoutReviewInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CastCreateWithoutReviewInput", {})
], CastCreateWithoutReviewInput);
