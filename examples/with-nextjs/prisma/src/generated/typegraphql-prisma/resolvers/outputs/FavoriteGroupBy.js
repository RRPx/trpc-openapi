"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoriteGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FavoriteCountAggregate_1 = require("../outputs/FavoriteCountAggregate");
const FavoriteMaxAggregate_1 = require("../outputs/FavoriteMaxAggregate");
const FavoriteMinAggregate_1 = require("../outputs/FavoriteMinAggregate");
let FavoriteGroupBy = exports.FavoriteGroupBy = class FavoriteGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], FavoriteGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FavoriteGroupBy.prototype, "client_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FavoriteGroupBy.prototype, "cast_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], FavoriteGroupBy.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], FavoriteGroupBy.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], FavoriteGroupBy.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FavoriteCountAggregate_1.FavoriteCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FavoriteCountAggregate_1.FavoriteCountAggregate)
], FavoriteGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FavoriteMinAggregate_1.FavoriteMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FavoriteMinAggregate_1.FavoriteMinAggregate)
], FavoriteGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FavoriteMaxAggregate_1.FavoriteMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FavoriteMaxAggregate_1.FavoriteMaxAggregate)
], FavoriteGroupBy.prototype, "_max", void 0);
exports.FavoriteGroupBy = FavoriteGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("FavoriteGroupBy", {})
], FavoriteGroupBy);
