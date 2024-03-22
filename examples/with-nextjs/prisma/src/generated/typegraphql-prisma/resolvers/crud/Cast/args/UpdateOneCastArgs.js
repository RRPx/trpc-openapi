"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneCastArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastUncheckedUpdateInput_1 = require("../../../inputs/CastUncheckedUpdateInput");
const CastWhereUniqueInput_1 = require("../../../inputs/CastWhereUniqueInput");
let UpdateOneCastArgs = exports.UpdateOneCastArgs = class UpdateOneCastArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUncheckedUpdateInput_1.CastUncheckedUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CastUncheckedUpdateInput_1.CastUncheckedUpdateInput)
], UpdateOneCastArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastWhereUniqueInput_1.CastWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CastWhereUniqueInput_1.CastWhereUniqueInput)
], UpdateOneCastArgs.prototype, "where", void 0);
exports.UpdateOneCastArgs = UpdateOneCastArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneCastArgs);
