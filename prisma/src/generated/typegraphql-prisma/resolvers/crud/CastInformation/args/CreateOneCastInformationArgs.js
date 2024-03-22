"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneCastInformationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastInformationUncheckedCreateInput_1 = require("../../../inputs/CastInformationUncheckedCreateInput");
let CreateOneCastInformationArgs = class CreateOneCastInformationArgs {
};
exports.CreateOneCastInformationArgs = CreateOneCastInformationArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastInformationUncheckedCreateInput_1.CastInformationUncheckedCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CastInformationUncheckedCreateInput_1.CastInformationUncheckedCreateInput)
], CreateOneCastInformationArgs.prototype, "data", void 0);
exports.CreateOneCastInformationArgs = CreateOneCastInformationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneCastInformationArgs);
