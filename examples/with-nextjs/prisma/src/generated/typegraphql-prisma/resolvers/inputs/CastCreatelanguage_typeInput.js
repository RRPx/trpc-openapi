"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastCreatelanguage_typeInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LanguageType_1 = require("../../enums/LanguageType");
let CastCreatelanguage_typeInput = exports.CastCreatelanguage_typeInput = class CastCreatelanguage_typeInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LanguageType_1.LanguageType], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CastCreatelanguage_typeInput.prototype, "set", void 0);
exports.CastCreatelanguage_typeInput = CastCreatelanguage_typeInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CastCreatelanguage_typeInput", {})
], CastCreatelanguage_typeInput);
