"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var AddressScalarFieldEnum;
(function (AddressScalarFieldEnum) {
    AddressScalarFieldEnum["id"] = "id";
    AddressScalarFieldEnum["lat"] = "lat";
    AddressScalarFieldEnum["long"] = "long";
    AddressScalarFieldEnum["note"] = "note";
    AddressScalarFieldEnum["address"] = "address";
    AddressScalarFieldEnum["is_display"] = "is_display";
    AddressScalarFieldEnum["created_at"] = "created_at";
})(AddressScalarFieldEnum || (exports.AddressScalarFieldEnum = AddressScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(AddressScalarFieldEnum, {
    name: "AddressScalarFieldEnum",
    description: undefined,
});
