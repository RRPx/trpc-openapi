"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InquirerRole = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var InquirerRole;
(function (InquirerRole) {
    InquirerRole["CAST"] = "CAST";
    InquirerRole["CLIENT"] = "CLIENT";
    InquirerRole["UNREGISTER"] = "UNREGISTER";
})(InquirerRole || (exports.InquirerRole = InquirerRole = {}));
TypeGraphQL.registerEnumType(InquirerRole, {
    name: "InquirerRole",
    description: undefined,
});
