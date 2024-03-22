"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriorityOrder = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var PriorityOrder;
(function (PriorityOrder) {
    PriorityOrder["A"] = "A";
    PriorityOrder["B"] = "B";
    PriorityOrder["C"] = "C";
    PriorityOrder["D"] = "D";
    PriorityOrder["E"] = "E";
})(PriorityOrder || (exports.PriorityOrder = PriorityOrder = {}));
TypeGraphQL.registerEnumType(PriorityOrder, {
    name: "PriorityOrder",
    description: undefined,
});
