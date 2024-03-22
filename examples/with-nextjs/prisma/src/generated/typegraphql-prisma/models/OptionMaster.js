"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionMaster = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OptionMasterCount_1 = require("../resolvers/outputs/OptionMasterCount");
let OptionMaster = exports.OptionMaster = class OptionMaster {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], OptionMaster.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], OptionMaster.prototype, "option_menu", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], OptionMaster.prototype, "fee", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], OptionMaster.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], OptionMaster.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], OptionMaster.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OptionMasterCount_1.OptionMasterCount, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OptionMasterCount_1.OptionMasterCount)
], OptionMaster.prototype, "_count", void 0);
exports.OptionMaster = OptionMaster = tslib_1.__decorate([
    TypeGraphQL.ObjectType("OptionMaster", {})
], OptionMaster);
