"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Approval = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var Approval;
(function (Approval) {
    Approval["APPROVAL"] = "APPROVAL";
    Approval["DENIAL"] = "DENIAL";
    Approval["HOLD"] = "HOLD";
})(Approval || (exports.Approval = Approval = {}));
TypeGraphQL.registerEnumType(Approval, {
    name: "Approval",
    description: undefined,
});
