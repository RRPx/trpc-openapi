"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var ClientScalarFieldEnum;
(function (ClientScalarFieldEnum) {
    ClientScalarFieldEnum["id"] = "id";
    ClientScalarFieldEnum["telephone_number"] = "telephone_number";
    ClientScalarFieldEnum["birthday"] = "birthday";
    ClientScalarFieldEnum["age"] = "age";
    ClientScalarFieldEnum["nick_name"] = "nick_name";
    ClientScalarFieldEnum["image"] = "image";
    ClientScalarFieldEnum["gender"] = "gender";
    ClientScalarFieldEnum["image2"] = "image2";
    ClientScalarFieldEnum["image3"] = "image3";
    ClientScalarFieldEnum["is_display"] = "is_display";
    ClientScalarFieldEnum["created_at"] = "created_at";
})(ClientScalarFieldEnum || (exports.ClientScalarFieldEnum = ClientScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(ClientScalarFieldEnum, {
    name: "ClientScalarFieldEnum",
    description: undefined,
});
