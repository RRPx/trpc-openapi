"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyCastInformationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastInformationWhereInput_1 = require("../../../inputs/CastInformationWhereInput");
let DeleteManyCastInformationArgs = class DeleteManyCastInformationArgs {
};
exports.DeleteManyCastInformationArgs = DeleteManyCastInformationArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastInformationWhereInput_1.CastInformationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastInformationWhereInput_1.CastInformationWhereInput)
], DeleteManyCastInformationArgs.prototype, "where", void 0);
exports.DeleteManyCastInformationArgs = DeleteManyCastInformationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyCastInformationArgs);
