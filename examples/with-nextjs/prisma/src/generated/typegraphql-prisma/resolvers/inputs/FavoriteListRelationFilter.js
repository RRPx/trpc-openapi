"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoriteListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FavoriteWhereInput_1 = require("../inputs/FavoriteWhereInput");
let FavoriteListRelationFilter = exports.FavoriteListRelationFilter = class FavoriteListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FavoriteWhereInput_1.FavoriteWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FavoriteWhereInput_1.FavoriteWhereInput)
], FavoriteListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FavoriteWhereInput_1.FavoriteWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FavoriteWhereInput_1.FavoriteWhereInput)
], FavoriteListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FavoriteWhereInput_1.FavoriteWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FavoriteWhereInput_1.FavoriteWhereInput)
], FavoriteListRelationFilter.prototype, "none", void 0);
exports.FavoriteListRelationFilter = FavoriteListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("FavoriteListRelationFilter", {})
], FavoriteListRelationFilter);
