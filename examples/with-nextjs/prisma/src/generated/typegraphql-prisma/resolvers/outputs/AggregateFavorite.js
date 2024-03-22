"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateFavorite = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FavoriteCountAggregate_1 = require("../outputs/FavoriteCountAggregate");
const FavoriteMaxAggregate_1 = require("../outputs/FavoriteMaxAggregate");
const FavoriteMinAggregate_1 = require("../outputs/FavoriteMinAggregate");
let AggregateFavorite = exports.AggregateFavorite = class AggregateFavorite {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FavoriteCountAggregate_1.FavoriteCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FavoriteCountAggregate_1.FavoriteCountAggregate)
], AggregateFavorite.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FavoriteMinAggregate_1.FavoriteMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FavoriteMinAggregate_1.FavoriteMinAggregate)
], AggregateFavorite.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FavoriteMaxAggregate_1.FavoriteMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FavoriteMaxAggregate_1.FavoriteMaxAggregate)
], AggregateFavorite.prototype, "_max", void 0);
exports.AggregateFavorite = AggregateFavorite = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateFavorite", {})
], AggregateFavorite);
