"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TargetedUser = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var TargetedUser;
(function (TargetedUser) {
    TargetedUser["CAST"] = "CAST";
    TargetedUser["CLIENT"] = "CLIENT";
    TargetedUser["BOTH"] = "BOTH";
    TargetedUser["NONE"] = "NONE";
})(TargetedUser || (exports.TargetedUser = TargetedUser = {}));
TypeGraphQL.registerEnumType(TargetedUser, {
    name: "TargetedUser",
    description: undefined,
});
