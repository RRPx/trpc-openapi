"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyCastInformationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastInformationUncheckedUpdateManyInput_1 = require("../../../inputs/CastInformationUncheckedUpdateManyInput");
const CastInformationWhereInput_1 = require("../../../inputs/CastInformationWhereInput");
let UpdateManyCastInformationArgs = exports.UpdateManyCastInformationArgs = class UpdateManyCastInformationArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastInformationUncheckedUpdateManyInput_1.CastInformationUncheckedUpdateManyInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CastInformationUncheckedUpdateManyInput_1.CastInformationUncheckedUpdateManyInput)
], UpdateManyCastInformationArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastInformationWhereInput_1.CastInformationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastInformationWhereInput_1.CastInformationWhereInput)
], UpdateManyCastInformationArgs.prototype, "where", void 0);
exports.UpdateManyCastInformationArgs = UpdateManyCastInformationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyCastInformationArgs);
