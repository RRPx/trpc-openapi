"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageType = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var LanguageType;
(function (LanguageType) {
    LanguageType["English"] = "English";
    LanguageType["Chinese"] = "Chinese";
    LanguageType["Korean"] = "Korean";
})(LanguageType || (exports.LanguageType = LanguageType = {}));
TypeGraphQL.registerEnumType(LanguageType, {
    name: "LanguageType",
    description: undefined,
});
