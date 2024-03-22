"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionMasterCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let OptionMasterCreateManyInput = class OptionMasterCreateManyInput {
};
exports.OptionMasterCreateManyInput = OptionMasterCreateManyInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OptionMasterCreateManyInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], OptionMasterCreateManyInput.prototype, "option_menu", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], OptionMasterCreateManyInput.prototype, "fee", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], OptionMasterCreateManyInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OptionMasterCreateManyInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OptionMasterCreateManyInput.prototype, "updated_at", void 0);
exports.OptionMasterCreateManyInput = OptionMasterCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OptionMasterCreateManyInput", {})
], OptionMasterCreateManyInput);
