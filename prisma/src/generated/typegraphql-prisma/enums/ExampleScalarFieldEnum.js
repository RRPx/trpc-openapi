"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExampleScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var ExampleScalarFieldEnum;
(function (ExampleScalarFieldEnum) {
    ExampleScalarFieldEnum["id"] = "id";
    ExampleScalarFieldEnum["name"] = "name";
    ExampleScalarFieldEnum["createdAt"] = "createdAt";
    ExampleScalarFieldEnum["updatedAt"] = "updatedAt";
})(ExampleScalarFieldEnum || (exports.ExampleScalarFieldEnum = ExampleScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(ExampleScalarFieldEnum, {
    name: "ExampleScalarFieldEnum",
    description: undefined,
});
