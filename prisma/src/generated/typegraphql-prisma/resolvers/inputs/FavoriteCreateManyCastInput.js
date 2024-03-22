"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoriteCreateManyCastInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let FavoriteCreateManyCastInput = class FavoriteCreateManyCastInput {
};
exports.FavoriteCreateManyCastInput = FavoriteCreateManyCastInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FavoriteCreateManyCastInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FavoriteCreateManyCastInput.prototype, "client_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], FavoriteCreateManyCastInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], FavoriteCreateManyCastInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], FavoriteCreateManyCastInput.prototype, "updated_at", void 0);
exports.FavoriteCreateManyCastInput = FavoriteCreateManyCastInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FavoriteCreateManyCastInput", {})
], FavoriteCreateManyCastInput);
