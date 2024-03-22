"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastCreateWithoutOption_masterInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BankInformationCreateNestedManyWithoutCastInput_1 = require("../inputs/BankInformationCreateNestedManyWithoutCastInput");
const CastCreatecosplay_contentInput_1 = require("../inputs/CastCreatecosplay_contentInput");
const CastCreatelanguage_typeInput_1 = require("../inputs/CastCreatelanguage_typeInput");
const CastInformationCreateNestedOneWithoutCastInput_1 = require("../inputs/CastInformationCreateNestedOneWithoutCastInput");
const FavoriteCreateNestedManyWithoutCastInput_1 = require("../inputs/FavoriteCreateNestedManyWithoutCastInput");
const NotificationCreateNestedManyWithoutCastInput_1 = require("../inputs/NotificationCreateNestedManyWithoutCastInput");
const ReservationCreateNestedManyWithoutCastInput_1 = require("../inputs/ReservationCreateNestedManyWithoutCastInput");
const ReviewCreateNestedManyWithoutCastInput_1 = require("../inputs/ReviewCreateNestedManyWithoutCastInput");
const ShiftManagementCreateNestedManyWithoutCastInput_1 = require("../inputs/ShiftManagementCreateNestedManyWithoutCastInput");
const UserCreateNestedOneWithoutCastInput_1 = require("../inputs/UserCreateNestedOneWithoutCastInput");
const UserRankCreateNestedOneWithoutCastInput_1 = require("../inputs/UserRankCreateNestedOneWithoutCastInput");
const Approval_1 = require("../../enums/Approval");
const CupNumber_1 = require("../../enums/CupNumber");
const PriorityOrder_1 = require("../../enums/PriorityOrder");
let CastCreateWithoutOption_masterInput = exports.CastCreateWithoutOption_masterInput = class CastCreateWithoutOption_masterInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CastCreateWithoutOption_masterInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CastCreateWithoutOption_masterInput.prototype, "nick_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CastCreateWithoutOption_masterInput.prototype, "telephone_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CastCreateWithoutOption_masterInput.prototype, "birthday", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CastCreateWithoutOption_masterInput.prototype, "locate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastCreatelanguage_typeInput_1.CastCreatelanguage_typeInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastCreatelanguage_typeInput_1.CastCreatelanguage_typeInput)
], CastCreateWithoutOption_masterInput.prototype, "language_type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CastCreateWithoutOption_masterInput.prototype, "language_other", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], CastCreateWithoutOption_masterInput.prototype, "cosplay_guide", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastCreatecosplay_contentInput_1.CastCreatecosplay_contentInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastCreatecosplay_contentInput_1.CastCreatecosplay_contentInput)
], CastCreateWithoutOption_masterInput.prototype, "cosplay_content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CastCreateWithoutOption_masterInput.prototype, "cosplay_other", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CupNumber_1.CupNumber, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CastCreateWithoutOption_masterInput.prototype, "cup_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CastCreateWithoutOption_masterInput.prototype, "memo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CastCreateWithoutOption_masterInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriorityOrder_1.PriorityOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CastCreateWithoutOption_masterInput.prototype, "homepage_recommended_priority", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Approval_1.Approval, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CastCreateWithoutOption_masterInput.prototype, "profile_approval_by_admin", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CastCreateWithoutOption_masterInput.prototype, "twitter_user_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CastCreateWithoutOption_masterInput.prototype, "instagram_user_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CastCreateWithoutOption_masterInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CastCreateWithoutOption_masterInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutCastInput_1.UserCreateNestedOneWithoutCastInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutCastInput_1.UserCreateNestedOneWithoutCastInput)
], CastCreateWithoutOption_masterInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRankCreateNestedOneWithoutCastInput_1.UserRankCreateNestedOneWithoutCastInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserRankCreateNestedOneWithoutCastInput_1.UserRankCreateNestedOneWithoutCastInput)
], CastCreateWithoutOption_masterInput.prototype, "user_rank", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FavoriteCreateNestedManyWithoutCastInput_1.FavoriteCreateNestedManyWithoutCastInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FavoriteCreateNestedManyWithoutCastInput_1.FavoriteCreateNestedManyWithoutCastInput)
], CastCreateWithoutOption_masterInput.prototype, "favorite", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationCreateNestedManyWithoutCastInput_1.NotificationCreateNestedManyWithoutCastInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationCreateNestedManyWithoutCastInput_1.NotificationCreateNestedManyWithoutCastInput)
], CastCreateWithoutOption_masterInput.prototype, "notification", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShiftManagementCreateNestedManyWithoutCastInput_1.ShiftManagementCreateNestedManyWithoutCastInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShiftManagementCreateNestedManyWithoutCastInput_1.ShiftManagementCreateNestedManyWithoutCastInput)
], CastCreateWithoutOption_masterInput.prototype, "shift_management", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewCreateNestedManyWithoutCastInput_1.ReviewCreateNestedManyWithoutCastInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReviewCreateNestedManyWithoutCastInput_1.ReviewCreateNestedManyWithoutCastInput)
], CastCreateWithoutOption_masterInput.prototype, "review", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastInformationCreateNestedOneWithoutCastInput_1.CastInformationCreateNestedOneWithoutCastInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastInformationCreateNestedOneWithoutCastInput_1.CastInformationCreateNestedOneWithoutCastInput)
], CastCreateWithoutOption_masterInput.prototype, "cast_information", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationCreateNestedManyWithoutCastInput_1.ReservationCreateNestedManyWithoutCastInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationCreateNestedManyWithoutCastInput_1.ReservationCreateNestedManyWithoutCastInput)
], CastCreateWithoutOption_masterInput.prototype, "reservation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BankInformationCreateNestedManyWithoutCastInput_1.BankInformationCreateNestedManyWithoutCastInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BankInformationCreateNestedManyWithoutCastInput_1.BankInformationCreateNestedManyWithoutCastInput)
], CastCreateWithoutOption_masterInput.prototype, "bank_information", void 0);
exports.CastCreateWithoutOption_masterInput = CastCreateWithoutOption_masterInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CastCreateWithoutOption_masterInput", {})
], CastCreateWithoutOption_masterInput);
