"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastCreateWithoutBank_informationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastCreatecosplay_contentInput_1 = require("../inputs/CastCreatecosplay_contentInput");
const CastCreatelanguage_typeInput_1 = require("../inputs/CastCreatelanguage_typeInput");
const CastInformationCreateNestedOneWithoutCastInput_1 = require("../inputs/CastInformationCreateNestedOneWithoutCastInput");
const FavoriteCreateNestedManyWithoutCastInput_1 = require("../inputs/FavoriteCreateNestedManyWithoutCastInput");
const NotificationCreateNestedManyWithoutCastInput_1 = require("../inputs/NotificationCreateNestedManyWithoutCastInput");
const OptionMasterCreateNestedManyWithoutCastInput_1 = require("../inputs/OptionMasterCreateNestedManyWithoutCastInput");
const ReservationCreateNestedManyWithoutCastInput_1 = require("../inputs/ReservationCreateNestedManyWithoutCastInput");
const ReviewCreateNestedManyWithoutCastInput_1 = require("../inputs/ReviewCreateNestedManyWithoutCastInput");
const ShiftManagementCreateNestedManyWithoutCastInput_1 = require("../inputs/ShiftManagementCreateNestedManyWithoutCastInput");
const UserCreateNestedOneWithoutCastInput_1 = require("../inputs/UserCreateNestedOneWithoutCastInput");
const UserRankCreateNestedOneWithoutCastInput_1 = require("../inputs/UserRankCreateNestedOneWithoutCastInput");
const Approval_1 = require("../../enums/Approval");
const CupNumber_1 = require("../../enums/CupNumber");
const PriorityOrder_1 = require("../../enums/PriorityOrder");
let CastCreateWithoutBank_informationInput = class CastCreateWithoutBank_informationInput {
};
exports.CastCreateWithoutBank_informationInput = CastCreateWithoutBank_informationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CastCreateWithoutBank_informationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CastCreateWithoutBank_informationInput.prototype, "nick_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CastCreateWithoutBank_informationInput.prototype, "telephone_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CastCreateWithoutBank_informationInput.prototype, "birthday", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CastCreateWithoutBank_informationInput.prototype, "locate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastCreatelanguage_typeInput_1.CastCreatelanguage_typeInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastCreatelanguage_typeInput_1.CastCreatelanguage_typeInput)
], CastCreateWithoutBank_informationInput.prototype, "language_type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CastCreateWithoutBank_informationInput.prototype, "language_other", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], CastCreateWithoutBank_informationInput.prototype, "cosplay_guide", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastCreatecosplay_contentInput_1.CastCreatecosplay_contentInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastCreatecosplay_contentInput_1.CastCreatecosplay_contentInput)
], CastCreateWithoutBank_informationInput.prototype, "cosplay_content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CastCreateWithoutBank_informationInput.prototype, "cosplay_other", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CupNumber_1.CupNumber, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CastCreateWithoutBank_informationInput.prototype, "cup_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CastCreateWithoutBank_informationInput.prototype, "memo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CastCreateWithoutBank_informationInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriorityOrder_1.PriorityOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CastCreateWithoutBank_informationInput.prototype, "homepage_recommended_priority", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Approval_1.Approval, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CastCreateWithoutBank_informationInput.prototype, "profile_approval_by_admin", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CastCreateWithoutBank_informationInput.prototype, "twitter_user_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CastCreateWithoutBank_informationInput.prototype, "instagram_user_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CastCreateWithoutBank_informationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CastCreateWithoutBank_informationInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutCastInput_1.UserCreateNestedOneWithoutCastInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutCastInput_1.UserCreateNestedOneWithoutCastInput)
], CastCreateWithoutBank_informationInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRankCreateNestedOneWithoutCastInput_1.UserRankCreateNestedOneWithoutCastInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserRankCreateNestedOneWithoutCastInput_1.UserRankCreateNestedOneWithoutCastInput)
], CastCreateWithoutBank_informationInput.prototype, "user_rank", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FavoriteCreateNestedManyWithoutCastInput_1.FavoriteCreateNestedManyWithoutCastInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FavoriteCreateNestedManyWithoutCastInput_1.FavoriteCreateNestedManyWithoutCastInput)
], CastCreateWithoutBank_informationInput.prototype, "favorite", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationCreateNestedManyWithoutCastInput_1.NotificationCreateNestedManyWithoutCastInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationCreateNestedManyWithoutCastInput_1.NotificationCreateNestedManyWithoutCastInput)
], CastCreateWithoutBank_informationInput.prototype, "notification", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OptionMasterCreateNestedManyWithoutCastInput_1.OptionMasterCreateNestedManyWithoutCastInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OptionMasterCreateNestedManyWithoutCastInput_1.OptionMasterCreateNestedManyWithoutCastInput)
], CastCreateWithoutBank_informationInput.prototype, "option_master", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShiftManagementCreateNestedManyWithoutCastInput_1.ShiftManagementCreateNestedManyWithoutCastInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShiftManagementCreateNestedManyWithoutCastInput_1.ShiftManagementCreateNestedManyWithoutCastInput)
], CastCreateWithoutBank_informationInput.prototype, "shift_management", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewCreateNestedManyWithoutCastInput_1.ReviewCreateNestedManyWithoutCastInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReviewCreateNestedManyWithoutCastInput_1.ReviewCreateNestedManyWithoutCastInput)
], CastCreateWithoutBank_informationInput.prototype, "review", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastInformationCreateNestedOneWithoutCastInput_1.CastInformationCreateNestedOneWithoutCastInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastInformationCreateNestedOneWithoutCastInput_1.CastInformationCreateNestedOneWithoutCastInput)
], CastCreateWithoutBank_informationInput.prototype, "cast_information", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationCreateNestedManyWithoutCastInput_1.ReservationCreateNestedManyWithoutCastInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationCreateNestedManyWithoutCastInput_1.ReservationCreateNestedManyWithoutCastInput)
], CastCreateWithoutBank_informationInput.prototype, "reservation", void 0);
exports.CastCreateWithoutBank_informationInput = CastCreateWithoutBank_informationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CastCreateWithoutBank_informationInput", {})
], CastCreateWithoutBank_informationInput);
