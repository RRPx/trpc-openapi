"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastUpdatecosplay_contentInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CosplayContent_1 = require("../../enums/CosplayContent");
let CastUpdatecosplay_contentInput = exports.CastUpdatecosplay_contentInput = class CastUpdatecosplay_contentInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CosplayContent_1.CosplayContent], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CastUpdatecosplay_contentInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CosplayContent_1.CosplayContent], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CastUpdatecosplay_contentInput.prototype, "push", void 0);
exports.CastUpdatecosplay_contentInput = CastUpdatecosplay_contentInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CastUpdatecosplay_contentInput", {})
], CastUpdatecosplay_contentInput);
