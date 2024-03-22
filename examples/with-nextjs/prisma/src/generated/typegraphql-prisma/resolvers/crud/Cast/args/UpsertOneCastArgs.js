"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneCastArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastUncheckedCreateInput_1 = require("../../../inputs/CastUncheckedCreateInput");
const CastUncheckedUpdateInput_1 = require("../../../inputs/CastUncheckedUpdateInput");
const CastWhereUniqueInput_1 = require("../../../inputs/CastWhereUniqueInput");
let UpsertOneCastArgs = exports.UpsertOneCastArgs = class UpsertOneCastArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastWhereUniqueInput_1.CastWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CastWhereUniqueInput_1.CastWhereUniqueInput)
], UpsertOneCastArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUncheckedCreateInput_1.CastUncheckedCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CastUncheckedCreateInput_1.CastUncheckedCreateInput)
], UpsertOneCastArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUncheckedUpdateInput_1.CastUncheckedUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CastUncheckedUpdateInput_1.CastUncheckedUpdateInput)
], UpsertOneCastArgs.prototype, "update", void 0);
exports.UpsertOneCastArgs = UpsertOneCastArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneCastArgs);
