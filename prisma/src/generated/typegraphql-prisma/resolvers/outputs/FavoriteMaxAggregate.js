"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoriteMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let FavoriteMaxAggregate = class FavoriteMaxAggregate {
};
exports.FavoriteMaxAggregate = FavoriteMaxAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FavoriteMaxAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FavoriteMaxAggregate.prototype, "client_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FavoriteMaxAggregate.prototype, "cast_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], FavoriteMaxAggregate.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], FavoriteMaxAggregate.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], FavoriteMaxAggregate.prototype, "updated_at", void 0);
exports.FavoriteMaxAggregate = FavoriteMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("FavoriteMaxAggregate", {})
], FavoriteMaxAggregate);
