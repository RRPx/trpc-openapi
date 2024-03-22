"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionMasterCountCastArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastWhereInput_1 = require("../../inputs/CastWhereInput");
let OptionMasterCountCastArgs = class OptionMasterCountCastArgs {
};
exports.OptionMasterCountCastArgs = OptionMasterCountCastArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastWhereInput_1.CastWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastWhereInput_1.CastWhereInput)
], OptionMasterCountCastArgs.prototype, "where", void 0);
exports.OptionMasterCountCastArgs = OptionMasterCountCastArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], OptionMasterCountCastArgs);
