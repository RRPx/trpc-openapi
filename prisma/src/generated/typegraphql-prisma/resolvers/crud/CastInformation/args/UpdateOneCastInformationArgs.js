"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneCastInformationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastInformationUncheckedUpdateInput_1 = require("../../../inputs/CastInformationUncheckedUpdateInput");
const CastInformationWhereUniqueInput_1 = require("../../../inputs/CastInformationWhereUniqueInput");
let UpdateOneCastInformationArgs = class UpdateOneCastInformationArgs {
};
exports.UpdateOneCastInformationArgs = UpdateOneCastInformationArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastInformationUncheckedUpdateInput_1.CastInformationUncheckedUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CastInformationUncheckedUpdateInput_1.CastInformationUncheckedUpdateInput)
], UpdateOneCastInformationArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastInformationWhereUniqueInput_1.CastInformationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CastInformationWhereUniqueInput_1.CastInformationWhereUniqueInput)
], UpdateOneCastInformationArgs.prototype, "where", void 0);
exports.UpdateOneCastInformationArgs = UpdateOneCastInformationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneCastInformationArgs);
