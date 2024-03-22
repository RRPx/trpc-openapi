"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InquiryScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var InquiryScalarFieldEnum;
(function (InquiryScalarFieldEnum) {
    InquiryScalarFieldEnum["id"] = "id";
    InquiryScalarFieldEnum["name"] = "name";
    InquiryScalarFieldEnum["email"] = "email";
    InquiryScalarFieldEnum["token"] = "token";
    InquiryScalarFieldEnum["title"] = "title";
    InquiryScalarFieldEnum["content"] = "content";
    InquiryScalarFieldEnum["is_seen"] = "is_seen";
    InquiryScalarFieldEnum["inquirerRole"] = "inquirerRole";
    InquiryScalarFieldEnum["created_at"] = "created_at";
})(InquiryScalarFieldEnum || (exports.InquiryScalarFieldEnum = InquiryScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(InquiryScalarFieldEnum, {
    name: "InquiryScalarFieldEnum",
    description: undefined,
});
