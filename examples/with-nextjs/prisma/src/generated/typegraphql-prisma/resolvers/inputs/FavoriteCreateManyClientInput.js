"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoriteCreateManyClientInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let FavoriteCreateManyClientInput = exports.FavoriteCreateManyClientInput = class FavoriteCreateManyClientInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FavoriteCreateManyClientInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FavoriteCreateManyClientInput.prototype, "cast_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], FavoriteCreateManyClientInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], FavoriteCreateManyClientInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], FavoriteCreateManyClientInput.prototype, "updated_at", void 0);
exports.FavoriteCreateManyClientInput = FavoriteCreateManyClientInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FavoriteCreateManyClientInput", {})
], FavoriteCreateManyClientInput);
