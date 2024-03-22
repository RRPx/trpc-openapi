"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoriteOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastOrderByWithRelationInput_1 = require("../inputs/CastOrderByWithRelationInput");
const ClientOrderByWithRelationInput_1 = require("../inputs/ClientOrderByWithRelationInput");
const SortOrderInput_1 = require("../inputs/SortOrderInput");
const SortOrder_1 = require("../../enums/SortOrder");
let FavoriteOrderByWithRelationInput = exports.FavoriteOrderByWithRelationInput = class FavoriteOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FavoriteOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], FavoriteOrderByWithRelationInput.prototype, "client_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], FavoriteOrderByWithRelationInput.prototype, "cast_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FavoriteOrderByWithRelationInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FavoriteOrderByWithRelationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FavoriteOrderByWithRelationInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientOrderByWithRelationInput_1.ClientOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientOrderByWithRelationInput_1.ClientOrderByWithRelationInput)
], FavoriteOrderByWithRelationInput.prototype, "client", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastOrderByWithRelationInput_1.CastOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastOrderByWithRelationInput_1.CastOrderByWithRelationInput)
], FavoriteOrderByWithRelationInput.prototype, "cast", void 0);
exports.FavoriteOrderByWithRelationInput = FavoriteOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FavoriteOrderByWithRelationInput", {})
], FavoriteOrderByWithRelationInput);
