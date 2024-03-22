"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyCastArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastUncheckedUpdateManyInput_1 = require("../../../inputs/CastUncheckedUpdateManyInput");
const CastWhereInput_1 = require("../../../inputs/CastWhereInput");
let UpdateManyCastArgs = class UpdateManyCastArgs {
};
exports.UpdateManyCastArgs = UpdateManyCastArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUncheckedUpdateManyInput_1.CastUncheckedUpdateManyInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CastUncheckedUpdateManyInput_1.CastUncheckedUpdateManyInput)
], UpdateManyCastArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastWhereInput_1.CastWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastWhereInput_1.CastWhereInput)
], UpdateManyCastArgs.prototype, "where", void 0);
exports.UpdateManyCastArgs = UpdateManyCastArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyCastArgs);
