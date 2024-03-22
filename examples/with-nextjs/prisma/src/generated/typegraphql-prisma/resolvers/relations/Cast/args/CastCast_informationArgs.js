"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastCast_informationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastInformationWhereInput_1 = require("../../../inputs/CastInformationWhereInput");
let CastCast_informationArgs = exports.CastCast_informationArgs = class CastCast_informationArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastInformationWhereInput_1.CastInformationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastInformationWhereInput_1.CastInformationWhereInput)
], CastCast_informationArgs.prototype, "where", void 0);
exports.CastCast_informationArgs = CastCast_informationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CastCast_informationArgs);
