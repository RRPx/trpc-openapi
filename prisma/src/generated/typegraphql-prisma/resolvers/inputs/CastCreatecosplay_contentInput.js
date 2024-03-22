"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastCreatecosplay_contentInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CosplayContent_1 = require("../../enums/CosplayContent");
let CastCreatecosplay_contentInput = class CastCreatecosplay_contentInput {
};
exports.CastCreatecosplay_contentInput = CastCreatecosplay_contentInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CosplayContent_1.CosplayContent], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CastCreatecosplay_contentInput.prototype, "set", void 0);
exports.CastCreatecosplay_contentInput = CastCreatecosplay_contentInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CastCreatecosplay_contentInput", {})
], CastCreatecosplay_contentInput);
