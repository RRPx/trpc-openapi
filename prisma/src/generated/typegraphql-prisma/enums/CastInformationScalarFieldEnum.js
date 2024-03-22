"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastInformationScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var CastInformationScalarFieldEnum;
(function (CastInformationScalarFieldEnum) {
    CastInformationScalarFieldEnum["id"] = "id";
    CastInformationScalarFieldEnum["cast_id"] = "cast_id";
    CastInformationScalarFieldEnum["age"] = "age";
    CastInformationScalarFieldEnum["height"] = "height";
    CastInformationScalarFieldEnum["blood_type"] = "blood_type";
    CastInformationScalarFieldEnum["personality"] = "personality";
    CastInformationScalarFieldEnum["user_image_main"] = "user_image_main";
    CastInformationScalarFieldEnum["user_image_sub1"] = "user_image_sub1";
    CastInformationScalarFieldEnum["user_image_sub2"] = "user_image_sub2";
    CastInformationScalarFieldEnum["user_image_sub3"] = "user_image_sub3";
    CastInformationScalarFieldEnum["user_image_sub4"] = "user_image_sub4";
    CastInformationScalarFieldEnum["liquor"] = "liquor";
    CastInformationScalarFieldEnum["smoking"] = "smoking";
    CastInformationScalarFieldEnum["hobby"] = "hobby";
    CastInformationScalarFieldEnum["like_spot"] = "like_spot";
    CastInformationScalarFieldEnum["self_introduction"] = "self_introduction";
    CastInformationScalarFieldEnum["pick_up"] = "pick_up";
    CastInformationScalarFieldEnum["is_display"] = "is_display";
    CastInformationScalarFieldEnum["created_at"] = "created_at";
    CastInformationScalarFieldEnum["updated_at"] = "updated_at";
})(CastInformationScalarFieldEnum || (exports.CastInformationScalarFieldEnum = CastInformationScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(CastInformationScalarFieldEnum, {
    name: "CastInformationScalarFieldEnum",
    description: undefined,
});
