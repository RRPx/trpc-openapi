"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastUpdatelanguage_typeInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LanguageType_1 = require("../../enums/LanguageType");
let CastUpdatelanguage_typeInput = class CastUpdatelanguage_typeInput {
};
exports.CastUpdatelanguage_typeInput = CastUpdatelanguage_typeInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LanguageType_1.LanguageType], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CastUpdatelanguage_typeInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LanguageType_1.LanguageType], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CastUpdatelanguage_typeInput.prototype, "push", void 0);
exports.CastUpdatelanguage_typeInput = CastUpdatelanguage_typeInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CastUpdatelanguage_typeInput", {})
], CastUpdatelanguage_typeInput);
