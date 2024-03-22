"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneCastInformationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastInformationUncheckedCreateInput_1 = require("../../../inputs/CastInformationUncheckedCreateInput");
const CastInformationUncheckedUpdateInput_1 = require("../../../inputs/CastInformationUncheckedUpdateInput");
const CastInformationWhereUniqueInput_1 = require("../../../inputs/CastInformationWhereUniqueInput");
let UpsertOneCastInformationArgs = exports.UpsertOneCastInformationArgs = class UpsertOneCastInformationArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastInformationWhereUniqueInput_1.CastInformationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CastInformationWhereUniqueInput_1.CastInformationWhereUniqueInput)
], UpsertOneCastInformationArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastInformationUncheckedCreateInput_1.CastInformationUncheckedCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CastInformationUncheckedCreateInput_1.CastInformationUncheckedCreateInput)
], UpsertOneCastInformationArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastInformationUncheckedUpdateInput_1.CastInformationUncheckedUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CastInformationUncheckedUpdateInput_1.CastInformationUncheckedUpdateInput)
], UpsertOneCastInformationArgs.prototype, "update", void 0);
exports.UpsertOneCastInformationArgs = UpsertOneCastInformationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneCastInformationArgs);
