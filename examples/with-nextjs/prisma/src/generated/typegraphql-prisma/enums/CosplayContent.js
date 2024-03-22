"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CosplayContent = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var CosplayContent;
(function (CosplayContent) {
    CosplayContent["maid"] = "maid";
    CosplayContent["anime"] = "anime";
})(CosplayContent || (exports.CosplayContent = CosplayContent = {}));
TypeGraphQL.registerEnumType(CosplayContent, {
    name: "CosplayContent",
    description: undefined,
});
