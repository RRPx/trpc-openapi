"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueCastInformationOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastInformationWhereUniqueInput_1 = require("../../../inputs/CastInformationWhereUniqueInput");
let FindUniqueCastInformationOrThrowArgs = exports.FindUniqueCastInformationOrThrowArgs = class FindUniqueCastInformationOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastInformationWhereUniqueInput_1.CastInformationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CastInformationWhereUniqueInput_1.CastInformationWhereUniqueInput)
], FindUniqueCastInformationOrThrowArgs.prototype, "where", void 0);
exports.FindUniqueCastInformationOrThrowArgs = FindUniqueCastInformationOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueCastInformationOrThrowArgs);
