"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminRole = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var AdminRole;
(function (AdminRole) {
    AdminRole["Administorator"] = "Administorator";
    AdminRole["EDITOR"] = "EDITOR";
    AdminRole["READER"] = "READER";
})(AdminRole || (exports.AdminRole = AdminRole = {}));
TypeGraphQL.registerEnumType(AdminRole, {
    name: "AdminRole",
    description: undefined,
});
