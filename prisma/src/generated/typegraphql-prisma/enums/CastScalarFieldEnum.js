"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var CastScalarFieldEnum;
(function (CastScalarFieldEnum) {
    CastScalarFieldEnum["id"] = "id";
    CastScalarFieldEnum["nick_name"] = "nick_name";
    CastScalarFieldEnum["telephone_number"] = "telephone_number";
    CastScalarFieldEnum["birthday"] = "birthday";
    CastScalarFieldEnum["locate"] = "locate";
    CastScalarFieldEnum["language_type"] = "language_type";
    CastScalarFieldEnum["language_other"] = "language_other";
    CastScalarFieldEnum["cosplay_guide"] = "cosplay_guide";
    CastScalarFieldEnum["cosplay_content"] = "cosplay_content";
    CastScalarFieldEnum["cosplay_other"] = "cosplay_other";
    CastScalarFieldEnum["cup_number"] = "cup_number";
    CastScalarFieldEnum["memo"] = "memo";
    CastScalarFieldEnum["user_rank_id"] = "user_rank_id";
    CastScalarFieldEnum["is_display"] = "is_display";
    CastScalarFieldEnum["homepage_recommended_priority"] = "homepage_recommended_priority";
    CastScalarFieldEnum["profile_approval_by_admin"] = "profile_approval_by_admin";
    CastScalarFieldEnum["twitter_user_name"] = "twitter_user_name";
    CastScalarFieldEnum["instagram_user_name"] = "instagram_user_name";
    CastScalarFieldEnum["created_at"] = "created_at";
    CastScalarFieldEnum["updated_at"] = "updated_at";
})(CastScalarFieldEnum || (exports.CastScalarFieldEnum = CastScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(CastScalarFieldEnum, {
    name: "CastScalarFieldEnum",
    description: undefined,
});
